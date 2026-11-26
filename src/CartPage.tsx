import Header from "./Header.tsx";
import Breadcrumb from "./Breadcrumb.tsx";
import CartComponent from "./CartComponent.tsx";
import CartSummary from "./CartSummary.tsx";
import Footer from "./Footer.tsx";

export default function CartPage() {
  return (
    <div className="flex flex-col min-w-360">
      <Header/>
      <div className="flex flex-col mx-8 mb-30">
        <Breadcrumb items={["Asosiy", "Savatcha"]}/>
        <div className="flex flex-row items-start gap-6 mt-11">
          <div className="flex flex-col gap-5.5">
            <CartComponent image="/image 206.png" title="Bobbi Fisher shaxmatni o‘ynashni o‘rgataning va barchani" price="155 000.00 uzs" oldPrice="205 000.00 uzs" count={5}/>
            <CartComponent image="/medal.png" title="Shaxmatchilar klubi nishoni" price="2 000 000.00 uzs" oldPrice="2 500 000.00 uzs" count={1}/>
            <CartComponent image="/king-badge.png" title="“Shox”lar uchun shox donasi ko‘rinishidagi nishon" price="525 250.00 uzs" oldPrice="600 000.00 uzs" count={20}/>
          </div>
          <CartSummary/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
