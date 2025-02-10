interface TimelineCardProps {
  title: string;
  description: string;
}

export default function TimelineCard({ title, description }: TimelineCardProps) {
  return (
    <>
      <div className="bg-black p-6 rounded-xl shadow-md w-full md:w-1/2 text-start">
        <h2 className="text-2xl font-bold text-white mb-4 smooch-sans-tag tracking-wider">
          {title}
        </h2>
        <p className="text-md text-[#bebebe] text-wide">
          &quot;{description}&quot;
        </p>
      </div>
    </>
  );
}
