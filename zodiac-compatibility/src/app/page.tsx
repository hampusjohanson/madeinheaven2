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
              <Sparkles className="w-8 h-8" style={{ color: 'rgb(var(--accent-gold))' }} />
              <h1 className="text-3xl font-bold text-white">
                <span className="mr-1 text-base align-middle">✨</span>MATCH MADE IN HEAVEN<span className="ml-1 text-base align-middle">🌟</span>
              </h1>
              <Sparkles className="w-8 h-8" style={{ color: 'rgb(var(--accent-gold))' }} />
            </div>
            <p className="text-white max-w-md mx-auto">
              <span className="text-base mr-1 align-middle">✨</span>Passar ni verkligen ihop? Fuck around and find out.<span className="ml-1 text-base align-middle">🌠</span> Fyll i födelsedatum nedan.
            </p>
          </div>

          {/* Äkta stjärnbilder som konstellationer */}
          <svg 
            className="fixed inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cassiopeia - W-formad konstellation */}
            <g>
              <circle cx="10%" cy="15%" r="1.5" fill="white" opacity="0.9"/>
              <circle cx="15%" cy="12%" r="1.2" fill="white" opacity="0.8"/>
              <circle cx="20%" cy="18%" r="1.4" fill="white" opacity="0.9"/>
              <circle cx="25%" cy="10%" r="1.3" fill="white" opacity="0.8"/>
              <circle cx="30%" cy="16%" r="1.6" fill="white" opacity="0.9"/>
              <polyline points="10%,15% 15%,12% 20%,18% 25%,10% 30%,16%" stroke="white" strokeWidth="0.3" opacity="0.6"/>
            </g>

            {/* Orion - den stora jägaren */}
            <g>
              {/* Orions bälte */}
              <circle cx="70%" cy="25%" r="1.8" fill="white" opacity="0.9"/>
              <circle cx="72%" cy="27%" r="1.6" fill="white" opacity="0.8"/>
              <circle cx="74%" cy="29%" r="1.7" fill="white" opacity="0.9"/>
              {/* Orions axlar */}
              <circle cx="68%" cy="20%" r="1.4" fill="white" opacity="0.8"/>
              <circle cx="76%" cy="22%" r="1.5" fill="white" opacity="0.8"/>
              {/* Orions höfter */}
              <circle cx="69%" cy="35%" r="1.3" fill="white" opacity="0.7"/>
              <circle cx="75%" cy="37%" r="1.4" fill="white" opacity="0.8"/>
              
              {/* Bältet */}
              <line x1="70%" y1="25%" x2="72%" y2="27%" stroke="white" strokeWidth="0.4" opacity="0.6"/>
              <line x1="72%" y1="27%" x2="74%" y2="29%" stroke="white" strokeWidth="0.4" opacity="0.6"/>
              {/* Kropp */}
              <line x1="68%" y1="20%" x2="70%" y2="25%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="76%" y1="22%" x2="74%" y2="29%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="70%" y1="25%" x2="69%" y2="35%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="74%" y1="29%" x2="75%" y2="37%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
            </g>

            {/* Stora Björn (Big Dipper) */}
            <g>
              <circle cx="15%" cy="60%" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="20%" cy="62%" r="1.4" fill="white" opacity="0.9"/>
              <circle cx="25%" cy="61%" r="1.6" fill="white" opacity="0.8"/>
              <circle cx="30%" cy="58%" r="1.3" fill="white" opacity="0.8"/>
              <circle cx="28%" cy="65%" r="1.4" fill="white" opacity="0.7"/>
              <circle cx="32%" cy="68%" r="1.2" fill="white" opacity="0.8"/>
              <circle cx="36%" cy="70%" r="1.5" fill="white" opacity="0.9"/>
              
              {/* Sleven */}
              <polyline points="15%,60% 20%,62% 25%,61% 30%,58%" stroke="white" strokeWidth="0.3" opacity="0.6"/>
              {/* Handtaget */}
              <polyline points="30%,58% 28%,65% 32%,68% 36%,70%" stroke="white" strokeWidth="0.3" opacity="0.6"/>
            </g>

            {/* Leo (Lejonet) */}
            <g>
              <circle cx="85%" cy="50%" r="1.7" fill="white" opacity="0.9"/>
              <circle cx="88%" cy="45%" r="1.3" fill="white" opacity="0.8"/>
              <circle cx="90%" cy="52%" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="85%" cy="58%" r="1.4" fill="white" opacity="0.8"/>
              <circle cx="80%" cy="55%" r="1.2" fill="white" opacity="0.7"/>
              <circle cx="92%" cy="60%" r="1.6" fill="white" opacity="0.9"/>
              
              {/* Lejonets kropp */}
              <line x1="85%" y1="50%" x2="88%" y2="45%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="88%" y1="45%" x2="90%" y2="52%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="85%" y1="50%" x2="85%" y2="58%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="80%" y1="55%" x2="85%" y2="58%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="90%" y1="52%" x2="92%" y2="60%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
            </g>

            {/* Cygnus (Svanen) */}
            <g>
              <circle cx="50%" cy="5%" r="1.4" fill="white" opacity="0.8"/>
              <circle cx="52%" cy="10%" r="1.6" fill="white" opacity="0.9"/>
              <circle cx="54%" cy="15%" r="1.3" fill="white" opacity="0.8"/>
              <circle cx="48%" cy="12%" r="1.2" fill="white" opacity="0.7"/>
              <circle cx="56%" cy="12%" r="1.5" fill="white" opacity="0.8"/>
              
              {/* Svanens kors */}
              <line x1="50%" y1="5%" x2="54%" y2="15%" stroke="white" strokeWidth="0.3" opacity="0.6"/>
              <line x1="48%" y1="12%" x2="56%" y2="12%" stroke="white" strokeWidth="0.3" opacity="0.6"/>
            </g>

            {/* Andromeda */}
            <g>
              <circle cx="40%" cy="85%" r="1.5" fill="white" opacity="0.8"/>
              <circle cx="45%" cy="82%" r="1.3" fill="white" opacity="0.9"/>
              <circle cx="48%" cy="87%" r="1.4" fill="white" opacity="0.8"/>
              <circle cx="52%" cy="84%" r="1.6" fill="white" opacity="0.9"/>
              <circle cx="42%" cy="90%" r="1.2" fill="white" opacity="0.7"/>
              
              {/* Andromedas kedja */}
              <polyline points="40%,85% 45%,82% 48%,87% 52%,84%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
              <line x1="40%" y1="85%" x2="42%" y2="90%" stroke="white" strokeWidth="0.3" opacity="0.5"/>
            </g>
          </svg>
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
                  <span className="text-sm text-white">Måntecken: {birthData1.moon}</span>
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
                  <span className="text-sm text-white">Måntecken: {birthData2.moon}</span>
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
              className="w-full py-4 px-6 text-black font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-auto border border-gray-300"
              style={{ 
                backgroundColor: 'rgba(220, 220, 220, 0.95)',
                backdropFilter: 'blur(2px)'
              }}
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
                  <div className="rounded-xl shadow flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6" style={{ backgroundColor: 'rgb(var(--primary-midnight-blue))' }}>
                    <span className="font-bold text-lg text-white mb-2">Du</span>
                    <span className="text-xl flex items-center gap-2 mb-1 text-white">
                      {getFunEmoji(birthData1.sun)} {birthData1.sun}
                    </span>
                    <span className="text-md text-white flex items-center gap-2">
                      <span>i måntecken</span> {birthData1.moon}
                    </span>
                  </div>
                  <div className="rounded-xl shadow flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6" style={{ backgroundColor: 'rgb(var(--primary-midnight-blue))' }}>
                    <span className="font-bold text-lg text-white mb-2">Din dejt</span>
                    <span className="text-xl flex items-center gap-2 mb-1 text-white">
                      {getFunEmoji(birthData2.sun)} {birthData2.sun}
                    </span>
                    <span className="text-md text-white flex items-center gap-2">
                      <span>i måntecken</span> {birthData2.moon}
                    </span>
                  </div>
                  <div className="rounded-xl shadow flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6" style={{ backgroundColor: 'rgb(var(--primary-midnight-blue))' }}>
                    <span className="font-bold text-lg text-white mb-2">Kompatibilitet</span>
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