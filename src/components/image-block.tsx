import Image from "next/image";

type ImageBlockProps = {
  src: string;
};

export default function ImageBlock({ src }: ImageBlockProps) {
  return (
    <div className="relative h-full w-full aspect-square ">
      <Image className="object-cover" fill src={src} alt={""} />
    </div>
  );
}
