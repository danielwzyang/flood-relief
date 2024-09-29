import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./card"

import Image from "next/image"
import profile from "../../assets/profile.png"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import mail from "../../assets/mail.svg"
import { Separator } from "./separator"
import { Popover, PopoverTrigger, PopoverContent } from "./popover"

export interface cardProps {
    name: string,
    position: string,
    bio: string,
    facebook: string,
    instagram: string,
    mail: string
}

export default function TeamCard(props: cardProps) {
    return (
        <Card className="w-[300px] m-5 border-[#b6b6b6]">
            <CardHeader className="relative">
                <Image src={profile} alt="picture" width={80} height={80} className="absolute right-5 top-5 rounded-xl" />
                <CardTitle className="text-lg">{props.name}</CardTitle>
                <CardDescription className="text-md">{props.position}</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 text-balance">{props.bio}</CardContent>
            <CardFooter>
                <div className="flex h-5 items-center space-x-3 ml-auto mr-2">
                    <Popover>
                        <PopoverTrigger><Image src={facebook} alt="facebook" /></PopoverTrigger>
                        <PopoverContent className="w-fit py-2 rounded-xl text-sm">{props.facebook}</PopoverContent>
                    </Popover>
                    <Separator orientation="vertical" className="bg-[#b6b6b6]" />
                    <Popover>
                        <PopoverTrigger><Image src={instagram} alt="instagram" /></PopoverTrigger>
                        <PopoverContent className="w-fit py-2 rounded-xl text-sm">{props.instagram}</PopoverContent>
                    </Popover>
                    <Separator orientation="vertical" className="bg-[#b6b6b6]" />
                    <Popover>
                        <PopoverTrigger><Image src={mail} alt="mail" /></PopoverTrigger>
                        <PopoverContent className="w-fit py-2 rounded-xl text-sm">{props.mail}</PopoverContent>
                    </Popover>
                </div>
            </CardFooter>
        </Card >
    )
}