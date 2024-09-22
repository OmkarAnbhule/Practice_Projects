'use client'
import { Button } from "@/components/ui/button";
import { App } from "@/modules/Caraousel";
import DeadPool from "@/modules/Deadpool";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center select-none gap-4">
      <Button variant="secondary" onClick={() => redirect('/deadpool')} className="font-semibold">
        DeadPool Webpage
      </Button>
      <Button variant="secondary" onClick={() => redirect('/places')} className="font-semibold">
        Tourist Places Carousel
      </Button>
    </div>
  );
}