import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MdDeleteOutline } from "react-icons/md";
import { BsPencil } from "react-icons/bs";

export default function NoteCard({ item }: { item: number }) {
    return (
        <Card className="min-w-[350px] max-w-sm border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 
        shadow-lg shadow-blue-500/20 text-gray-100 rounded-lg p-4 transform transition-transform hover:scale-105">
            {/* Header */}
            <CardHeader className="text-xl font-semibold mb-2">
                Notes Header
            </CardHeader>

            {/* Content */}
            <CardContent className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Date: 2024-11-15</div>
                <div className="text-base mb-2">Notes String</div>
                <p className="text-sm text-teal-400">{`Note ID: ${item}`}</p>
            </CardContent>

            {/* Footer */}
            <CardHeader className="flex justify-between items-center">
                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center px-3 py-2 rounded">
                        <BsPencil className="mr-1" />
                        Edit
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center px-3 py-2 rounded">
                        <MdDeleteOutline className="mr-1" />
                        Delete
                    </Button>
                </div>

                {/* Tag/Button */}
                <div>
                    <Button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-2 rounded shadow-md shadow-teal-500/40">
                        #Alert
                    </Button>
                </div>
            </CardHeader>
        </Card>
    );
}
