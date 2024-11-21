import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function ProfileCard(){
    return<HoverCard>
        <HoverCardTrigger className="flex flex-row">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
            </Avatar>

        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col items-center justify-center">
            <div>User</div>
            <Button variant={`destructive`}>Logout</Button>
        </HoverCardContent>
    </HoverCard>

}