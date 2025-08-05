export interface ZodiacSign {
  name: string
  emoji: string
  dates: string
  element: 'Eld' | 'Jord' | 'Luft' | 'Vatten'
  quality: 'Kardinal' | 'Fast' | 'Rörlig'
  ruler: string
  description: string
}

export interface CompatibilityResult {
  score: number
  description: string
  details: {
    love: number
    friendship: number
    communication: number
    trust: number
  }
}

export interface User {
  id: string
  email: string
  isPremium: boolean
  checksUsed: number
  maxChecks: number
}

export interface PremiumPlan {
  id: string
  name: string
  price: number
  features: string[]
  checksPerMonth: number
} 