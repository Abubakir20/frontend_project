function BookInfoItem({icon, label, value}) {
  return <div className="flex flex-col justify-center flex-1 h-15.25 px-2.75 border-l border-[#F7F9FA]/8 first:border-l-0">
    <div className="flex flex-row items-center gap-1">
      <img className="w-4 h-4" src={icon} alt="icon"/>
      <p className="text-[14px] text-[#9DA1A3]">{label}</p>
    </div>
    <p className="text-[14px] font-medium text-[#F7F9FA]">{value}</p>
  </div>;
}

export default BookInfoItem;
