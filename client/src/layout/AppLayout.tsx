import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppSidebar from "./AppSidebar"
import { SidebarProvider } from "../contexts/SidebarContext"

const AppLayoutContent = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <AppHeader />
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <SidebarProvider>
            <AppLayoutContent />
        </SidebarProvider>
    )
}

export default AppLayout

