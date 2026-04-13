import { Link } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext'

const AppSidebar = () => {
    const { isOpen, toggleSidebar, closeSidebar } = useSidebar()

    const sidebarItems = [
        {
            path: '/',
            text: "Gender List",
            icon: "M12.3 3.912a1 1 0 00-.988 0L7.39 6.5H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8.5a2 2 0 00-2-2h-3.39l-4.922-2.588a1 1 0 00-.988 0zM12 10a1 1 0 100 2 1 1 0 000-2zm-5 0a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z",
        },
        {
            path: '/users',
            text: "User List",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        },
    ];

    return (
        <>
            {/* Mobile toggle button */}
            <button
                type="button"
                className="fixed top-4 left-4 z-50 text-gray-100 bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg p-2.5 sm:hidden shadow-lg"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Toggle sidebar</span>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
                    onClick={closeSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 w-64 h-full bg-gray-900 border-r border-gray-700 px-4 py-6 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl sm:translate-x-0 sm:relative sm:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Logo */}
                <div className="flex items-center mb-8 pb-4 border-b border-gray-800">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg mr-3">
                        <span className="text-xl font-bold text-white">R</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white">RNL Demo</h1>
                        <p className="text-xs text-gray-400">Dashboard</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    {sidebarItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="flex items-center px-3 py-3 text-gray-200 rounded-xl hover:bg-gray-800 hover:text-white transition-all duration-200 group"
                            onClick={closeSidebar}
                        >
                            <svg className="w-5 h-5 mr-3 opacity-75 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                            {item.text}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default AppSidebar

