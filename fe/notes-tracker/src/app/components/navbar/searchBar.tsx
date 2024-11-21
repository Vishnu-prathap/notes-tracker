import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

export default function SearchBar(){
return<div className=" flex">
    <Input type="text" placeholder="Search"/>
    <Button ><CiSearch />
    </Button>
</div>
}