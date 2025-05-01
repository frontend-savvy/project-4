import { cn } from "@/lib/utils";

export default function Wrapper({children,className}:{children:React.ReactNode,className?:string;}) {
  return (
    <div className={cn("wrapper",className)}>{children}</div>
  )
}
