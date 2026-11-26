import { useState } from 'react';

export default function CartComponent({image, title, price, oldPrice, count}) {
  const [quantity, setQuantity] = useState(count);

  return (
    <div className="relative flex flex-row gap-3 w-256.5 h-45.5 p-4.5 rounded-xl border border-[#1F272A] bg-[#1A1D1F]">
      <div className="relative flex items-center justify-center shrink-0 w-36 h-36 rounded-lg border border-[#FFFFFF14]/8 bg-[#13181C] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-150 opacity-45"
          src={image}
          alt="background blur"
        />
        <img
          className="relative z-10 w-17 h-25 object-cover rounded-sm shadow-md"
          src={image}
          alt="image"
        />
      </div>
      <div className="flex flex-col flex-1 mt-0.5">
        <h2 className="w-150.5 h-12 font-bold text-[20px] leading-6 text-[#F7F9FA]">{title}</h2>
        <div className="mt-4.5">
            <p className="font-bold text-2xl leading-7 text-[#82CC27]" >{price}</p>
            <p className="font-normal text-[16px] text-[#F7F9FA]/64 line-through decoration-[#DC2D2D]/80" >{oldPrice}</p>
        </div>
      </div>
      <div className="flex flex-row self-end gap-1.5 mb-4 mr-1">
        <button className={`flex items-center justify-center w-10 h-10 rounded-lg ${quantity > 1 ? 'bg-[#DC2D2D]' : 'bg-[#F7F9FA]/16'}`} disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>
          <img className="w-5 h-5" src="/minus.svg" alt="icon"/>
        </button>
        <div className="flex items-center justify-center w-22 h-10 rounded-lg border border-[#F7F9FA]/12 bg-[#F7F9FA]/4">
          <p className="text-[16px] font-medium text-[#F7F9FA]">{quantity}</p>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#82CC27]" onClick={() => setQuantity(quantity + 1)}>
          <img className="w-5 h-5" src="/plus.svg" alt="icon"/>
        </button>
      </div>
      <button className="absolute -top-3 -right-2.75 flex items-center justify-center w-8 h-8 rounded-full border border-[#F7F9FA]/8 bg-[#151E21]">
        <img className="w-5 h-5" src="/x_exit_cancel.svg" alt="icon"/>
      </button>
    </div>
  );
}
