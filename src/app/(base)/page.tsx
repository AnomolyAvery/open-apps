import { Container } from "@/components/container";
import { JobList } from "./job-list";

export default function Home() {
  return (
    <main className="py-8">
      <Container>
        <JobList />
      </Container>
    </main>
  );
}
