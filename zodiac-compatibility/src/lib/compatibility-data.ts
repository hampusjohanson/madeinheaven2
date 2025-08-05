// Rolig och seriös stjärntecken-kompatibilitet på svenska
// Med kändisreferenser och humoristiska tolkningar

export interface CompatibilityResult {
  score: number
  description: string
  category: 'love' | 'friendship' | 'general'
}

// Sol-kompatibilitet (kärna och vilja)
export const solarCompatibility: Record<string, Record<string, CompatibilityResult>> = {
  'Väduren': {
    'Väduren': { score: 70, description: 'Ni är som två raketmotorer som startar samtidigt. Spännande, men någon kommer att bränna ut först.', category: 'love' },
    'Oxen': { score: 45, description: 'Väduren vill springa, Oxen vill stå stilla. Det här är som att para ihop Usain Bolt med en ko.', category: 'love' },
    'Tvillingarna': { score: 85, description: 'Energi och nyfikenhet i perfekt harmoni. Ni är som en podd som aldrig tar slut.', category: 'love' },
    'Kräftan': { score: 60, description: 'Väduren vill framåt, Kräftan vill hem. Det kan funka om ni lär er att vänta på varandra.', category: 'love' },
    'Lejonet': { score: 95, description: 'Eld och eld! Ni är som Zlatan och Messi – båda vill vara stjärnan, men tillsammans är ni oslagbara.', category: 'love' },
    'Jungfrun': { score: 50, description: 'Väduren: "Låt oss göra det!" Jungfrun: "Men har du tänkt på alla detaljer?" Det blir spännande.', category: 'love' },
    'Vågen': { score: 75, description: 'Väduren ger energi, Vågen ger balans. Ni kompletterar varandra som kaffe och mjölk.', category: 'love' },
    'Skorpionen': { score: 80, description: 'Intensiv kemi! Ni är som en dålig idé som känns väldigt bra. Kan bli episk.', category: 'love' },
    'Skytten': { score: 90, description: 'Eld och äventyr! Ni är som två backpackers som aldrig kommer hem. Perfekt för varandra.', category: 'love' },
    'Stenbocken': { score: 55, description: 'Väduren vill nu, Stenbocken vill planera. Det kan funka om ni lär er att kompromissa.', category: 'love' },
    'Vattumannen': { score: 70, description: 'Innovation och energi! Ni är som en startup som aldrig sover. Spännande framtid.', category: 'love' },
    'Fiskarna': { score: 65, description: 'Väduren är praktisk, Fiskarna är drömmare. Ni kan lära er mycket av varandra.', category: 'love' }
  },
  'Oxen': {
    'Väduren': { score: 45, description: 'Se Väduren + Oxen ovan. Samma historia, andra perspektivet.', category: 'love' },
    'Oxen': { score: 85, description: 'Stabilitet och lojalitet! Ni är som två gamla ek som växer tillsammans. Tråkigt men säkert.', category: 'love' },
    'Tvillingarna': { score: 50, description: 'Oxen vill stabilitet, Tvillingarna vill variation. Det här är som att para ihop en bank med en cirkus.', category: 'love' },
    'Kräftan': { score: 90, description: 'Trygghet och känslor! Ni är som en mysig kväll framför brasan. Perfekt för långsiktigt.', category: 'love' },
    'Lejonet': { score: 60, description: 'Oxen är praktisk, Lejonet vill uppmärksamhet. Det kan funka om Lejonet lär sig att uppskatta stabilitet.', category: 'love' },
    'Jungfrun': { score: 95, description: 'Praktisk och perfektionistisk! Ni är som IKEA:s drömpar. Allt blir ordnat och vackert.', category: 'love' },
    'Vågen': { score: 70, description: 'Balans och stabilitet! Ni är som en välbyggd bro. Håller för allt.', category: 'love' },
    'Skorpionen': { score: 75, description: 'Djup och lojalitet! Ni är som två gamla vänner som vet allt om varandra.', category: 'love' },
    'Skytten': { score: 55, description: 'Oxen vill hem, Skytten vill ut i världen. Det kan funka om ni lär er att respektera olikheter.', category: 'love' },
    'Stenbocken': { score: 90, description: 'Ambitiös och stabil! Ni är som två företagsledare som bygger imperium tillsammans.', category: 'love' },
    'Vattumannen': { score: 65, description: 'Tradition möter innovation! Ni kan lära er mycket av varandra om ni är öppna.', category: 'love' },
    'Fiskarna': { score: 80, description: 'Praktisk och känslig! Ni är som en trädgård som blomstrar med både struktur och skönhet.', category: 'love' }
  },
  'Tvillingarna': {
    'Väduren': { score: 85, description: 'Se Väduren + Tvillingarna ovan. Luft och eld i perfekt harmoni.', category: 'love' },
    'Oxen': { score: 50, description: 'Se Oxen + Tvillingarna ovan. Stabilitet möter förändring.', category: 'love' },
    'Tvillingarna': { score: 90, description: 'Två samtalsglada själar! Ni är som en podd som aldrig tar slut. Men vem lyssnar egentligen?', category: 'love' },
    'Kräftan': { score: 65, description: 'Tvillingarna pratar, Kräftan känner. Ni kan lära er att kommunicera på djupare nivå.', category: 'love' },
    'Lejonet': { score: 75, description: 'Sociala och charmiga! Ni är som en fest som aldrig tar slut. Roligt men energikrävande.', category: 'love' },
    'Jungfrun': { score: 60, description: 'Tvillingarna är flyktiga, Jungfrun är detaljerad. Det kan bli intressant om ni lär er att balansera.', category: 'love' },
    'Vågen': { score: 95, description: 'Luft och luft! Ni är som två diplomater som alltid hittar en lösning. Perfekt harmoni.', category: 'love' },
    'Skorpionen': { score: 70, description: 'Tvillingarna är ytliga, Skorpionen är djup. Ni kan lära er att gå djupare tillsammans.', category: 'love' },
    'Skytten': { score: 80, description: 'Nyfikenhet och äventyr! Ni är som två resenärer som aldrig kommer hem. Spännande!', category: 'love' },
    'Stenbocken': { score: 55, description: 'Tvillingarna är flexibla, Stenbocken är bestämd. Det kan funka om ni lär er att kompromissa.', category: 'love' },
    'Vattumannen': { score: 85, description: 'Innovation och kommunikation! Ni är som en tech-startup som aldrig sover. Framtidsorienterat.', category: 'love' },
    'Fiskarna': { score: 75, description: 'Tvillingarna tänker, Fiskarna känner. Ni kan lära er att balansera logik och intuition.', category: 'love' }
  }
  // ... fortsättning för alla stjärntecken
}

// Måne-kompatibilitet (känslor och behov)
export const lunarCompatibility: Record<string, Record<string, CompatibilityResult>> = {
  'Väduren': {
    'Väduren': { score: 75, description: 'Båda vill ha snabba känslor. Ni är som två sommarflirtar som aldrig blir vuxna.', category: 'love' },
    'Kräftan': { score: 60, description: 'Väduren är impulsiv, Kräftan är känslig. Det kan bli stormigt men passionerat.', category: 'love' },
    'Fiskarna': { score: 70, description: 'Väduren ger energi, Fiskarna ger djup. Ni kan lära er att balansera action och känslor.', category: 'love' }
  }
  // ... fortsättning
}

// Venus-Mars kompatibilitet (romantik och passion)
export const venusMarsCompatibility: Record<string, Record<string, CompatibilityResult>> = {
  'Väduren': {
    'Lejonet': { score: 95, description: 'Passion deluxe! Ni är som Bennifer innan de gifter sig. Starka viljor, ännu starkare dragning.', category: 'love' },
    'Skorpionen': { score: 89, description: 'Intensiv kemi! Ni är som en dålig idé som känns väldigt bra. Kan bli en episk kärlekshistoria.', category: 'love' },
    'Vågen': { score: 78, description: 'Charm och balans! Ni är som en romantisk komedi som faktiskt är rolig.', category: 'love' }
  }
  // ... fortsättning
}

// Merkurius-kompatibilitet (kommunikation)
export const mercuryCompatibility: Record<string, Record<string, CompatibilityResult>> = {
  'Tvillingarna': {
    'Stenbocken': { score: 55, description: 'Tvillingarna pratar snabbt, Stenbocken tänker långsamt. Det kan bli intressanta samtal.', category: 'general' },
    'Vattumannen': { score: 85, description: 'Innovation och kommunikation! Ni är som en tech-podd som aldrig tar slut.', category: 'general' }
  }
  // ... fortsättning
}

// Jupiter-kompatibilitet (värderingar och expansion)
export const jupiterCompatibility: Record<string, Record<string, CompatibilityResult>> = {
  'Skytten': {
    'Väduren': { score: 90, description: 'Äventyr och energi! Ni är som två backpackers som aldrig kommer hem.', category: 'general' },
    'Stenbocken': { score: 65, description: 'Skytten vill ut, Stenbocken vill bygga. Ni kan lära er att kombinera äventyr och struktur.', category: 'general' }
  }
  // ... fortsättning
}

// Saturnus-kompatibilitet (stabilitet och ansvar)
export const saturnCompatibility: Record<string, Record<string, CompatibilityResult>> = {
  'Stenbocken': {
    'Oxen': { score: 90, description: 'Stabilitet och ambition! Ni är som två företagsledare som bygger imperium tillsammans.', category: 'general' },
    'Vattumannen': { score: 70, description: 'Tradition möter innovation! Ni kan lära er att balansera gammalt och nytt.', category: 'general' }
  }
  // ... fortsättning
}

import { getBirthData } from './birth-data'

// Huvudfunktion för att beräkna total kompatibilitet
export function calculateAdvancedCompatibility(date1: string, date2: string) {
  const birthData1 = getBirthData(date1)
  const birthData2 = getBirthData(date2)

  // Klassisk kompatibilitet för alla planeter
  const sunScore = getClassicScore(birthData1.sun, birthData2.sun)
  const moonScore = getClassicScore(birthData1.moon, birthData2.moon)
  const venusMarsScore = getClassicScore(birthData1.venus, birthData2.venus)
  const mercuryScore = getClassicScore(birthData1.mercury, birthData2.mercury)
  const jupiterScore = getClassicScore(birthData1.jupiter, birthData2.jupiter)
  const saturnScore = getClassicScore(birthData1.saturn, birthData2.saturn)

  // Totalen som snitt av alla
  const totalScore = Math.round((sunScore + moonScore + venusMarsScore + mercuryScore + jupiterScore + saturnScore) / 6)

  return {
    total: totalScore,
    breakdown: {
      sun: sunScore,
      moon: moonScore,
      venusMars: venusMarsScore,
      mercury: mercuryScore,
      jupiter: jupiterScore,
      saturn: saturnScore
    },
    summary: getFunnyCompatibilitySummary(birthData1.sun, birthData2.sun, sunScore)
  }
}

// Klassisk kompatibilitet baserat på element och traditionella par
function getClassicScore(sign1: string, sign2: string): number {
  const elements: Record<string, string> = {
    'Väduren': 'Eld', 'Lejonet': 'Eld', 'Skytten': 'Eld',
    'Oxen': 'Jord', 'Jungfrun': 'Jord', 'Stenbocken': 'Jord',
    'Tvillingarna': 'Luft', 'Vågen': 'Luft', 'Vattumannen': 'Luft',
    'Kräftan': 'Vatten', 'Skorpionen': 'Vatten', 'Fiskarna': 'Vatten'
  }
  const element1 = elements[sign1]
  const element2 = elements[sign2]

  // Samma element = bäst
  if (element1 === element2) return 90
  // Eld + Luft eller Jord + Vatten = bra
  if ((element1 === 'Eld' && element2 === 'Luft') || (element1 === 'Luft' && element2 === 'Eld')) return 80
  if ((element1 === 'Jord' && element2 === 'Vatten') || (element1 === 'Vatten' && element2 === 'Jord')) return 80
  // Eld + Jord eller Luft + Vatten = ok
  if ((element1 === 'Eld' && element2 === 'Jord') || (element1 === 'Jord' && element2 === 'Eld')) return 65
  if ((element1 === 'Luft' && element2 === 'Vatten') || (element1 === 'Vatten' && element2 === 'Luft')) return 65
  // Annars: medel
  return 50
}

// Klassisk kompatibilitet baserat på element och traditionella par
function getClassicSunCompatibility(sign1: string, sign2: string): number {
  const elements: Record<string, string> = {
    'Väduren': 'Eld', 'Lejonet': 'Eld', 'Skytten': 'Eld',
    'Oxen': 'Jord', 'Jungfrun': 'Jord', 'Stenbocken': 'Jord',
    'Tvillingarna': 'Luft', 'Vågen': 'Luft', 'Vattumannen': 'Luft',
    'Kräftan': 'Vatten', 'Skorpionen': 'Vatten', 'Fiskarna': 'Vatten'
  }
  const element1 = elements[sign1]
  const element2 = elements[sign2]

  // Samma element = bäst
  if (element1 === element2) return 90
  // Eld + Luft eller Jord + Vatten = bra
  if ((element1 === 'Eld' && element2 === 'Luft') || (element1 === 'Luft' && element2 === 'Eld')) return 80
  if ((element1 === 'Jord' && element2 === 'Vatten') || (element1 === 'Vatten' && element2 === 'Jord')) return 80
  // Eld + Jord eller Luft + Vatten = ok
  if ((element1 === 'Eld' && element2 === 'Jord') || (element1 === 'Jord' && element2 === 'Eld')) return 65
  if ((element1 === 'Luft' && element2 === 'Vatten') || (element1 === 'Vatten' && element2 === 'Luft')) return 65
  // Annars: medel
  return 50
}

// Extremt komisk analys med popkultur och kändisar
function getFunnyCompatibilitySummary(sign1: string, sign2: string, score: number): string {
  const pairs = [
    ['Väduren', 'Lejonet', 'Skytten'],
    ['Oxen', 'Jungfrun', 'Stenbocken'],
    ['Tvillingarna', 'Vågen', 'Vattumannen'],
    ['Kräftan', 'Skorpionen', 'Fiskarna']
  ]
  // Popkultur/kändisreferenser
  const popRefs = [
    'Som Beyoncé och Jay-Z på en bra dag',
    'Som Harry Potter och Hermione – magi, men ibland drama',
    'Som Kim Kardashian och Pete Davidson – oväntat men underhållande',
    'Som Zlatan och en mikrofon – alltid show',
    'Som Greta Thunberg och Elon Musk – olika världar, men kan förändra allt',
    'Som Barbie och Ken – plastigt men ikoniskt',
    'Som Shrek och Fiona – grönt, men funkar',
    'Som Taylor Swift och en break-up låt – passion och känslor',
    'Som PewDiePie och Minecraft – oväntat beroendeframkallande',
    'Som Ed Sheeran och en gitarr – harmoniskt, ibland lite för snällt'
  ]
  // Välj referens baserat på score
  let ref = ''
  if (score >= 90) ref = popRefs[0]
  else if (score >= 80) ref = popRefs[1]
  else if (score >= 70) ref = popRefs[2]
  else if (score >= 65) ref = popRefs[3]
  else ref = popRefs[4]

  // Extra skämt om vissa par
  if ((sign1 === 'Väduren' && sign2 === 'Oxen') || (sign1 === 'Oxen' && sign2 === 'Väduren')) {
    ref = 'Som Usain Bolt och en ko – någon vill springa, någon vill stå still.'
  }
  if ((sign1 === 'Tvillingarna' && sign2 === 'Fiskarna') || (sign1 === 'Fiskarna' && sign2 === 'Tvillingarna')) {
    ref = 'Som Einstein och en astrolog – logik möter magi.'
  }
  if ((sign1 === 'Lejonet' && sign2 === 'Skorpionen') || (sign1 === 'Skorpionen' && sign2 === 'Lejonet')) {
    ref = 'Som Lady Gaga och Madonna – drama deluxe!'
  }

  return `${ref} (${score}%)`
}

// Hjälpfunktion för att få kompatibilitetsscore
function getCompatibilityScore(
  compatibilityData: Record<string, Record<string, CompatibilityResult>>,
  sign1: string,
  sign2: string
): number {
  // Försök hitta exakt match
  if (compatibilityData[sign1]?.[sign2]) {
    return compatibilityData[sign1][sign2].score
  }
  
  // Försök hitta omvänd match
  if (compatibilityData[sign2]?.[sign1]) {
    return compatibilityData[sign2][sign1].score
  }
  
  // Fallback: baserat på element-kompatibilitet
  return getElementBasedScore(sign1, sign2)
}

// Venus-Mars kompatibilitet (kombinerar Venus och Mars)
function getVenusMarsScore(birthData1: any, birthData2: any): number {
  // Försök hitta Venus-Mars match
  if (venusMarsCompatibility[birthData1.sun]?.[birthData2.sun]) {
    return venusMarsCompatibility[birthData1.sun][birthData2.sun].score
  }
  
  // Fallback: genomsnitt av Venus och Mars individuellt
  const venusScore = getCompatibilityScore(venusMarsCompatibility, birthData1.venus, birthData2.venus)
  const marsScore = getCompatibilityScore(venusMarsCompatibility, birthData1.mars, birthData2.mars)
  return Math.round((venusScore + marsScore) / 2)
}

// Element-baserad fallback score
function getElementBasedScore(sign1: string, sign2: string): number {
  const elements: Record<string, string> = {
    'Väduren': 'Eld', 'Lejonet': 'Eld', 'Skytten': 'Eld',
    'Oxen': 'Jord', 'Jungfrun': 'Jord', 'Stenbocken': 'Jord',
    'Tvillingarna': 'Luft', 'Vågen': 'Luft', 'Vattumannen': 'Luft',
    'Kräftan': 'Vatten', 'Skorpionen': 'Vatten', 'Fiskarna': 'Vatten'
  }
  
  const element1 = elements[sign1] || 'Luft'
  const element2 = elements[sign2] || 'Luft'
  
  // Element-kompatibilitet
  if (element1 === element2) return 85 // Samma element
  if ((element1 === 'Eld' && element2 === 'Luft') || (element1 === 'Luft' && element2 === 'Eld')) return 80
  if ((element1 === 'Jord' && element2 === 'Vatten') || (element1 === 'Vatten' && element2 === 'Jord')) return 80
  if ((element1 === 'Eld' && element2 === 'Jord') || (element1 === 'Jord' && element2 === 'Eld')) return 60
  if ((element1 === 'Luft' && element2 === 'Vatten') || (element1 === 'Vatten' && element2 === 'Luft')) return 60
  
  return 70 // Standard fallback
}

function getCompatibilitySummary(score: number): string {
  if (score >= 90) return "Fantastisk kemi! Ni är som gjorda för varandra. Tänk Brangelina innan de blev Brangelina."
  if (score >= 80) return "Mycket bra match! Ni kommer att trivas bra tillsammans. Som en bra romantisk komedi."
  if (score >= 70) return "Bra kompatibilitet! Ni har potential för något speciellt. Som en intressant podd."
  if (score >= 60) return "Okej match. Ni kan lära känna varandra bättre. Som en första dejt som kan bli något."
  return "Kanske inte den bästa matchen, men ge det en chans! Som en reality-show som är så dålig att den blir bra."
} 