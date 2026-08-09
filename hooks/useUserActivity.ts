import { useEffect, useState } from 'react';
import { Call as SDKCall } from '@stream-io/video-react-sdk';

// Extend the SDK Call type to include your custom fields
type Call = SDKCall & {
  created_by_user_id?: string;
  created_by_user_name?: string;
  members?: Array<{ id: string; name: string }>;
};

export const useUserActivity = (callsData: Call[]) => {
  const [userActivity, setUserActivity] = useState<
    Array<{
      id: string;
      name: string;
      joinedCalls: number;
    }>
  >([]);

  useEffect(() => {
    const activityMap: Record<string, { name: string; joinedCalls: number }> = {};

    callsData.forEach((call) => {
      // Handle the creator
      if (call.created_by_user_id && call.created_by_user_name) {
        if (!activityMap[call.created_by_user_id]) {
          activityMap[call.created_by_user_id] = {
            name: call.created_by_user_name,
            joinedCalls: 0,
          };
        }
        activityMap[call.created_by_user_id].joinedCalls += 1;
      }

      // Handle members
      call.members?.forEach((member) => {
        if (!activityMap[member.id]) {
          activityMap[member.id] = { name: member.name, joinedCalls: 0 };
        }
        activityMap[member.id].joinedCalls += 1;
      });
    });

    // Convert the map to an array
    setUserActivity(
      Object.entries(activityMap).map(([id, { name, joinedCalls }]) => ({
        id,
        name,
        joinedCalls,
      }))
    );
  }, [callsData]);

  return userActivity;
};
