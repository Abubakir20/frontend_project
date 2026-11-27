import axios, { create } from "axios";
import { useEffect, useState, type Dispatch, type SetStateAction  createContext} from "react";
import CourseItem from './CourseItem'

export const AuthContext = createContext<{
    token: string | null,
    setToken: Dispatch<SetStateAction<string | null>> }>({
        token: null,
        setToken: _ => null
    });

export const axiosClient = axios.create({baseURL: 'http://10.10.1.232:8888'});

export interface PagedResult<T> {
    totalCount: number;
    totalPages: number;
    previousPage: number | null;
    currentPage: number;
    nextPage: number | null;
    data: T[];
}

export interface ICourseItem {
    id: number;
    title: string;
    image: string;
    price: number;
    newPrice: number | null;
    rating: number | null;
    sectionCount: number;
    author: { id: number, fullName: string };
    difficulty: { id: number, title: string, icon: string };
    language: { id: number, title: string; code: string };
    category: { id: number, title: string };
}

export default function App() {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(2);
    const [search, setSearch] = useState('');

    const [data, setData] = useState<PagedResult<ICourseItem>>({
        totalCount: 0,
        totalPages: 0,
        previousPage: null,
        currentPage: 1,
        nextPage: null,
        data: [],
    });

    async function getAllCourses() {
        const params = new URLSearchParams({page: String(page), size: String(size), search: search})
        if (search) {
            params.set('search', search);
        }
        console.log(params.toString());
        const response = await axiosClient.get<PagedResult<ICourseItem>>('/public/courses?' + params.toString());
        setData(response.data);
        console.log(response.data.data);
    }
    useEffect(() => {
        getAllCourses();
    }, [page, size, search]);

    return<>
        <div className="flex flex-row gap-4">
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>
            <input type="number" min={1} max={data.totalPages} value={page} onChange={(event) => {
                const newValue = Number(event.target.value);
                if (newValue <=data.totalPages)
                    setPage(newValue);
            }}/>
            <input type="number" min={1} max={50} value={size} onChange={(event) => setSize(Number(event.target.value))}/>
        </div>
        {data.data.map(x => <CourseItem key={x.id} course={x}/>)}
    </>
}