// import Image from "next/image";
// loading using Next Syntaxe
import React, { Suspense } from 'react';
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"




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
    <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
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
export default async function Album() {
  return <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black pt-10">

    <AlbumList />
  </div>
}