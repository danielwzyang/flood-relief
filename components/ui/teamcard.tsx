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

export interface cardProps {
    name: String,
    position: String,
    bio: String,
    facebook: String,
    instagram: String,
    email: String
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
                    <a href={props.facebook}><Image src={facebook} alt="facebook" /></a>
                    <Separator orientation="vertical" className="bg-[#b6b6b6]" />
                    <a href={props.instagram}><Image src={instagram} alt="instagram" /></a>
                    <Separator orientation="vertical" className="bg-[#b6b6b6]" />
                    <a href={props.email}><Image src={mail} alt="mail" /></a>
                </div>
            </CardFooter>
        </Card >
    )
}