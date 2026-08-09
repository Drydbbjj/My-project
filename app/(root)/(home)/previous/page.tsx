"use client";

import { useUser } from "@clerk/nextjs";
import CallList from "@/components/CallList";
import { useRouter } from "next/navigation";

const PreviousPage = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <h1 className="text-3xl font-bold">Previous Calls</h1>

      <CallList
        type="ended"
        renderItem={(meeting) => (
          <div key={meeting.id} className="mb-6">
            {/* Existing HomeCard inside CallList */}
            {meeting.card}

            {/* ⭐ Show REPORT BUTTON only for creator */}
            {meeting.createdBy === user?.id && (
              <button
                onClick={() => router.push(`/report/${meeting.id}`)}
                className="mt-3 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
              >
                View Report
              </button>
            )}
          </div>
        )}
      />
    </section>
  );
};

export default PreviousPage;
