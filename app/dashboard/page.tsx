'use client'

import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Layout from '../../components/Layout'
import { mockProducts, getStats } from '../../lib/data'

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== 'Manager') {
      router.push('/login')
    }
  }, [user, router])

  if (!user || user.role !== 'Manager') {
    return null
  }

  const stats = getStats(mockProducts)

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: '▦',
      gradient: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50 dark:bg-blue-900/30',
    },
    {
      title: 'Low Stock Items',
      value: stats.lowStock,
      icon: '⚠',
      gradient: 'from-orange-500 to-orange-600',
      lightBg: 'bg-orange-50 dark:bg-orange-900/30',
    },
    {
      title: 'Active Categories',
      value: stats.totalCategories,
      icon: '◻',
      gradient: 'from-green-500 to-green-600',
      lightBg: 'bg-green-50 dark:bg-green-900/30',
    }
  ]

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Welcome back, {user.email.split('@')[0]}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((card, index) => (
            <div
              key={index}
              className="card-base p-6 hover:shadow-medium transition-all duration-200 transform hover:scale-105"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{card.title}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white">{card.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${card.gradient} text-white text-xl`}>
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}