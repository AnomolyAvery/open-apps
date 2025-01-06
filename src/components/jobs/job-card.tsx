import { Badge } from "../ui/badge";
import { Button, buttonVariants } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { type RouterOutputs } from "@/trpc/react";
import Link from "next/link";

type Job = RouterOutputs["job"]["list"][number];

interface JobCardProps {
  job: Job;
}
export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{job.name}</CardTitle>
        <Badge variant={job.open ? "default" : "destructive"}>
          {job.open ? "Open" : "Closed"}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription>{job.description}</CardDescription>
      </CardContent>
      <CardFooter className="justify-between">
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="inline-flex items-center">
                <Users className="mr-2 size-4" />
                <span className="text-xs">200</span>
              </p>
            </TooltipTrigger>
            <TooltipContent>Applied candidates</TooltipContent>
          </Tooltip>
          <p></p>
        </div>
        {job.open ? (
          <Link href={`/apply/${job.id}`} className={buttonVariants()}>
            Apply
          </Link>
        ) : (
          <Button disabled>Apply</Button>
        )}
      </CardFooter>
    </Card>
  );
};
