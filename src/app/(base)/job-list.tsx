"use client";

import { JobCard } from "@/components/jobs/job-card";
import { api } from "@/trpc/react";

export const JobList = () => {
  const [jobs] = api.job.list.useSuspenseQuery();
  return (
    <div className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};
