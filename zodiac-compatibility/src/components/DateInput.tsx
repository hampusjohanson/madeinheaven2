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
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const months = [
    'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
    'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
  ];

  const daysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();

  // Skapa datumsträng när alla fält är ifyllda
  const handleChange = (type: 'year' | 'month' | 'day', value: string) => {
    if (type === 'year') setYear(value);
    if (type === 'month') setMonth(value);
    if (type === 'day') setDay(value);
    const y = type === 'year' ? value : year;
    const m = type === 'month' ? value : month;
    const d = type === 'day' ? value : day;
    if (y && m && d) {
      const monthNum = (months.indexOf(m) + 1).toString().padStart(2, '0');
      const dayNum = d.padStart(2, '0');
      const dateStr = `${y}-${monthNum}-${dayNum}`;
      onDateChange(dateStr);
    }
  };

  // Generera år (1920 till nu)
  const years = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => (1920 + i).toString());

  // Generera dagar baserat på år och månad
  const selectedYear = year ? parseInt(year) : currentYear;
  const selectedMonth = month ? months.indexOf(month) + 1 : 1;
  const maxDay = daysInMonth(selectedYear, selectedMonth);
  const days = Array.from({ length: maxDay }, (_, i) => (i + 1).toString());

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
      <div className="flex gap-2">
        <select
          value={year}
          onChange={e => handleChange('year', e.target.value)}
          className="p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">År</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select
          value={month}
          onChange={e => handleChange('month', e.target.value)}
          className="p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">Månad</option>
          {months.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select
          value={day}
          onChange={e => handleChange('day', e.target.value)}
          className="p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">Dag</option>
          {days.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
    </motion.div>
  );
}