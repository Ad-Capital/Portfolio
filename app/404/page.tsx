'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

const StarField = ({ count = 200 }) => (
  <div className="absolute inset-0">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
        }}
      />
    ))}
  </div>
)

const MeteorShower = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: '1px',
          height: '30px',
          transform: 'rotate(-45deg)',
          animation: `meteor ${Math.random() * 2 + 1}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
  </div>
)

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const astronautControls = useAnimation()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  useEffect(() => {
    astronautControls.start({
      x: mousePosition.x * 0.05,
      y: mousePosition.y * 0.05,
      rotate: [0, 10, -10, 0],
      transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' },
    })
  }, [mousePosition, astronautControls])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black"></div>
      <StarField />
      <MeteorShower />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-yellow-200 opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          top: '30%',
          left: '60%',
        }}
      />
      <motion.div
        className="absolute"
        animate={astronautControls}
      >
        <motion.img
          src="/astronaut.png"
          alt=""
          className="w-48 h-48 sm:w-64 sm:h-64"
          animate={{
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          }}
        />
      </motion.div>
      <div className="max-w-2xl w-full space-y-8 text-center relative z-10">
        <motion.h1
          className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          animate={{
            textShadow: [
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe, 0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe',
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #5271ff, 0 0 82px #5271ff, 0 0 92px #5271ff, 0 0 102px #5271ff, 0 0 151px #5271ff',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-3xl sm:text-4xl font-bold text-purple-300 mb-8"
          animate={{
            textShadow: [
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe',
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #5271ff',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        >
          Cosmic Void Detected!
        </motion.p>
        <p className="text-xl text-gray-300 mb-8">The page you're seeking has vanished into a black hole.</p>
        <Link 
          href="/"
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
        >
          Warp Back to Safety
        </Link>
      </div>
    </div>
  )
}