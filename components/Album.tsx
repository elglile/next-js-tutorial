// import Image from "next/image";

import React, { Suspense } from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  )
}



interface Album {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const AlbumList = async () => {
    const photos: Album[] = await fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json());

return (
  <div>
    {photos.slice(0, 4).map((photo) => (
      <div key={photo.id} className="p-4 border rounded">
        <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
            />
        <p>{photo.title}</p>
      </div>
    ))}
  </div>
);
}
export default async function Album(){
  return   <div className="grid grid-cols-2 gap-4">
    <Suspense>
      <AlbumList/>
    </Suspense>
  </div>
}