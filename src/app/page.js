'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="w-screen h-screen flex justify-center items-center select-none gap-4">
      <Button variant="secondary" onClick={() => router.push('/deadpool')} className="font-semibold">
        DeadPool Webpage
      </Button>
      <Button variant="secondary" onClick={() => router.push('/places')} className="font-semibold">
        Tourist Places Carousel
      </Button>
    </div>
  );
}