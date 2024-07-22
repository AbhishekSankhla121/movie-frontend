import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { deleteMovie, getMovie } from "../redux/action/movie";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Star from "./Star";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Selectgenre = [
    "Horror",
    "Action",
    "Animation",
    "Drama",
    "Comedy",
    "Sci-Fi",
    "Fantasy",
    "Adventure"
]


const selectYear = [
    2020,
    2021,
    2022,
    2023,
    2024
]


export default function Homeee() {
    const { data, totalPage, pageLength, message, error, } = useSelector((state) => state.details);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const pages = Array.from({ length: totalPage }, (_, index) => {
        return index + 1;
    });
    useEffect(() => {

        dispatch(getMovie({ page, limit, title, year, genre }));


        if (error) {
            console.log("error", error);
            toast.error(error);
            dispatch({ type: "clearError" });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, page, limit, title, year, genre, error, message]);
    console.log(data)

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteMovie({ id }))

    }
    const handleUpdate = (id) => {
        console.log(id);
        navigate(`/update/${id}`)
    }
    return (
        <>
            <div className="bg-slate-200 flex flex-col p-2 rounded-2xl w-[60%] h-[500px] my-5 mx-auto " id="show-data">
                <h1 className="text-center bg-gradient-to-r from-[#00D1DE] to-[#7e0e79] bg-clip-text text-transparent font-bold text-[30px] uppercase">filters for movies Search</h1>
                <div className="flex justify-around my-5">
                    <div>
                        <input type="text" placeholder="search movie title" className="py-[2px] px-[20px] rounded-md " onChange={(e) => { setPage(1); setTitle(e.target.value) }} />
                    </div>
                    <div>
                        <select name="genre" id="" onChange={(e) => { setPage(1); setGenre(e.target.value) }}>
                            <option value="">select Genre</option>
                            {
                                Selectgenre.map((e, i) => (

                                    <option key={i} value={e}>{e}</option>

                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <select name="genre" id="" onChange={(e) => { setPage(1); setYear(e.target.value) }}>
                            <option value={""}>select year</option>
                            {
                                selectYear.map((e, i) => (

                                    <option key={i} value={e}>{e}</option>

                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <select name="genre" id="" onChange={(e) => { setLimit(e.target.value) }}>
                            <option value={10}>Limit</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>

                        </select>
                    </div>
                    <div className="p-[1px] hidden text-center md:flex obsidian-Tier rounded-[4.35px]  w-[200px] bg-gradient-to-r from-[#08B1DB] to-[#874BD2] font-semibold text-[20.42px] leading-[18.1px] text-[#FFFFFF]">
                        <div
                            className=" h-[100%] rounded-[4.35px] opacity-[0.7] z-1 w-[100%] all-center  bg-gradient-to-r from-[#18313D] to-[#25273B]"
                            id="name"
                        >
                            <span className="z-10'">Total results:{pageLength}</span>
                        </div>
                    </div>
                </div>
                <div className="h-[400px] overflow-y-auto scroll rounded-2xl ">

                    {data && data.length > 0 ? (<>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="table-style-th">Name</th>
                                    <th className="table-style-th">Genre</th>
                                    <th className="table-style-th">Rating</th>
                                    <th className="table-style-th">Year</th>
                                    <th className="table-style-th">Edit / Delete</th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto h-[100px]">
                                {data && data.length > 0 && data.map((e, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{(page - 1) * limit + (i + 1)} {e.title}</td>
                                        <td className="table-style-td">{e.genre}</td>
                                        <td className="table-style-td flex">{
                                            <Star rating={e.rating} />
                                        }</td>
                                        <td className="table-style-td">{e.year}</td>
                                        <td className="table-style-td flex justify-evenly">
                                            <div className="text-[30px] cursor-pointer" title="Edit Now" onClick={() => { handleUpdate(e._id) }}>

                                                <FaEdit />
                                            </div>

                                            <div className="text-[30px] text-red-300 cursor-pointer" title="Delete Now" onClick={() => { handleDelete(e._id) }}>

                                                <MdDelete />
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table></>) : (<>
                            <h5> No data available</h5>
                        </>)}

                </div>





            </div >


            <div className={"w-full flex justify-center"} id={"pagination flex "}>
                <button
                    className={`${page <= 1
                        ? "text-[#ACACAC] border-[#ACACAC] cursor-not-allowed"
                        : "text-[#2B2B2B] border-[#2B2B2B]"
                        } w-[126.92px] h-[43px] text-[14px] font-bold mx-3  border-[1px]`}
                    disabled={page <= 1}
                    onClick={(e) => {
                        setPage(page - 1);
                    }}
                >
                    ← Previous
                </button>

                {pages.map((item, index) => (
                    <React.Fragment key={index}>

                        <button
                            className={`${page === item ? "bg-black text-white" : ""
                                } w-[43px] h-[43px] text-[14px] font-bold border-[1px] mx-3`}
                            children={item}
                            onClick={(e) => {
                                setPage(item);
                            }}
                        />
                    </React.Fragment>
                ))}
                <button
                    className={`${page >= totalPage
                        ? "text-[#ACACAC] border-[#ACACAC] cursor-not-allowed"
                        : "text-[#2B2B2B] border-[#2B2B2B]"
                        } w-[126.92px] h-[43px] text-[14px] font-bold border-[1px] mx-3`}
                    disabled={page >= totalPage}
                    onClick={(e) => {
                        setPage(page + 1);
                    }}
                >
                    Next →
                </button>
            </div>
        </>
    );
}




