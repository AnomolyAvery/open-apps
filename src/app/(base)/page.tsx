import { api, HydrateClient } from "@/trpc/server";
import { JobList } from "./job-list";

export default function Home() {
  void api.job.getAllOpen.prefetch();

  return (
    <HydrateClient>
      <main>
        <JobList />
      </main>
    </HydrateClient>
  );
}
