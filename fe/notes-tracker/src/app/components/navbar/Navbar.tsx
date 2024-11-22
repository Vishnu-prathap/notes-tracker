// "use client"

import ProfileCard from "./profileCard";
import SearchBar from "./searchBar";

export default function NavbarComponent() {
  return (
    <div className="flex flex-row items-center justify-between min-h-14 w-full p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg shadow-blue-500/20 border-b-2 border-gray-700">
      
      <div className="text-2xl font-bold text-gray-100">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Notes
        </span>
      </div>
      
      
      <SearchBar />
      
      
      <ProfileCard />
    </div>
  );
}
