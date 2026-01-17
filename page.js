'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Shield, Zap, Users, CreditCard, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const features = [
    { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics Real-time", desc: "Monitor bisnis secara live" },
    { icon: <Shield className="w-6 h-6" />, title: "Security Grade A", desc: "Keamanan tingkat enterprise" },
    { icon: <Users className="w-6 h-6" />, title: "Team Management", desc: "Kelola tim dengan mudah" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Payment Processing", desc: "Integrasi pembayaran lengkap" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Akses dari mana saja" },
    { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", desc: "Perform optimal" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Dashboard Admin Terbaru 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Admin<span className="text-white">Dash</span>Pro
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Platform dashboard bisnis modern dengan analitik canggih, manajemen data real-time, 
            dan antarmuka yang intuitif untuk mengoptimalkan operasional bisnis Anda.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/login')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Mulai Dashboard
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-gray-400">Pengguna</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50ms</div>
              <div className="text-gray-400">Response Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
