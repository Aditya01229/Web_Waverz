interface SkillSectionComponentProps {
    logo: string;
    title: string;
    description: string;
}

export default function SkillSectionComponent({ logo, title, description }: SkillSectionComponentProps) {
    return (
        <div className="bg-[#141414] flex-1 p-10 py-12 flex flex-col gap-6 rounded-3xl">
            <img src={logo} alt="Hello" className="h-28 w-28"/>
            <h2 className="text-3xl">{title}</h2>
            <p className="text-md text-[#bebebe]">{description}</p>
        </div>
    );

}