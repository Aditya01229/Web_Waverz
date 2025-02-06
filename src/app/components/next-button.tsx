"use client";  // Marking the component as a client-side component
import { ArrowRight } from "lucide-react";

interface NextButtonProps {
    onClick: () => void; // Function prop type
    buttonColor: string; // String prop type
}

export default function NextButton({ onClick, buttonColor }: NextButtonProps) {
  return (
    <button onClick={onClick} className={`border-[2px] border-${buttonColor} p-2 rounded-[2rem] text-${buttonColor}`}>
      <ArrowRight size={40} color={buttonColor}/>
    </button>
  );
}
