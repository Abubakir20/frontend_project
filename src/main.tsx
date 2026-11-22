import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './Header';
import CourseHeader from './CourseHeader';

const root = createRoot(document.getElementById('root')!);
root.render(
  <div className="p-6.5">
    <CourseHeader/>
  </div>,
);
