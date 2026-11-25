export default function CartComponent() {
  return (
    <div className="flex flex-row w-5xl h-46 rounded-xl border border-[#1F272A] bg-[#1A1D1F] mt-42.5 ml-8.5">
      <div className="relative flex items-center justify-center w-36 h-36 rounded-lg border border-[#FFFFFF14]/8 bg-[#13181C] m-5 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-150 opacity-45"
          src="image 206.png"
          alt="background blur"
        />
        <img
          className="relative z-10 w-17 h-25 object-cover rounded-sm shadow-md"
          src="image 206.png"
          alt="image"
        />
      </div>
      <div className="flex flex-col mt-6 gap-3.5">
        <div className="flex-col w-150.5 h-12 gap-1">
          <h2 className="font-bold text-5 line-height-1.2">Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va</h2>
          <h2 className="font-bold text-5 line-height-1.2">barchani</h2>
        </div>
        <div className="gap-3">
            <p className="font-bold text-2xl text-[#82CC27]" >155 000.00 uzs</p>
            <p className="font-normal text-[16px] text-[#F7F9FA]/64 line-through decoration-[#DC2D2D]/80" >205 000.00 uzs</p>
        </div>
      </div>
    </div>
  );
}