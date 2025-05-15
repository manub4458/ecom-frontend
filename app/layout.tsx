import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { FlowbiteProvider } from "@/providers/flowbite";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Favobliss – Your One-Stop Shop for the Latest Electronics",
    keywords : [
                    "Electronics online, buy electronics, smartphones, home appliances, gadgets, top brands, best deals, fast delivery, online shopping, Favobliss"
                ],
    description: "Favobliss Explore a wide range of smartphones, home appliances, and more from top brands at unbeatable prices. Fast delivery &amp; great deals.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();

    return (
        <html lang="en">
            <link rel="icon" href="/assets/favicon.ico" sizes="any" />
            <body className={inter.className}>
                <SessionProvider
                    session={session}
                >
                    <ModalProvider/>
                    <FlowbiteProvider /> 
                    <Toaster position="bottom-right" />
                    <Navbar />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
