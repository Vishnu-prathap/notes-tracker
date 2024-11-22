// "use client"
import NavbarComponent from "../components/navbar/Navbar";
import NoteCard from "../components/notes/noteCard";

export default function Content() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 flex flex-col">
            {/* Navbar */}
            <NavbarComponent />

            {/* Main Content */}
            <div className="px-6 py-8">
                <h1 className="text-3xl font-bold text-center mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                        Welcome to Your Notes
                    </span>
                </h1>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg shadow-blue-500/20 transform transition-transform hover:scale-105"
                        >
                            <NoteCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
