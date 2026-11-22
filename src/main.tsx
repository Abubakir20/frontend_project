import { createRoot } from 'react-dom/client';
import './style.css';
import CourseHeader from './CourseHeader';

const root = createRoot(document.getElementById('root')!);
root.render(
  <div className="p-7.75">
    <CourseHeader/>
  </div>,
);
