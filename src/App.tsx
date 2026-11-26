// // import { useState } from 'react';
// // import LessonItems from './LessonItems.tsx';

// // export default function App() {
// //   const[isOpen, setIsOpen] = useState(false)

// //   return (
// //     <div className="p-7.75">
// //       <div className="w-256.5 bg-[#1A1D1F] rounded-lg border border-[#1F272A]">
// //         <div>
// //           <div className="flex flex-row justify-between items-center h-16 px-5" onClick={() => setIsOpen(!isOpen)}>
// //             <h1 className="text-[24px] text-[#F7F9FA] font-bold">
// //               1. Asosiy donalar
// //             </h1>
// //             <img
// //               className={`${isOpen ? '' : 'rotate-z-180'}`}
// //               src="/arrow-up.svg"
// //               alt="icon"
// //             />
// //           </div>

// //           {isOpen && (
// //             <div className="grid grid-cols-3 w-full bg-[F7F9FA]/3 p-5">
// //               <LessonItems />
// //               <LessonItems />
// //               <LessonItems />
// //               <LessonItems />
// //               <LessonItems />
// //               <LessonItems />
// //               <LessonItems />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import CourseItem from './CourseItem';

// export interface PagedResult<T> {
//   totalCount: number;
//   totalPages: number;
//   previousPage: number | null;
//   currentPage: number;
//   nextPage: number | null;
//   data: T[];
// }

// export interface CourseItem {
//   id: number;
//   title: string;
//   author: { id: number, fullName: string };
//   language: { id: number, title: string, code: string };
//   difficulty: { id: number, title: string, icon: string };
//   category: { id: number, title: string };
//   image: string;
//   price: number;
//   newPrice: number | null;
//   rating: number | null;
//   sectionsCount: number;
// }

// export default function App() {
//   const [size, setSize] = useState(2);
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState('');
//   const [data, setData] = useState<PagedResult<CourseItem>>({
//     totalCount: 0,
//     totalPages: 0,
//     previousPage: null,
//     currentPage: 1,
//     nextPage: null,
//     data: []
//   });

//   async function getAllCourses() {
//     const response = await axios.get('http://10.10.3.14:8888/public/courses?size=' + size + '&page=' + page);
//     setData(response.data.data);
//     console.log(data);
//   }

//   useEffect(() => {
//     getAllCourses();
//   }, [size, page]);

//   return <div className='relative p-7.75'>
//     <div>
//       <input type="number" value={size} onChange={(event) => setSize(Number(event.target.value))}/>
//       <input type="number" value={page} onChange={(event) => setPage(Number(event.target.value))}/>
//       <input type="number" value={search} onChange={(event) => setSearch(event.target.value)}/>
//     </div>
//     {data.data.map(x => <CourseItem course= ></>)}
//   </div>
// }