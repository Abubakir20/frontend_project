import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './Header';

const root = createRoot(document.getElementById('root')!);
root.render(
  <div className="p-6.5">
    <Header/>
  </div>,
);
