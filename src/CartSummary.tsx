import SummaryRow from "./SummaryRow.tsx";

export default function CartSummary() {
  return (
    <div className="flex flex-col w-81.5 pt-5 pb-3.5 rounded-xl border border-[#1F272A] bg-[#0C1417]">
      <div className="flex flex-col gap-2 px-4">
        <SummaryRow label="To‘lov narxi:" value="1 560 000.00 UZS"/>
        <SummaryRow label="Chegirma:" value="1 560 00.00 UZS (10%)"/>
        <SummaryRow label="Kupon:" value="0 UZS"/>
        <SummaryRow label="Yetkazib berish" value="0 UZS"/>
      </div>
      <div className="flex flex-row justify-between px-4 py-3.5 border-y border-[#F7F9FA]/8">
        <p className="text-[20px] text-[#F7F9FA]">Jami:</p>
        <p className="text-[20px] font-bold text-[#F7F9FA]">1 404 000.00 UZS</p>
      </div>
      <div className="flex flex-col mt-3 px-3.5">
        <p className="pl-0.5 text-[14px] font-semibold text-[#9DA1A3]">Kupon</p>
        <input className="h-11 mt-1 px-3.5 rounded-lg border border-[#F7F9FA]/16 bg-[#13181C] text-[14px] text-[#F7F9FA] placeholder:text-[#6D7274] outline-none" type="text" placeholder="Kupondagi kodni kiriting"/>
        <button className="flex flex-row justify-center items-center gap-3 h-12.5 mt-4 rounded-lg bg-[#1C92E0] text-[20px] text-white">
          <img className="w-5.5 h-5.5" src="/cash-white.svg" alt="icon"/>
          Rasmiylashtirish
        </button>
      </div>
    </div>
  );
}
