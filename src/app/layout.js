import { Merriweather } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Furkan Baştan | Bilgisayar Mühendisi",
    description: "Selam",
};

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={merriweather.className}>
                <main className="root-layout">
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
