import { createRoot } from 'react-dom/client';
import TopBookItem from './topBookItem';
import Book1 from '/book1.png';
import Book2 from '/book2.png';
import Book3 from '/book3.png';

const root = createRoot(document.getElementById('root')!);
root.render(
  <div>
    <div
      className="flex flex-col"
      style={{
        gap: '18px',
        backgroundColor: '#1A1D1F',
        borderRadius: '8px',
        width: '326px',
        padding: '16px',
      }}
    >
      <div className="flex flex-row justify-between">
        <h1 style={{fontSize: "18px", color: "#FCFCFC", fontWeight: "500"}}>Top kitoblar</h1>
        <button className='flex flex-row items-center' style={{color: "#9DA1A3", backgroundColor: "transparent", border: "none"}}>
          Barchasi
          <img src="/forward.svg" alt='icon'/>
        </button>
      </div>
      
    </div>
    <TopBookItem
      author={'Abubakir Botirov'}
      title={'Behind The Wall'}
      image={Book1}
    />
    <TopBookItem
      author={'Ayubxon Mashrapov'}
      title={'Just do it'}
      image={Book2}
    />
    <TopBookItem
      author={'Saidburhon Joraev'}
      title={'The silent forest'}
      image={Book3}
    />
  </div>,
);
