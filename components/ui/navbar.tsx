"use client"

import { Sheet, SheetTrigger, SheetContent, } from "./sheet"
import Image from "next/image"
import menu from "../../assets/menu.svg"
import Link from "next/link"

export interface navbarProps {
    name: string
}

export default function Navbar(props: navbarProps) {
    return (
        <>
            <Sheet>
                <SheetTrigger className="fixed z-10 bg-white h-10 w-10 flex justify-center rounded m-[10px] border items-center">
                    <Image src={menu} alt="menu" />
                </SheetTrigger>
                <SheetContent side="left" className="w-[200px]" onOpenAutoFocus={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-1">
                        <Link href="/" className="text-lg hover:underline">Home</Link>
                        <Link href="/about" className="text-lg hover:underline">About</Link>
                        <Link href="/gallery" className="text-lg hover:underline">Gallery</Link>
                        <Link href="/donate" className="text-lg hover:underline">Donate</Link>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="h-[60px] w-full flex items-center justify-center ">
                <h1 className="text-xl sm:text-2xl">{props.name}</h1>
            </div>
        </>
    )
}