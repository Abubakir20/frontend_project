export default function ProfileSections({icon, text}) {
    return <div className=" flex flex-row w-71.5 h-15 bg-[#13181C] rounded-xl border border-[#1F272A] px-4.5 items-center gap-2 hover:border-[#1C92E0] hover:drop-shadow-[#1C92E0]/32 hover:drop-shadow-[0px_4px_32px] group">
            <img className="w-6 h-6 group-hover:fill-[#1C92E0]" src={icon} alt="icon"/>
            <h2 className="group-hover:text-white font-medium text-[16px] text-[#9DA0A1]">{text}</h2>
        </div>
}

