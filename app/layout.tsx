import type { Metadata } from "next"
import { Lora } from "next/font/google"
import "./globals.css"

const lora = Lora({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Flood Relief Network",
    description: "Flood-free starts with me!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lora.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
