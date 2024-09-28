import { Sheet, SheetTrigger, SheetContent,  } from "./ui/sheet"
import Image from "next/image"
import menu from "../assets/menu.svg"

export default function Navbar() {
    return (
        <Sheet>
            <SheetTrigger className="fixed z-10 bg-white h-10 w-10 flex justify-center rounded m-[10px] border">
                <Image src={menu} alt="menu"/>
            </SheetTrigger>
            <SheetContent side="left" className="w-[200px]">
                <div className="flex flex-col gap-1">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/donate">Donate</a>
                </div>
            </SheetContent>    
        </Sheet>
    )
}