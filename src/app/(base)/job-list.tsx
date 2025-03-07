"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { api } from "@/trpc/react";
import { BriefcaseBusiness, Search } from "lucide-react";
import Link from "next/link";
import { JobCard } from "./job-card";

export function JobList() {
  const [jobs] = api.job.getAllOpen.useSuspenseQuery();

  if (jobs.length === 0) {
    return (
      <Card>
        <CardHeader className="p-10">
          <BriefcaseBusiness className="mx-auto size-8 text-muted-foreground" />
          <CardDescription className="text-center">
            No available jobs
          </CardDescription>
          <div className="mx-auto pt-6">
            <Link
              href={"/account/applications"}
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}
            >
              <Search className="size-4" />
              My Applications
            </Link>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          description={job.description ?? undefined}
          open={job.open}
          openPositions={job.openPositions}
          applicants={0}
        />
      ))}
    </div>
  );
}
