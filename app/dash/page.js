'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import StatsCard from '@/components/StatsCard';
import { 
  DollarSign, Users, ShoppingCart, Package, TrendingUp, 
  Activity, CreditCard, Globe, Calendar, Download,
  MoreVertical, ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!loggedIn) {
      router.push('/login');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  const stats = [
    { title: 'Total Revenue', value: '$54,231', change: +12.5, icon: <DollarSign className="w-6 h-6" />, color: 'bg-green-500/20 text-green-400' },
    { title: 'Total Customers', value: '2,431', change: +8.2, icon: <Users className="w-6 h-6" />, color: 'bg-blue-500/20 text-blue-400' },
    { title: 'Total Orders', value: '1,234', change: +5.3, icon: <ShoppingCart className="w-6 h-6" />, color: 'bg-purple-500/20 text-purple-400' },
    { title: 'Products Sold', value: '4,213', change: -2.1, icon: <Package className="w-6 h-6" />, color: 'bg-amber-500/20 text-amber-400' },
  ];

  const recentOrders = [
    { id: '#ORD001', customer: 'John Doe', date: '2024-01-15', amount: '$542.50', status: 'Completed' },
    { id: '#ORD002', customer: 'Jane Smith', date: '2024-01-14', amount: '$1,234.00', status: 'Processing' },
    { id: '#ORD003', customer: 'Bob Johnson', date: '2024-01-14', amount: '$324.99', status: 'Completed' },
    { id: '#ORD004', customer: 'Alice Brown', date: '2024-01-13', amount: '$2,345.67', status: 'Pending' },
    { id: '#ORD005', customer: 'Charlie Wilson', date: '2024-01-12', amount: '$876.54', status: 'Completed' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your business today.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Jan 15, 2024
            </button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-opacity flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Charts and Data Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Revenue Overview</h3>
                <p className="text-gray-400">Monthly revenue trends</p>
              </div>
              <button className="p-2 hover:bg-white/5 rounded-lg">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
            
            {/* Simple Chart Placeholder */}
            <div className="h-64 flex items-end gap-2 pt-8">
              {[40, 65, 80, 60, 90, 75, 85].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className={`flex-1 rounded-t-lg ${index === 4 ? 'bg-gradient-to-t from-cyan-500 to-cyan-500/50' : 'bg-white/10'}`}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-400">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
          </motion.div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-1">Recent Orders</h3>
                <p className="text-gray-400">Latest customer orders</p>
              </div>
              <button className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm">
                View all <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-gray-400">{order.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{order.amount}</div>
                    <div className={`text-sm px-3 py-1 rounded-full inline-block ${
                      order.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                      order.status === 'Processing' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">89.2%</div>
                <div className="text-gray-400">Performance Score</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">142</div>
                <div className="text-gray-400">Active Sessions</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">$12,345</div>
                <div className="text-gray-400">Avg. Order Value</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
     }
