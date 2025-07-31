import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiPlusBold } from "react-icons/pi";
import { motion } from 'framer-motion';



export default function CardNotes() {
    const [dataNotes, setDataNotes] = useState([])
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const addNewnotes = () => {
        if(title.trim() === "" || text.trim() === "") return 
        const newId = dataNotes.length > 0 ? dataNotes[dataNotes.length - 1].id : 1;
        const newNote = {
            id: newId,
            title,
            text,
        }
        setDataNotes([...dataNotes, newNote]);
        setTitle('');
        setText('');
        
    }


    return (
        <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-6 gap-4 p-4 ">
            {dataNotes.map((notes) => (
                <div
                key={notes.id}
                className="relative h-40 flex flex-col bg-white/20 justify-between backdrop-blur-xl shadow-md border-white/80 focus:outline-none rounded-md text-sm p-3 hover:scale-105 transition-transform duration-300" 
                >
                <div className="mb-4 overflow-hidden">
                <h1 className="font-semibold">{notes.title}</h1>
                <p className="text-xs break-words text-ellipsis">{notes.text}</p>
                </div>
                <div className="absolute bottom-3 left-3 right-2 flex items-center justify-between">
                    <div className="flex items-center text-xs">12/02/2025</div>
                    {/* <div className="flex-1"></div> */}
                    <div className="flex justify-between gap-2 text-sm">
                        <button className="text-black mx-1 hover:text-white text-sm cursor-pointer"><BsPencilSquare /></button>
                        <button className="text-red-500 hover:text-red-700 cursor-pointer text-sm"><FaRegTrashCan /></button>
                    </div>
                </div>
                </div>
            ))}
            <div className="relative h-40 bg-white/30 justify-between backdrop-blur-xl shadow-md border-white/80 focus:outline-none rounded-md text-sm p-3 hover:scale-105 transition-transform duration-300" >
                <div className="flex flex-col items-stretch w-full">
                <input type="text" placeholder="Judul" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}    
                className=" border border-none focus:outline-none mb-3 font-semibold"/>
                <textarea type="text" placeholder="text..." 
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border border-none focus:outline-none" />
                <button className="flex items-center justify-center absolute bottom-3 left-1/2 -translate-x-1/2 bg-sky-600 rounded-md p-2 cursor-pointer hover:bg-sky-700 mx-auto"
                onClick={addNewnotes}
                ><PiPlusBold /></button>
                </div>
            </div>
        </div>
        </>
    )
}