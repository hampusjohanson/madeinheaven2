'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Check, Zap, Heart, Sparkles } from 'lucide-react'

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
}

const premiumFeatures = [
  'Obegränsade kompatibilitetskontroller',
  'Djupare personlighetsanalys',
  'Personlighetstest för precisare resultat',
  'Detaljerad rapport med råd',
  'Spara och jämför flera matcher',
  'Prioriterad support',
  'Ingen reklam',
  'Exklusiva horoskop'
]

const pricingPlans = [
  {
    name: 'Månadsvis',
    price: 49,
    period: 'månad',
    popular: false
  },
  {
    name: 'Årligen',
    price: 399,
    period: 'år',
    popular: true,
    savings: 'Spara 32%'
  }
]

export default function PremiumModal({ isOpen, onClose }: PremiumModalProps) {
  const [selectedPlan, setSelectedPlan] = useState(1) // Årligen som default

  const handleUpgrade = () => {
    // TODO: Implementera Stripe checkout
    console.log('Upgrade to premium:', pricingPlans[selectedPlan])
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-gray-100">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Uppgradera till Premium
                </h2>
                <p className="text-gray-600">
                  Lås upp alla funktioner och få djupare insikter
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Premium-funktioner
              </h3>
              
              <div className="space-y-3 mb-6">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  Välj din plan
                </h3>
                
                {pricingPlans.map((plan, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPlan(index)}
                    className={`w-full p-4 border-2 rounded-xl text-left transition-all ${
                      selectedPlan === index
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${plan.popular ? 'relative' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        Populärast
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-900">{plan.name}</div>
                        <div className="text-sm text-gray-600">{plan.savings}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {plan.price} kr
                        </div>
                        <div className="text-sm text-gray-600">per {plan.period}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Upgrade Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleUpgrade}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Uppgradera nu
              </motion.button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Avbryt när som helst. Ingen bindningstid.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 