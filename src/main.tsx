import { createRoot } from 'react-dom/client';
import './style.css';
import Page from './Page';
import CartComponent from './CartComponent';
import BookPage from './BookPage';

const root = createRoot(document.getElementById('root')!);
root.render(<BookPage/>);
