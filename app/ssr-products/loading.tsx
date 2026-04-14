import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-video w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center pt-10">
      <SkeletonCard />
    </div>
  );
}