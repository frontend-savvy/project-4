import { Statistic } from "@/lib/types";

export default function StatItem({ stat }: { stat: Statistic }) {
  return (
    <div className="flex flex-col gap-4 py-3">
      <h4 className="text-4xl lg:text-5xl font-noto-sans font-bold">
        {stat.value}
      </h4>
      <h6 className="text-xl  font-bold">{stat.label}</h6>
    </div>
  );
}
