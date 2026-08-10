"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { useUserActivity } from "@/hooks/useUserActivity";
import Loader from "@/components/Loader";

const ReportPage = () => {
  const { callRecordings = [], isLoading } = useGetCalls(); // <- default empty array
  const { activities = [] } = useUserActivity(callRecordings); // <- default empty array

  if (isLoading) return <Loader />;

  if (activities.length === 0)
    return <p className="text-gray-400">No user activity found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Meeting Attendance Report</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">User</th>
            <th className="border p-2">Meetings Attended</th>
            <th className="border p-2">Number of Logins</th>
            <th className="border p-2">Login Times</th>
            <th className="border p-2">Logout Times</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((user) => (
            <tr key={user.userId}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.meetingsAttended}</td>
              <td className="border p-2">{user.logins?.length || 0}</td>
              <td className="border p-2">
                {user.logins?.map((l, idx) => (
                  <div key={idx}>{l.loginTime.toLocaleTimeString()}</div>
                ))}
              </td>
              <td className="border p-2">
                {user.logins?.map((l, idx) => (
                  <div key={idx}>{l.logoutTime?.toLocaleTimeString() || "-"}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
