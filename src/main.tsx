import { createRoot } from 'react-dom/client';
import './style.css';
import CartPage from './CartPage';

const root = createRoot(document.getElementById('root')!);
root.render(<CartPage/>);
