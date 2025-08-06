// import { useEffect } from "react";
import { useState, useMemo } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiPlusBold } from "react-icons/pi";
import { FaSave } from "react-icons/fa";

export default function CardNotes({search}) {
    const [dataNotes, setDataNotes] = useState([])
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState("")
    const [editText , setEditText] = useState("")

    const filteredNotes =  useMemo(() => {
        return search.trim() ? dataNotes.filter((note) => 
            note.title.toLowerCase().includes(search.toLowerCase()) ||
            note.text.toLowerCase().includes(search.toLowerCase())) 
            : dataNotes;
    }, [dataNotes, search])


    const addNewnotes = () => {
        if(title.trim() === "" || text.trim() === "") return 
        const newId = dataNotes.length > 0 ? Math.max(...dataNotes.map(note => note.id)) + 1 : 1;
        const newNote = {
            id: newId,
            title,
            text,
            date: new Date(),
        }
        setDataNotes([...dataNotes, newNote]);
        setTitle('');
        setText('');     
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = String(date.getFullYear()).slice(-2); 
        return `${day}/${month}/${year}`;
    };

    const deleteNote = (id) => {
        const notesBaru = dataNotes.filter((note) => note.id !== id);
        setDataNotes(notesBaru);
    }

    const startEdit = (id) => {
        const itemToEdit = dataNotes.find((item) => item.id === id);
        if(itemToEdit) {
            setEdit(true);
            setEditId(id);
            setEditTitle(itemToEdit.title);
            setEditText(itemToEdit.text);
        }
    }

    const saveEdit = () => {
            const notesEdit = dataNotes.map((note) => 
            note.id === editId ? { 
                ...note, 
                title:editTitle, 
                text:editText,
                date: new Date(),
            } : note)
            setDataNotes(notesEdit)
            setEdit(false);
            setEditId(null);
            setEditTitle("");
            setEditText("");
    }
    
    return (
        <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-6 gap-4 p-4 ">
            {filteredNotes.map((notes) => (
                <div
                key={notes.id}
                className="relative h-40 flex flex-col  bg-white/20 justify-between backdrop-blur-xl shadow-md border-white/80 focus:outline-none rounded-md text-sm p-3 hover:scale-105 transition-transform duration-300" 
                >
                <div className="mb-4 overflow-hidden">
                    {editId === notes.id ? (
                        <>
                            <input type="text" 
                            className="focus:outline-none"
                            value={editTitle}
                            onChange={(e) =>  setEditTitle(e.target.value)}
                            />
                            <textarea
                                className="focus:outline-none scroll-transparent overflow-y-auto"
                                rows={3}
                                style={{
                                    scrollbarWidth: 'none',
                                    resize: 'none'
                                }}
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            ></textarea>
                        </>
                    ) : (
                        <>
                        <h1 className="font-semibold truncate">{notes.title}</h1>
                        <p className="text-xs break-words line-clamp-3">{notes.text}</p>
                        </>
                    )}
                </div>
                <div className="absolute bottom-3 left-3 right-2 flex items-center justify-between">
                    <div className="flex items-center text-xs">{formatDate(notes.date)}</div>
                    <div className="flex justify-between gap-2 text-sm">
                        <button 
                        onClick={() => startEdit(notes.id) }
                        className="text-black mx-1 hover:text-white text-sm cursor-pointer"><BsPencilSquare /></button>
                        <button 
                        disabled={!edit}
                        onClick={saveEdit}
                        className={`${editId === notes.id ? 'text-green-600 hover:text-green-700 text-sm cursor-pointer' : 'text-slate-500 cursor-not-allowed'} `}
                        ><FaSave /></button>
                        <button 
                        onClick={() => deleteNote(notes.id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer text-sm"><FaRegTrashCan /></button>
                        
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