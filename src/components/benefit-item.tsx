import { CheckIcon } from "lucide-react";

export default function BenefitItem({ benefit }: { benefit: string }) {
  return (
    <li className="flex gap-2 py-2">
      <CheckIcon className="w-4" />
      {benefit}
    </li>
  );
}
