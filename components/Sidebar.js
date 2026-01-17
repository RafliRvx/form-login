'use client';

import { Home, BarChart3, Users, ShoppingCart, Settings, Bell, HelpCircle, LogOut, Package, CreditCard, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Dashboard', active: true },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
    { icon: <Users className="w-5 h-5" />, label: 'Customers' },
    { icon: <ShoppingCart className="w-5 h-5" />, label: 'Orders' },
    { icon: <Package className="w-5 h-5" />, label: 'Products' },
    { icon: <CreditCard className="w-5 h-5" />, label: 'Payments' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Reports' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  return (
    <div className="h-screen w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 flex flex-col p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
          <BarChart3 className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold">AdminDash</h1>
          <p className="text-xs text-gray-400">Business Suite</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active 
              ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400' 
              : 'hover:bg-white/5 text-gray-400 hover:text-white'}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="space-y-4 pt-6 border-t border-white/10">
        <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
          <span className="ml-auto w-2 h-2 bg-cyan-500 rounded-full"></span>
        </button>
        
        <button className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span>Help & Support</span>
        </button>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all mt-4"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
        }
