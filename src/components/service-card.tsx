import { Feature } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ServiceCard({
  service,
  index,
}: {
  service: Feature;
  index: number;
}) {
  return (
    <div className="text-white border p-8">
      <div
        className={cn("bg-primary w-fit p-5 rounded-full", {
          "bg-secondary": index % 2 === 0,
        })}
      >
        <Image height={50} width={50} src={service.icon} alt="" />
      </div>
      <h3 className="text-2xl font-noto-sans font-bold mt-8">
        {service.title}
      </h3>
      <p className="text-lg mt-5">{service.description}</p>
    </div>
  );
}
