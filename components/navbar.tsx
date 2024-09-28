import { Sheet, SheetTrigger, SheetContent,  } from "./ui/sheet"
import Image from "next/image"
import menu from "../assets/menu.svg"

export default function Navbar() {
    return (
        <Sheet>
            <SheetTrigger className="border border-[#575757] h-10 w-10 rounded p-2 m-3"><Image src={menu} alt="menu"/></SheetTrigger>
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