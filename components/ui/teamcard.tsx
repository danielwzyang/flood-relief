import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./card"

import Image, { StaticImageData } from "next/image"
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
    mail: string,
    image: StaticImageData
}

export default function TeamCard(props: cardProps) {
    return (
        <Card className="w-[300px] h-[350px] border-[#b6b6b6] relative">
            <CardHeader className="relative">
                <Image src={props.image} alt="picture" width={80} height={80} className="absolute right-5 top-5 rounded-xl" />
                <CardTitle className="text-lg">{props.name}</CardTitle>
                <CardDescription className="text-md">{props.position}</CardDescription>
            </CardHeader>
            <CardContent className="mt-6 text-balance">{props.bio}</CardContent>
            <CardFooter className="absolute bottom-0 right-0">
                <div className="flex h-5 items-center space-x-3">
                    <Popover>
                        <PopoverTrigger><Image src={facebook} alt="facebook" /></PopoverTrigger>
                        <PopoverContent className="w-fit py-2 rounded-xl text-sm" side="top">{props.facebook}</PopoverContent>
                    </Popover>
                    <Separator orientation="vertical" className="bg-[#b6b6b6]" />
                    <Popover>
                        <PopoverTrigger><Image src={instagram} alt="instagram" /></PopoverTrigger>
                        <PopoverContent className="w-fit py-2 rounded-xl text-sm" side="top">{props.instagram}</PopoverContent>
                    </Popover>
                    <Separator orientation="vertical" className="bg-[#b6b6b6]" />
                    <Popover>
                        <PopoverTrigger><Image src={mail} alt="mail" /></PopoverTrigger>
                        <PopoverContent className="w-fit py-2 rounded-xl text-sm" side="top">{props.mail}</PopoverContent>
                    </Popover>
                </div>
            </CardFooter>
        </Card >
    )
}