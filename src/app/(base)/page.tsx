import { JobCard } from "./job-card";

export default async function Home() {
  return (
    <main>
      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        {Array.from({
          length: 10,
        }).map((_, i) => (
          <JobCard
            key={`job-${i}`}
            title={`Job #${i}`}
            open={i % 1.5 === 0}
            applicants={0}
            openPositions={null}
            description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam omnis reprehenderit eaque! Maxime consectetur est, doloribus atque dolorum voluptas laboriosam accusantium repudiandae minus veniam consequatur delectus doloremque ullam nostrum.`}
          />
        ))}
      </div>
    </main>
  );
}
