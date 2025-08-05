'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Star, Zap } from 'lucide-react'
import PremiumModal from '@/components/PremiumModal'
import DateInput from '@/components/DateInput'
import DetailedResult from '@/components/DetailedResult'
import { calculateAdvancedCompatibility } from '@/lib/compatibility-data'

export default function Home() {
  const [date1, setDate1] = useState<string>('')
  const [date2, setDate2] = useState<string>('')
  const [showResult, setShowResult] = useState(false)
  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)

  const getCompatibilityResult = () => {
    if (!date1 || !date2) return null
    
    return calculateAdvancedCompatibility(date1, date2)
  }

  // Fyll ut breakdown med dummyvärden för att undvika typfel
  const rawResult = getCompatibilityResult();
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
    : null;

  return (
    <div className="min-h-screen p-4 relative">
      {/* Header & Inputs: Visa bara om resultat EJ visas */}
      {!showResult && (
          
        <>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                <span className="mr-1 text-base align-middle">✨</span>MATCH MADE IN HEAVEN<span className="ml-1 text-base align-middle">🌟</span>
              </h1>
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <p className="text-gray-600 max-w-md mx-auto">
              <span className="text-base mr-1 align-middle">✨</span>Passar ni verkligen ihop? Fuck around and find out.<span className="ml-1 text-base align-middle">🌠</span> Fyll i födelsedatum nedan.
            </p>
          </div>
          <div className="max-w-md mx-auto flex flex-col" style={{ minHeight: '70vh' }}>
            <DateInput
              onDateChange={setDate1}
              label="Ditt födelsedatum"
              placeholder="Välj ditt födelsedatum"
            />
            {date1 && (() => {
              const birthData1 = require('@/lib/birth-data').getBirthData(date1)
              const getZodiacEmoji = (sign: string) => {
                const emojis: Record<string, string> = {
                  'Väduren': '♈', 'Oxen': '♉', 'Tvillingarna': '♊', 'Kräftan': '♋',
                  'Lejonet': '♌', 'Jungfrun': '♍', 'Vågen': '♎', 'Skorpionen': '♏',
                  'Skytten': '♐', 'Stenbocken': '♑', 'Vattumannen': '♒', 'Fiskarna': '♓'
                }
                return emojis[sign] || '⭐'
              }
              return (
                <div className="text-center mt-2 mb-8">
                  <span className="text-lg font-semibold">Ditt stjärntecken:</span>
                  <span className="ml-2 text-xl">{getZodiacEmoji(birthData1.sun)} {birthData1.sun}</span>
                  <br />
                  <span className="text-sm text-gray-500">Måntecken: {birthData1.moon}</span>
                </div>
              )
            })()}

            <div className="flex justify-center my-8" style={{ position: 'relative', height: '4.5rem' }}>
              <Heart className="w-32 h-32 text-pink-500 animate-pulse fill-pink-500" style={{ position: 'absolute', top: '25%' }} />
            </div>

            <div className="mt-20">
              <DateInput
                onDateChange={setDate2}
                label="Din dejts födelsedatum"
                placeholder="Välj din dejts födelsedatum"
              />
            </div>
            {date2 && (() => {
              const birthData2 = require('@/lib/birth-data').getBirthData(date2)
              const getZodiacEmoji = (sign: string) => {
                const emojis: Record<string, string> = {
                  'Väduren': '♈', 'Oxen': '♉', 'Tvillingarna': '♊', 'Kräftan': '♋',
                  'Lejonet': '♌', 'Jungfrun': '♍', 'Vågen': '♎', 'Skorpionen': '♏',
                  'Skytten': '♐', 'Stenbocken': '♑', 'Vattumannen': '♒', 'Fiskarna': '♓'
                }
                return emojis[sign] || '⭐'
              }
              return (
                <div className="text-center mt-2 mb-8">
                  <span className="text-lg font-semibold">Din dejts stjärntecken:</span>
                  <span className="ml-2 text-xl">{getZodiacEmoji(birthData2.sun)} {birthData2.sun}</span>
                  <br />
                  <span className="text-sm text-gray-500">Måntecken: {birthData2.moon}</span>
                </div>
              )
            })()}

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                let i = 5;
                setCountdown(i);
                const interval = setInterval(() => {
                  i--;
                  setCountdown(i);
                  if (i === 0) {
                    clearInterval(interval);
                    setCountdown(null);
                    setShowResult(true);
                  }
                }, 700);
              }}
              disabled={!date1 || !date2}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Beräkna hur kompatibla vi är
            </motion.button>
          </div>

        </>
      )}

      {/* Fullscreen Countdown Overlay */}
      {countdown !== null && countdown > 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 animate-gradient bg-opacity-90">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className="text-white text-8xl font-extrabold drop-shadow-lg mb-8 flex items-center gap-6"
          >
            <span>{countdown}</span>
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [-20, 0, -20] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              className="text-7xl"
              role="img"
              aria-label="raket"
            >
              🚀
            </motion.span>
          </motion.div>
          <div className="text-white text-2xl font-bold mt-4">
            {countdown === 5 && 'Startar kärleksraketen...'}
            {countdown === 4 && 'Håll i dig!'}
            {countdown === 3 && 'Astroboost laddas...'}
            {countdown === 2 && 'Snart magi!'}
            {countdown === 1 && 'BOOM! 💥'}
          </div>
        </div>
      )}

      {/* Result: Visa endast resultatsidan */}
      {showResult && result && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-yellow-100 to-purple-100 px-4 w-full">
          <div className="flex flex-col items-center justify-center gap-8 w-full" style={{ minHeight: '70vh' }}>
            {date1 && date2 && (() => {
              const birthData1 = require('@/lib/birth-data').getBirthData(date1);
              const birthData2 = require('@/lib/birth-data').getBirthData(date2);
              const funEmojis: Record<string, string> = {
                'Väduren': '🐏', 'Oxen': '🐂', 'Tvillingarna': '👯', 'Kräftan': '🦀',
                'Lejonet': '🦁', 'Jungfrun': '🧚', 'Vågen': '⚖️', 'Skorpionen': '🦂',
                'Skytten': '🏹', 'Stenbocken': '🐐', 'Vattumannen': '🧜‍♂️', 'Fiskarna': '🐟'
              };
              const getFunEmoji = (sign: string) => funEmojis[sign] || '⭐';
              return (
                <>
                  <div className="bg-white rounded-xl shadow flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6">
                    <span className="font-bold text-lg text-gray-700 mb-2">Du</span>
                    <span className="text-xl flex items-center gap-2 mb-1">
                      {getFunEmoji(birthData1.sun)} {birthData1.sun}
                    </span>
                    <span className="text-md text-gray-500 flex items-center gap-2">
                      <span>i måntecken</span> {birthData1.moon}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl shadow flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6">
                    <span className="font-bold text-lg text-gray-700 mb-2">Din dejt</span>
                    <span className="text-xl flex items-center gap-2 mb-1">
                      {getFunEmoji(birthData2.sun)} {birthData2.sun}
                    </span>
                    <span className="text-md text-gray-500 flex items-center gap-2">
                      <span>i måntecken</span> {birthData2.moon}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl shadow flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6">
                    <span className="font-bold text-lg text-gray-700 mb-2">Kompatibilitet</span>
                    <span className="text-3xl font-extrabold text-pink-600">
                      {(() => {
                        const scores = [
                          result.breakdown.sun,
                          result.breakdown.moon,
                          result.breakdown.venusMars,
                          result.breakdown.mercury,
                          result.breakdown.jupiter,
                          result.breakdown.saturn
                        ];
                        const validScores = scores.filter(s => typeof s === 'number');
                        const avg = validScores.length > 0 ? validScores.reduce((a, b) => a + b, 0) / validScores.length : 0;
                        return Math.round(avg);
                      })()}%
                    </span>
                  </div>
                </>
              );
            })()}
            {/* Move analysis box up and align with other boxes */}
            <div className="flex flex-col items-center w-full" style={{ marginTop: '-16px' }}>
              <DetailedResult
                date1={date1}
                date2={date2}
                result={result}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}