import Image from "next/image";

export default function Logo({ variant }: { variant?: "light" | "default" }) {
  const logoSrc = variant === "light" ? "/logo-light.png" : "/logo.png";
  return (
    <div className="logo">
      <Image height={150} width={150} src={logoSrc} alt={""} />
    </div>
  );
}
