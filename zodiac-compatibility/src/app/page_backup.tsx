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
      {/* Only show countdown overlay if active */}
      {countdown !== null && countdown > 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, rgb(11, 19, 43) 0%, rgb(30, 41, 82) 100%)' }}>
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
            <div className="text-center whitespace-pre-line">
              {countdown === 5 && 'Spårar planetpositioner\nfrån lokal cache'}
              {countdown === 4 && 'API-koppling till universum\nmisslyckades'}
              {countdown === 3 && 'Kontaktar\nRegina Lund'}
              {countdown === 2 && 'Avkodar\nemotionell metadata'}
              {countdown === 1 && 'Körning slutförd\n– resultat laddar'}
            </div>
          </div>
        </div>
      )}
      {/* Only show result view after countdown is finished and showResult is true */}
      {showResult && result ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-2 w-full">
          {/* Rubrik RESULTAT */}
          <h2 className="text-2xl font-extrabold mb-4 mt-6 text-center tracking-wide" style={{ color: 'rgb(212, 175, 55)' }}>RESULTAT</h2>
          <div className="flex flex-col items-center justify-center gap-4 w-full" style={{ minHeight: '60vh' }}>
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
                  <div className="bg-white rounded-xl shadow flex flex-col items-center min-h-[60px] w-[250px] mx-auto p-2">
                    <span className="font-bold text-sm text-gray-700 mb-1">Du</span>
                    <span className="text-base flex items-center gap-2 mb-1">
                      {getFunEmoji(birthData1.sun)} <span className="text-black">{birthData1.sun}</span>
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-2">
                      <span>i måntecken</span> {birthData1.moon}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl shadow flex flex-col items-center min-h-[60px] w-[250px] mx-auto p-2">
                    <span className="font-bold text-sm text-gray-700 mb-1">Din dejt</span>
                    <span className="text-base flex items-center gap-2 mb-1">
                      {getFunEmoji(birthData2.sun)} <span className="text-black">{birthData2.sun}</span>
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-2">
                      <span>i måntecken</span> {birthData2.moon}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl shadow flex flex-col items-center min-h-[60px] w-[250px] mx-auto p-2">
                    <span className="font-bold text-sm text-gray-700 mb-1">Kompatibilitet</span>
                    <span className="text-lg font-extrabold text-pink-600">
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
            <div className="flex flex-col items-center w-full" style={{ marginTop: '-8px' }}>
              <DetailedResult
                date1={date1}
                date2={date2}
                result={result}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen p-4 relative">
          {/* Star overlays inside first page */}
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
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg width=\"800\" height=\"600\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.9\"><circle cx=\"60\" cy=\"80\" r=\"1.5\" fill=\"white\"><animate attributeName=\"opacity\" values=\"0.9;0.3;0.9\" dur=\"2s\" repeatCount=\"indefinite\"/></circle><circle cx=\"120\" cy=\"150\" r=\"1.2\" fill=\"white\"><animate attributeName=\"opacity\" values=\"0.8;0.2;0.8\" dur=\"2.5s\" repeatCount=\"indefinite\"/></circle><circle cx=\"200\" cy=\"100\" r=\"1.8\" fill=\"white\"><animate attributeName=\"opacity\" values=\"1;0.4;1\" dur=\"1.8s\" repeatCount=\"indefinite\"/></circle><circle cx=\"300\" cy=\"200\" r=\"1.3\" fill=\"white\"><animate attributeName=\"opacity\" values=\"0.7;0.1;0.7\" dur=\"2.2s\" repeatCount=\"indefinite\"/></circle><circle cx=\"400\" cy=\"120\" r=\"1.6\" fill=\"white\"><animate attributeName=\"opacity\" values=\"0.9;0.3;0.9\" dur=\"2.7s\" repeatCount=\"indefinite\"/></circle><circle cx=\"500\" cy=\"300\" r=\"1.4\" fill=\"white\"><animate attributeName=\"opacity\" values=\"0.8;0.2;0.8\" dur=\"2.1s\" repeatCount=\"indefinite\"/></circle><circle cx=\"600\" cy=\"180\" r=\"1.7\" fill=\"white\"><animate attributeName=\"opacity\" values=\"1;0.4;1\" dur=\"2.3s\" repeatCount=\"indefinite\"/></circle><polyline points=\"60,80 120,150 200,100 300,200\" stroke=\"white\" strokeWidth=\"0.5\" opacity=\"0.35\"/><polyline points=\"400,120 500,300 600,180\" stroke=\"white\" strokeWidth=\"0.5\" opacity=\"0.35\"/></g></svg>')",
              backgroundRepeat: 'repeat',
              backgroundSize: '800px 600px',
              animation: 'twinkle 3s infinite alternate',
              zIndex: 0,
            }}
          />
          {/* Header */}
          <div className="text-center mb-8" style={{ position: 'relative', zIndex: 10 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" style={{ color: 'rgb(212, 175, 55)' }} />
              <h1 className="text-3xl font-bold text-white">
                <span className="mr-1 text-base align-middle">✨</span>MATCH MADE IN HEAVEN<span className="ml-1 text-base align-middle">🌟</span>
              </h1>
              <Sparkles className="w-8 h-8" style={{ color: 'rgb(212, 175, 55)' }} />
            </div>
            <p className="text-white max-w-md mx-auto">
              <span className="text-base mr-1 align-middle">✨</span>Passar ni verkligen ihop? Fuck around and find out.<span className="ml-1 text-base align-middle">🌠</span> Fyll i födelsedatum nedan.
            </p>
          </div>
          <div className="max-w-md mx-auto flex flex-col gap-6" style={{ minHeight: '70vh', position: 'relative', zIndex: 10 }}>
            {/* Fasta input-fält */}
            <DateInput
              onDateChange={setDate1}
              label="Ditt födelsedatum"
            />
            <DateInput
              onDateChange={setDate2}
              label="Din dejts födelsedatum"
              placeholder="Välj din dejts födelsedatum"
            />
            <div className="flex justify-center my-8" style={{ position: 'relative', height: '4.5rem' }}>
              <Heart className="w-16 h-16 animate-pulse" style={{ color: 'rgb(212, 175, 55)', fill: 'rgb(212, 175, 55)', position: 'absolute', top: '5%' }} />
            </div>
            {(date1 || date2) && (
              <div className="flex flex-col gap-4 mt-2">
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
                    <div className="text-center text-white">
                      <span className="text-lg font-semibold">Ditt stjärntecken:</span>
                      <span className="ml-2 text-xl">{getZodiacEmoji(birthData1.sun)} {birthData1.sun}</span>
                      <br />
                      <span className="text-sm">Måntecken: {birthData1.moon}</span>
                    </div>
                  )
                })()}
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
                    <div className="text-center text-white">
                      <span className="text-lg font-semibold">Din dejts stjärntecken:</span>
                      <span className="ml-2 text-xl">{getZodiacEmoji(birthData2.sun)} {birthData2.sun}</span>
                      <br />
                      <span className="text-sm">Måntecken: {birthData2.moon}</span>
                    </div>
                  )
                })()}
              </div>
            )}
            {/* Calculate Button: Visa endast när båda datumen är ifyllda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={date1 && date2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%' }}
            >
              {date1 && date2 && (
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
                    }, 1400); // doubled from 700ms to 1400ms
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
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}
