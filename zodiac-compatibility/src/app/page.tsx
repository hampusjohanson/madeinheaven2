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

          {/* Blinkande stjärnbilder */}
          <svg 
            className="fixed inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Konstellation 1 - Orion-liknande */}
            <g>
              <circle cx="15%" cy="20%" r="2" fill="white">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="20%" cy="25%" r="1.5" fill="white">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="25%" cy="15%" r="1.8" fill="white">
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="12%" cy="30%" r="1.4" fill="white">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.1s" repeatCount="indefinite"/>
              </circle>
              {/* Streck mellan stjärnorna */}
              <line x1="15%" y1="20%" x2="20%" y2="25%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="20%" y1="25%" x2="25%" y2="15%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite"/>
              </line>
              <line x1="15%" y1="20%" x2="12%" y2="30%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.8s" repeatCount="indefinite"/>
              </line>
              <line x1="25%" y1="15%" x2="12%" y2="30%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.2s" repeatCount="indefinite"/>
              </line>
            </g>

            {/* Konstellation 2 - Big Dipper-liknande */}
            <g>
              <circle cx="70%" cy="15%" r="1.8" fill="white">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1.9s" repeatCount="indefinite"/>
              </circle>
              <circle cx="75%" cy="20%" r="1.6" fill="white">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="80%" cy="25%" r="2" fill="white">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="85%" cy="30%" r="1.5" fill="white">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.7s" repeatCount="indefinite"/>
              </circle>
              {/* Streck för big dipper */}
              <line x1="70%" y1="15%" x2="75%" y2="20%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.2s" repeatCount="indefinite"/>
              </line>
              <line x1="75%" y1="20%" x2="80%" y2="25%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite"/>
              </line>
              <line x1="80%" y1="25%" x2="85%" y2="30%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.4;0.2;0.4" dur="3.5s" repeatCount="indefinite"/>
              </line>
            </g>

            {/* Konstellation 3 - Kassiopeja-liknande */}
            <g>
              <circle cx="45%" cy="70%" r="1.9" fill="white">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="50%" cy="75%" r="1.6" fill="white">
                <animate attributeName="opacity" values="0.6;0.8;0.6" dur="1.9s" repeatCount="indefinite"/>
              </circle>
              <circle cx="55%" cy="68%" r="1.8" fill="white">
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="60%" cy="73%" r="1.4" fill="white">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.0s" repeatCount="indefinite"/>
              </circle>
              {/* Kassiopeja-streck */}
              <line x1="45%" y1="70%" x2="50%" y2="75%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.5s" repeatCount="indefinite"/>
              </line>
              <line x1="50%" y1="75%" x2="55%" y2="68%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.7s" repeatCount="indefinite"/>
              </line>
              <line x1="55%" y1="68%" x2="60%" y2="73%" stroke="white" strokeWidth="0.5">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.1s" repeatCount="indefinite"/>
              </line>
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
              className="w-full py-4 px-6 text-black font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
              style={{ 
                backgroundColor: 'rgb(var(--accent-light-gray))'
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