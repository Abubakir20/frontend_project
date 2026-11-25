function RecommendBookItem({image, title, author}) {
  return <div className="flex flex-row gap-2.5">
    <img className="w-13.5 h-20 rounded-md object-cover" src={image} alt="image"/>
    <div className="flex flex-col">
      <h3 className="w-52 h-10.5 text-[14px] font-bold text-[#F7F9FA] line-clamp-2">{title}</h3>
      <p className="text-[13px] text-[#F0F0F0]/72">{author}</p>
    </div>
  </div>;
}

export default RecommendBookItem;
