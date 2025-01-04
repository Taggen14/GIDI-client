import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/header/Header"

export const Layout = () => {
    return (
        <div className="bg-white dark:darkmode-main flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex justify-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
