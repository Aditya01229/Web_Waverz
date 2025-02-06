import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  Icon: LucideIcon
  reqColor: string
}

export default function SectionHeading({title, Icon, reqColor}: SectionHeadingProps) {
  return (
    <div className="flex">
      <div className={`border-[2px] border-${reqColor} rounded-3xl p-3 flex items-center`}>
      <Icon className="h-4 w-4" color={reqColor}/>
      </div>
      <p className={`text-${reqColor} border-[2px] border-${reqColor} rounded-3xl p-2 px-6 tracking-[0.2em] text-[1rem]`}>
        {title}
      </p>
    </div>
  );
}