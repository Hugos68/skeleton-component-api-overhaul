import { Avatar } from "@/components/avatar";

export default function AvatarPage() {
    return (
        <Avatar>
            <Avatar.Image src="https://bit.ly/sage-adebayo" alt="Sage Adebayo" />
            <Avatar.Fallback>SA</Avatar.Fallback>
        </Avatar>
    )
}