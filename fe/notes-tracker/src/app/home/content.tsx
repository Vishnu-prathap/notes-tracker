// "use client"
import NavbarComponent from "../components/navbar/Navbar";
import NoteCard from "../components/notes/noteCard";
// import Navbar from "../components/Navbar";

export default function Content(){
    return<div className="flex flex-col gap-y-4"><NavbarComponent/>
    <NoteCard/></div>
    
}