export default function Navbar() {
    return(
        <>
        <header className="w-full p-4 flex items-center justify-between mb-5">
            <div className="flex items-center pl-4 font-bold mr-5">Notes App</div>
            <div className="flex-1"></div>
            <div className="flex items-center justify-between">
                <input type="text" placeholder="cari notes" 
                    className="w-40 sm:w-56 md:w-64 lg:w-80 text-md rounded-md p-1 pl-2
                    bg-white/20 backdrop-blur-xl shadow-md border-white/80 focus:outline-none" 
                />
                <button className="bg-sky-600 text-white ml-1 text-xs p-2 rounded-md hover:bg-sky-700 cursor-pointer">cari</button>
            </div>
        </header>
        </>
    )
}