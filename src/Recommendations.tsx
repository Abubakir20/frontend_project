import RecommendBookItem from "./RecommendBookItem.tsx";

function Recommendations() {
  return <div className="flex flex-col w-81.5 pt-3 pb-4 rounded-lg border border-[#F7F9FA]/8 bg-[#1A1D1F]">
    <div className="flex flex-row justify-between items-end pl-4 pr-3.5">
      <h2 className="text-[20px] font-medium text-[#F7F9FA]">Tavfsiya</h2>
      <button className="flex flex-row items-center gap-1 text-[16px] text-[#6D7274]">
        Barchasi
        <img className="w-6 h-6" src="/arrow-right.svg" alt="icon"/>
      </button>
    </div>
    <div className="flex flex-col gap-3 mt-5 pl-4">
      <RecommendBookItem image="/book4.png" title="Bobbi Fisher shaxmatni o‘ynashni o‘rgataning" author="J.Silman"/>
      <div className="h-px bg-[#F7F9FA]/8"></div>
      <RecommendBookItem image="/book1.png" title="Mening tizimim" author="J.Silman"/>
      <div className="h-px bg-[#F7F9FA]/8"></div>
      <RecommendBookItem image="/book5.png" title="Zurixdagi shaxmat musobaqasi" author="J.Silman"/>
      <div className="h-px bg-[#F7F9FA]/8"></div>
      <RecommendBookItem image="/book3.png" title="Mening esdaqolarlik o‘yinlarim" author="J.Silman"/>
    </div>
  </div>;
}

export default Recommendations;
