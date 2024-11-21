// import React from "react";
"use client"

import ProfileCard from "./profileCard"
import SearchBar from "./searchBar"

// import {Navbar} from "@nextui-org/react";
// import { useState } from "react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarComponent() {
  return<>
  <div className="flex flex-row items-center justify-around min-h-14 border-b-2 shadow-md w-full">
<div>Notes</div>
<SearchBar/>
<ProfileCard/></div>

  </>}