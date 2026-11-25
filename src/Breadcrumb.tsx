function Breadcrumb({items}) {
  return <div className="flex flex-row items-center gap-2 h-5 mt-2.75 pl-8">
    <img className="w-5 h-5" src="/home.png" alt="icon"/>
    {items.map((item, index) => <div key={index} className="flex flex-row items-center gap-2.5">
      {index > 0 && <img className="w-2 h-2" src="/breadcrumb-separator.png" alt="icon"/>}
      <p className={`text-[13px] ${index === items.length - 1 ? 'text-white tracking-[-0.25px]' : 'text-[#6D7274]'}`}>{item}</p>
    </div>)}
  </div>;
}

export default Breadcrumb;
