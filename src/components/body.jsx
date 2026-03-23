import { useState } from "react";
import dropdown from "../assets/dropdown.jpg";

export default function Body() {
    const [open, setOpen] = useState(false);

    return (
        <div className=" h-[77vh]">
            <div className="mt-[5vh] m-5">
                <p className="ml-[10vh] text-3xl">Name des Bewerbs</p>
            </div>
            <div className="bg-gray-300 flex justify-between items-center px-5 py-4 m-5">
                <p className="text-2xl ml-[5vw]">1. Landesrunde</p>
                <p className="text-2xl">Dornbirn</p>
                <p className="text-2xl">15.03.2023</p>
                <button onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
                    <img
                        src={dropdown}
                        alt="Dropdown"
                        className={`w-10 h-10 mr-[5vw] transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
            </div>
            <div className={`overflow-hidden transition-all duration-400 ease-out m-5 ml-[10vw] ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-gray-300 px-5 py-4 flex justify-between h-[7vh]">
                    <p className="text-xl">18:00</p>
                    <p className="text-xl">noch 18 Stände frei</p>
                    <div className="bg-red-400 pl-[2vw] pr-[2vw] font-bold">
                        <p className="text-lg p-1">Anmelden</p>
                    </div>
                </div>
            </div>
        </div>
    );
}