'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Role = 'Manager' | 'Store Keeper' | null

interface AuthContextType {
  user: { email: string; role: Role } | null
  login: (email: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string; role: Role } | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email: string, password: string) => {
    if (email === 'manager@test.com' && password === 'password') {
      const userData = { email, role: 'Manager' as Role }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return true
    }
    if (email === 'store@test.com' && password === 'password') {
      const userData = { email, role: 'Store Keeper' as Role }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}