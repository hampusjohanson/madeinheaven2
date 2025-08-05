'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Heart } from 'lucide-react'

interface DateInputProps {
  onDateChange: (date: string) => void
  label: string
  placeholder?: string
}

export default function DateInput({ onDateChange, label, placeholder }: DateInputProps) {
  const [date, setDate] = useState('')

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
    setDate(newDate)
    onDateChange(newDate)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-3"
    >
      <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
        <Calendar className="w-4 h-4 text-purple-500" />
        {label}
      </label>
      
      <div className="relative">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="w-full p-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder={placeholder}
          max={new Date().toISOString().split('T')[0]} // Kan inte välja framtida datum
        />
        
        {date && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
          >
            ✓
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 