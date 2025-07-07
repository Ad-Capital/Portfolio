'use client'

import Link from 'next/link'
import Rounded from "@/common/RoundedButton"
import { Ghost } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[darkgray] text-white text-foreground p-4">
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Ghost className="w-24 h-24 mx-auto text-muted-foreground" />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-muted-foreground max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Oops👀 The page you're looking for seems to have vanished into thin air.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className='flex justify-center items-center text-white font-semibold'
        >
          <Rounded backgroundColor='white'>
            <Link href="/">
              <motion.p
              >
                Return to Home
              </motion.p>
            </Link>
          </Rounded>
        </motion.div>
      </motion.div>
    </div>
  )
}