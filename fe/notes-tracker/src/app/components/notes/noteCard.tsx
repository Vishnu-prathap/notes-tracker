import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { MdDeleteOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

export default function NoteCard(){
    return<Card className="max-w-[400px] border-2 min-h-[100px] flex flex-col justify-start items-start">
        <CardHeader>Notes header</CardHeader>
        <CardContent>
            <div>Date</div>
            <div>Notes string</div>
        </CardContent>
        <CardHeader className="flex flex-row justify-around  items-end">
            <div><Button>#Alert</Button></div>
            <div>
                <Button><BsPencil />
                </Button>
                <Button><MdDeleteOutline />
                </Button>
            </div>
        </CardHeader>
    </Card>
}