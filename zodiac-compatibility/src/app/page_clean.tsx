'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Zap } from 'lucide-react'
import DateInput from '@/components/DateInput'
import DetailedResult from '@/components/DetailedResult'
import { calculateAdvancedCompatibility } from '@/lib/compatibility-data'

export default function Home() {
  const [date1, setDate1] = useState<string>('')
  const [date2, setDate2] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)

  const getCompatibilityResult = () => {
    if (!date1 || !date2) return null
    return calculateAdvancedCompatibility(date1, date2)
  }

  const rawResult = getCompatibilityResult()
  const result = rawResult
    ? {
        ...rawResult,
        breakdown: {
          sun: rawResult.breakdown.sun,
          moon: 0,
          venusMars: 0,
          mercury: 0,
          jupiter: 0,
          saturn: 0,
        },
      }
    : null

  return (
    <>
      {countdown !== null && countdown > 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
          <motion.div className="text-white text-8xl font-extrabold drop-shadow-lg mb-8 flex items-center gap-6">
            <span>{countdown}</span>
            <motion.span className="text-7xl">🚀</motion.span>
          </motion.div>
          <div className="text-white text-2xl font-bold mt-4">
            <div className="text-center whitespace-pre-line">
              {countdown === 5 && 'Spårar planetpositioner'}
              {countdown === 4 && 'API-koppling till universum'}
              {countdown === 3 && 'Kontaktar Regina Lund'}
              {countdown === 2 && 'Avkodar metadata'}
              {countdown === 1 && 'Körning slutförd'}
            </div>
          </div>
        </div>
      )}

      {showResult && result ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-2 w-full">
          <h2 className="text-2xl font-extrabold mb-4 mt-6 text-center tracking-wide" style={{ color: 'rgb(212, 175, 55)' }}>
            RESULTAT
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 w-full" style={{ minHeight: '60vh' }}>
            <DetailedResult date1={date1} date2={date2} result={result} />
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-4 relative">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(120deg, rgba(255,255,255,0.06) 0%, rgba(24,24,107,0.0) 100%)',
              zIndex: 0,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"800\" height=\"600\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"60\" cy=\"80\" r=\"1.5\" fill=\"white\" opacity=\"0.8\"/><circle cx=\"120\" cy=\"150\" r=\"1.2\" fill=\"white\" opacity=\"0.7\"/><circle cx=\"200\" cy=\"100\" r=\"1.8\" fill=\"white\" opacity=\"0.9\"/><circle cx=\"300\" cy=\"200\" r=\"1.3\" fill=\"white\" opacity=\"0.6\"/><circle cx=\"400\" cy=\"120\" r=\"1.6\" fill=\"white\" opacity=\"0.8\"/><circle cx=\"500\" cy=\"300\" r=\"1.4\" fill=\"white\" opacity=\"0.7\"/><circle cx=\"600\" cy=\"180\" r=\"1.7\" fill=\"white\" opacity=\"0.9\"/></svg>')",
              backgroundRepeat: 'repeat',
              backgroundSize: '800px 600px',
              zIndex: 0,
            }}
          />

          <div className="text-center mb-8" style={{ position: 'relative', zIndex: 10 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" style={{ color: 'rgb(212, 175, 55)' }} />
              <h1 className="text-3xl font-bold text-white">
                <span className="mr-1 text-base align-middle">✨</span>
                MATCH MADE IN HEAVEN
                <span className="ml-1 text-base align-middle">🌟</span>
              </h1>
              <Sparkles className="w-8 h-8" style={{ color: 'rgb(212, 175, 55)' }} />
            </div>
            <p className="text-white max-w-md mx-auto">
              <span className="text-base mr-1 align-middle">✨</span>
              Passar ni verkligen ihop? Fuck around and find out.
              <span className="ml-1 text-base align-middle">🌠</span> Fyll i födelsedatum nedan.
            </p>
          </div>

          <div className="max-w-md mx-auto flex flex-col gap-6" style={{ minHeight: '70vh', position: 'relative', zIndex: 10 }}>
            <DateInput onDateChange={setDate1} label="Ditt födelsedatum" />
            <DateInput onDateChange={setDate2} label="Din dejts födelsedatum" placeholder="Välj din dejts födelsedatum" />
            
            <div className="flex justify-center my-8" style={{ position: 'relative', height: '4.5rem' }}>
              <Heart className="w-16 h-16 animate-pulse" style={{ color: 'rgb(212, 175, 55)', fill: 'rgb(212, 175, 55)', position: 'absolute', top: '5%' }} />
            </div>

            {date1 && date2 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  let i = 5
                  setCountdown(i)
                  const interval = setInterval(() => {
                    i--
                    setCountdown(i)
                    if (i === 0) {
                      clearInterval(interval)
                      setCountdown(null)
                      setShowResult(true)
                    }
                  }, 1400)
                }}
                className="w-full py-4 px-6 text-white font-semibold rounded-xl shadow-lg mt-auto"
                style={{
                  background: 'linear-gradient(90deg, rgb(24,24,107) 0%, rgb(212,175,55) 100%)',
                }}
              >
                <Zap className="w-5 h-5 inline mr-2" />
                Beräkna hur kompatibla vi är
              </motion.button>
            )}
          </div>
        </div>
      )}
    </>
  )
}
