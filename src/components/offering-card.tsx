import { Offering } from "@/lib/types";
import Image from "next/image";
import P from "./p";

export default function OfferingCard({ item }: { item: Offering }) {
  return (
    <div className="relative text-white  rounded-md min-h-[426px] overflow-hidden flex flex-col justify-end">
      <Image className="object-cover" fill src={item.image} alt={""} />
      <div className="z-10  bg-black/75 p-5">
        <h4 className="text-xl font-noto-sans font-bold">{item.title}</h4>
        <P>{item.description}</P>
      </div>
    </div>
  );
}
