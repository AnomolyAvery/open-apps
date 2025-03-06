import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Search, Users } from "lucide-react";

interface JobCardProps {
  title: string;
  open: boolean;
  description?: string;

  applicants: number;
  openPositions: number | null;
}

export function JobCard({
  title,
  open,
  description,
  applicants,
  openPositions,
}: JobCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{title}</CardTitle>
        <Badge variant={open ? "outline" : "destructive"}>
          {open ? "Open" : "Closed"}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {description ?? "No description provided."}
        </CardDescription>
      </CardContent>
      <CardFooter className="items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Tooltip>
            <TooltipTrigger>
              <span className="inline-flex items-center gap-1.5 text-sm">
                <Users className="size-4" />
                {applicants}
              </span>
            </TooltipTrigger>
            <TooltipContent>{applicants} candidates</TooltipContent>
          </Tooltip>
          {openPositions && (
            <Tooltip>
              <TooltipTrigger>
                <span className="inline-flex items-center gap-1.5 text-sm">
                  <Search className="size-4" />
                  {openPositions}
                </span>
              </TooltipTrigger>
              <TooltipContent>{openPositions} open positions</TooltipContent>
            </Tooltip>
          )}
        </div>
        <Button>Apply</Button>
      </CardFooter>
    </Card>
  );
}
