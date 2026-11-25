import BookInfoItem from "./BookInfoItem.tsx";

function BookInfo() {
  return <div className="flex flex-col w-256.5 pt-7.75 px-7.75 pb-2.25 rounded-lg border border-[#F7F9FA]/8 bg-[#1A1D1F]">
    <div className="flex flex-row gap-5">
      <div className="relative w-48.75 h-68 rounded-sm overflow-hidden">
        <img className="absolute top-0 left-0 w-full h-full object-cover blur-xl" src="/book2.png" alt="image"/>
        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28.75 h-43.5" src="/book2.png" alt="image"/>
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="max-w-150 text-[28px] leading-9 font-bold text-[#F7F9FA]">Shaxmatdagi qobiliyatliringizga qayta baxo bering</h1>
        <div className="flex flex-row items-center gap-3 mt-3.75">
          <img className="w-7 h-7" src="/cash-outline 1.svg" alt="icon"/>
          <p className="text-[#F7F9FA] text-[20px] font-bold">55 000.00 UZS</p>
          <p className="text-[#F7F9FA]/64 text-[14px] line-through decoration-[#DC2D2D]/80">160 000.00 uzs</p>
        </div>
        <div className="flex flex-row mt-6 border border-[#F7F9FA]/8">
          <BookInfoItem icon="/level-gray.png" label="Daraja" value="Boshlangich"/>
          <BookInfoItem icon="/author.png" label="Muallif" value="Jeremy Silman"/>
          <BookInfoItem icon="/pages.png" label="Sahifa soni" value="231"/>
          <BookInfoItem icon="/calendar.png" label="Chop etilgan sana" value="2002"/>
        </div>
        <div className="flex flex-row gap-4 mt-4.75">
          <button className="flex flex-row items-center gap-3 h-12.5 px-10 rounded-lg bg-[#1C92E0] text-[20px] text-white">
            <img className="w-6 h-6" src="/Component 1.svg" alt="icon"/>
            Savatchaga
          </button>

          <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
            <img src="/heart-outline.svg" alt="icon"/>
          </button>

          <button className="flex items-center justify-center w-12.5 h-12.5 rounded-lg border border-[#F7F9FA]/30 bg-[#F7F9FA]/10">
            <img src="/share.svg" alt="icon"/>
          </button>
        </div>
      </div>
    </div>
    <h2 className="mt-5 text-[24px] font-bold text-white">Kitob haqida</h2>
    <p className="mt-2.5 text-[16px] leading-5.5 text-[#C2C4C5]">Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400 dan 2100 gacha bo'lgan reyting oralig'idagi o'yinchilar va shaxmat bo'yicha tayyor o'quv dasturini qidirayotgan o'qituvchilar uchun mo'ljallangan muallif o'quvchini nomutanosiblik asoslari orqali olib boradigan, barcha nomutanosibliklarning har bir tafsiloti o'zlashtirilishini ta'minlaydigan aqlni kengaytiruvchi sayohatni baham ko'radi. va shaxmat o'yinchisini/ sevuvchisini har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta darajasidagi pozitsion poydevor.</p>
  </div>;
}

export default BookInfo;
