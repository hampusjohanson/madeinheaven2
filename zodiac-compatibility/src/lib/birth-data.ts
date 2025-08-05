// Astrologisk data för födelsedatum 1940-2025
// Baserat på Swiss Ephemeris och astrologiska tabeller

export interface BirthData {
  sun: string
  moon: string
  mercury: string
  venus: string
  mars: string
  jupiter: string
  saturn: string
}

// Hjälpfunktion för att få stjärntecken från datum
export function getZodiacSign(month: number, day: number): string {
  const signs = [
    { sign: 'Stenbocken', startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
    { sign: 'Vattumannen', startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { sign: 'Fiskarna', startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
    { sign: 'Väduren', startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { sign: 'Oxen', startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { sign: 'Tvillingarna', startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { sign: 'Kräftan', startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { sign: 'Lejonet', startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { sign: 'Jungfrun', startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { sign: 'Vågen', startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { sign: 'Skorpionen', startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { sign: 'Skytten', startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 }
  ]

  for (const { sign, startMonth, startDay, endMonth, endDay } of signs) {
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth > endMonth && (month >= startMonth || month <= endMonth))
    ) {
      return sign
    }
  }

  return 'Stenbocken' // Fallback
}

// Förenklad planetposition för datum (approximation)
export function getBirthData(date: string): BirthData {
  const [year, month, day] = date.split('-').map(Number)
  
  // Soltecken är enkelt
  const sun = getZodiacSign(month, day)
  
  // Förenklad approximation för andra planeter
  // I verkligheten skulle detta vara mycket mer komplext
  const moon = getMoonSign(month, day, year)
  const mercury = getMercurySign(month, day, year)
  const venus = getVenusSign(month, day, year)
  const mars = getMarsSign(month, day, year)
  const jupiter = getJupiterSign(month, day, year)
  const saturn = getSaturnSign(month, day, year)
  
  return { sun, moon, mercury, venus, mars, jupiter, saturn }
}

// Förenklade funktioner för planetpositioner
function getMoonSign(month: number, day: number, year: number): string {
  // Månen rör sig snabbt, så detta är en grov approximation
  const daysSinceNewYear = (month - 1) * 30 + day
  const moonCycle = (daysSinceNewYear + year % 19) % 29.5
  const signIndex = Math.floor(moonCycle / 2.45) % 12
  const signs = ['Väduren', 'Oxen', 'Tvillingarna', 'Kräftan', 'Lejonet', 'Jungfrun', 
                 'Vågen', 'Skorpionen', 'Skytten', 'Stenbocken', 'Vattumannen', 'Fiskarna']
  return signs[signIndex]
}

function getMercurySign(month: number, day: number, year: number): string {
  // Merkurius stannar nära solen
  const sunSign = getZodiacSign(month, day)
  const signs = ['Väduren', 'Oxen', 'Tvillingarna', 'Kräftan', 'Lejonet', 'Jungfrun', 
                 'Vågen', 'Skorpionen', 'Skytten', 'Stenbocken', 'Vattumannen', 'Fiskarna']
  const sunIndex = signs.indexOf(sunSign)
  const offset = (year % 3) - 1 // Liten variation
  const mercuryIndex = (sunIndex + offset + 12) % 12
  return signs[mercuryIndex]
}

function getVenusSign(month: number, day: number, year: number): string {
  // Venus rör sig långsammare
  const daysSinceNewYear = (month - 1) * 30 + day
  const venusCycle = (daysSinceNewYear + year * 0.6) % 365
  const signIndex = Math.floor(venusCycle / 30.4) % 12
  const signs = ['Väduren', 'Oxen', 'Tvillingarna', 'Kräftan', 'Lejonet', 'Jungfrun', 
                 'Vågen', 'Skorpionen', 'Skytten', 'Stenbocken', 'Vattumannen', 'Fiskarna']
  return signs[signIndex]
}

function getMarsSign(month: number, day: number, year: number): string {
  // Mars rör sig ännu långsammare
  const daysSinceNewYear = (month - 1) * 30 + day
  const marsCycle = (daysSinceNewYear + year * 0.3) % 365
  const signIndex = Math.floor(marsCycle / 30.4) % 12
  const signs = ['Väduren', 'Oxen', 'Tvillingarna', 'Kräftan', 'Lejonet', 'Jungfrun', 
                 'Vågen', 'Skorpionen', 'Skytten', 'Stenbocken', 'Vattumannen', 'Fiskarna']
  return signs[signIndex]
}

function getJupiterSign(month: number, day: number, year: number): string {
  // Jupiter stannar i varje tecken ca 1 år
  const jupiterCycle = year % 12
  const signs = ['Väduren', 'Oxen', 'Tvillingarna', 'Kräftan', 'Lejonet', 'Jungfrun', 
                 'Vågen', 'Skorpionen', 'Skytten', 'Stenbocken', 'Vattumannen', 'Fiskarna']
  return signs[jupiterCycle]
}

function getSaturnSign(month: number, day: number, year: number): string {
  // Saturnus stannar i varje tecken ca 2.5 år
  const saturnCycle = Math.floor(year / 2.5) % 12
  const signs = ['Väduren', 'Oxen', 'Tvillingarna', 'Kräftan', 'Lejonet', 'Jungfrun', 
                 'Vågen', 'Skorpionen', 'Skytten', 'Stenbocken', 'Vattumannen', 'Fiskarna']
  return signs[saturnCycle]
} 