'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!user) {
    return <>{children}</>
  }

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '▦', roles: ['Manager'] },
    { href: '/products', label: 'Products', icon: '◻', roles: ['Manager', 'Store Keeper'] },
  ]

  const filteredMenuItems = menuItems.filter(item => item.roles.includes(user.role!))

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white border-b border-indigo-700">
          <h1 className="text-lg font-bold tracking-wide">STOCKIFY</h1>
        </div>
        <nav className="mt-6 space-y-1 px-3">
          {filteredMenuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="mr-3 text-base">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 mt-8 border-t border-slate-200 dark:border-slate-700 pt-4"
          >
            <span className="mr-3">→</span>
            Logout
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  {theme === 'light' ? (
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  ) : (
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm2.22-7.78a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM15 11a4 4 0 11-8 0 4 4 0 018 0zm2.22 4.22a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM11 17a1 1 0 100 2h1a1 1 0 100-2h-1zm7-4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM9.22 18.22a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414z" clipRule="evenodd" />
                  )}
                </svg>
              </button>
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-end text-right">
                  <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
                    {user.email.split('@')[0]}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {user.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 dark:bg-slate-950 p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}