import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselImage } from "@/lib/types";
import Image from "next/image";

const carouselImages: CarouselImage[] = [
  { id: 1, imagePath: "/carousel-1.jpg" },
  { id: 2, imagePath: "/carousel-2.jpg" },
  { id: 3, imagePath: "/carousel-3.jpg" },
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {carouselImages.map((item) => (
          <CarouselItem key={item.id}>
            <div className="">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center">
                  <Image
                    className="object-cover"
                    fill
                    src={item.imagePath}
                    alt={""}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
