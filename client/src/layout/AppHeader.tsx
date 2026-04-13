import { useRef } from "react";
import { useSidebar } from "../contexts/SidebarContext"
import { Link } from "react-router-dom";

const AppHeader = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { toggleSidebar, closeSidebar } = useSidebar();

    return (
        <nav className="bg-gray-900 border-b border-gray-700 shadow-lg z-40">
            <div className="px-6 py-4 max-w-7xl mx-auto">
                <div className="flex items-center justify-between">

                    {/* Left: App Logo + Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            className="lg:hidden p-2 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <span className="sr-only">Toggle sidebar</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                                <span className="text-lg font-bold text-white">R</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-white hidden sm:block">RNL Demo</h1>
                                <p className="text-xs text-gray-400 hidden md:block">Dashboard</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Search/Notifications - placeholder */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Search..."
                            />
                            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Actions + User Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Notifications */}
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-200 relative">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute -top-1 -right-1 block w-4 h-4 bg-red-500 rounded-full ring-2 ring-white"></span>
                        </button>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                type="button"
                                className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-800 transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                                onClick={() => { closeSidebar(); dropdownRef.current?.classList.toggle("hidden"); }}
                            >
                                <img
                                    className="w-9 h-9 rounded-full ring-2 ring-gray-700"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="User photo"
                                />
                                <div className="hidden sm:block text-left">
                                    <p className="text-sm font-semibold text-white">Neil Sims</p>
                                    <p className="text-xs text-gray-500">Admin</p>
                                </div>
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            <div
                                ref={dropdownRef}
                                className="hidden absolute right-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50"
                            >
                                <div className="px-4 py-3">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="Profile"
                                        />
                                        <div>
                                            <p className="font-semibold text-white text-sm">Neil Sims</p>
                                            <p className="text-gray-400 text-xs">neil.sims@rnldemo.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 border-t border-gray-700">
                                    <ul>

                                        <li>
                                            <Link to="#" className="block px-4 py-2.5 text-sm text-gray-300 bg-gray-700 rounded-lg transition-colors w-full text-left">Sign out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AppHeader;

