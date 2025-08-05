'use client'
// Datadrivna komiska texter för varje planet och score-nivå
export const funnyPlanetTexts: Record<string, Record<string, string>> = {
  sun: {
    '90': 'Sol: Som den soldyrkare du är planerar du alltid nästa semester, medan din dejt plötsligt försvinner för att starta ett spontant beachparty med lokalbefolkningen. Ni är båda lika dramatiska som Lejonet på en karaoke-kväll. Och ändå, när ni möts, blir det eldigt och alla undrar om ni är med i en dokusåpa.',
    '80': 'Sol: Du försöker övertyga din dejt om att Väduren är bäst, men hen har redan bokat biljett till Oxens ostprovning. Ni har lika mycket energi som en Skorpion på speed, men ibland känns det som att ni är med i en svensk version av "Love Island".',
    '70': 'Sol: Som Tvillingarna på midsommar – du vill dansa små grodorna, din dejt vill diskutera existentialism med en Jungfru. Ni är som två stjärntecken i ett escape room, och ingen hittar ut.',
    '0': 'Sol: Du är Lejonet som vill ha all uppmärksamhet, men din dejt är Fiskarna som hellre pratar med bartendern. Ni är som Greta Thunberg och Elon Musk på en klimatkonferens – olika världar, men ändå fascinerande.'
  },
  moon: {
    '90': 'Måne: Ni har känslor djupare än Kräftans kylskåp efter midsommar. Din dejt skriver poesi om er relation och du gråter till "Sagan om ringen". Ni är som två Jungfrur som försöker organisera en överraskningsfest – det slutar med att ni båda städar.',
    '80': 'Måne: Du är Oxen som vill mysa, din dejt är Vattumannen som vill diskutera rymden. Ni är som Phoebe och Joey i Friends, fast med mer sill och mindre gitarr. Ingen förstår er, men ni har kul.',
    '70': 'Måne: Som Skorpionen på en blinddate – du analyserar varje ord, din dejt googlar "hur man flyr en kräfta". Ni är som Edward och Bella i Twilight, fast med mer regn och mindre vampyrer.',
    '0': 'Måne: Du är Vågen som vill ha harmoni, din dejt är Stenbocken som vill ha Excel-ark. Ni är som en svensk midsommar – känslor, regn och någon gråter över potatissalladen.'
  },
  venusMars: {
    '90': 'Venus/Mars: Ni har mer passion än en Oxen på chokladprovning. Din dejt är Lejonet som vill ha drama, du är Väduren som vill ha action. Tillsammans är ni som Brad Pitt och Angelina Jolie, fast med mer IKEA-möbler och mindre paparazzi.',
    '80': 'Venus/Mars: Du är Vågen som vill ha romantik, din dejt är Skorpionen som vill ha mystik. Ni är som Barbie och Ken, fast Ken har existentialistisk kris och Barbie har startat podd om astrologi.',
    '70': 'Venus/Mars: Som Shrek och Fiona – du är grön av avund, din dejt är grön av passion. Ni är som Taylor Swift och en break-up låt, fast på svenska.',
    '0': 'Venus/Mars: Du är Jungfrun som vill ha ordning, din dejt är Fiskarna som vill ha kaos. Ni är som två stjärntecken på Tinder – matchar ibland, men oftast swipear ni vidare.'
  },
  mercury: {
    '90': 'Merkurius: Ni kommunicerar bättre än Tvillingarna på Twitter. Din dejt är Vattumannen som skickar memes, du är Oxen som svarar med GIFs. Tillsammans är ni som PewDiePie och Minecraft – oväntat beroendeframkallande och ingen fattar varför.',
    '80': 'Merkurius: Du är Lejonet som vill prata om dig själv, din dejt är Jungfrun som vill prata om dig. Ni är som Ed Sheeran och en gitarr, fast med mer snack om vädret och mindre sång.',
    '70': 'Merkurius: Som Lady Gaga och Madonna – du är dramatisk, din dejt är ännu mer dramatisk. Ni är som två stjärntecken i en podd om astrologi, och ingen lyssnar.',
    '0': 'Merkurius: Du är Stenbocken som vill ha struktur, din dejt är Fiskarna som vill ha kaos. Ni är som Einstein och en astrolog – logik möter magi och ingen förstår någonting.'
  },
  jupiter: {
    '90': 'Jupiter: Ni har större visioner än Skytten på en backpacker-resa. Din dejt är Lejonet som vill starta företag, du är Vågen som vill starta bokcirkel. Tillsammans är ni som Elon Musk och rymden – stora planer, men ingen vet vad som händer.',
    '80': 'Jupiter: Du är Oxen som vill ha trygghet, din dejt är Vattumannen som vill ha äventyr. Ni är som Oprah och giveaways – alla får något, ingen vet vad. Och någon får en get.',
    '70': 'Jupiter: Som Zlatan och en mikrofon – du pratar, din dejt applåderar. Ni är som två stjärntecken på en reality-show, och ingen vill bli utröstad.',
    '0': 'Jupiter: Du är Skorpionen som vill ha kontroll, din dejt är Fiskarna som vill ha frihet. Ni är som en svensk reality-show – så dåligt att det blir bra, och alla vill se mer.'
  },
  saturn: {
    '90': 'Saturnus: Ni är stabila som Stenbocken på ett bokslut. Din dejt är Jungfrun som har med sig extranyckel till cykeln, du är Oxen som har med sig extranyckel till hjärtat. Tillsammans är ni som IKEA och manualer – stabilt, men någon tappar skruvarna.',
    '80': 'Saturnus: Du är Vågen som vill ha balans, din dejt är Lejonet som vill ha fest. Ni är som Morgan Freeman och visdom – tryggt och långsamt, men ibland glömmer ni varför ni träffades.',
    '70': 'Saturnus: Som en svensk chef – du vill ha ordning, din dejt vill ha fika. Ni är som två stjärntecken på ett personalmöte, och ingen vet vad som händer.',
    '0': 'Saturnus: Du är Fiskarna som glömmer bort tiden, din dejt är Väduren som glömmer bort dig. Ni är som en gammal Volvo – går alltid, men ingen vet varför, och någon har glömt besiktningen.'
  }
}

// Funktion för att hämta text baserat på planet och score
import stjarnteckenPlanetMatchningar from '@/lib/stjarntecken_planet_matchningar.json'
// Typ för nya JSON-strukturen
type StjarnteckenPlanetMatchningar = {
  [planet: string]: {
    [signCombo: string]: string
  }
}

const stjarnteckenPlanetMatchningarTyped: StjarnteckenPlanetMatchningar = stjarnteckenPlanetMatchningar as StjarnteckenPlanetMatchningar

// Funktion för att hämta text baserat på planet och båda stjärntecken
export function getFunnyPlanetText(planet: string, _score: number, sign1: string, sign2: string): string {
  // Map English planet keys to Swedish JSON keys
  const planetKeyMap: Record<string, string> = {
    sun: "Sol",
    moon: "Måne",
    mercury: "Merkurius",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturnus",
    uranus: "Uranus",
    neptune: "Neptunus",
    pluto: "Pluto"
  };
  const planetJsonKey = planetKeyMap[planet] || planet;
  const comboKey = `${sign1}_${sign2}`;
  const planetTexts = stjarnteckenPlanetMatchningarTyped[planetJsonKey];
  if (!planetTexts) return 'Ingen analys finns för denna planet.';
  return planetTexts[comboKey] || 'Ingen analys finns för denna kombination ännu.';
}

import { motion } from 'framer-motion'
import { Star, Sun, Moon, Heart, MessageCircle, Globe, Shield } from 'lucide-react'
import { getBirthData } from '@/lib/birth-data'

interface DetailedResultProps {
  date1: string
  date2: string
  result: {
    total: number
    breakdown: {
      sun: number
      moon: number
      venusMars: number
      mercury: number
      jupiter: number
      saturn: number
    }
    summary: string
  }
}

const planetIcons = {
  sun: null,
  moon: null,
  venusMars: null,
  mercury: null,
  jupiter: null,
  saturn: null
}

const planetNames = {
  sun: 'Sol',
  moon: 'Måne',
  venusMars: 'Venus-Mars',
  mercury: 'Merkurius',
  jupiter: 'Jupiter',
  saturn: 'Saturnus'
}

const planetDescriptions = {
  sun: 'Kärna och vilja',
  moon: 'Känslor och behov',
  venusMars: 'Romantik och passion',
  mercury: 'Kommunikation',
  jupiter: 'Värderingar och expansion',
  saturn: 'Stabilitet och ansvar'
}

export default function DetailedResult({ date1, date2, result }: DetailedResultProps) {
  const birthData1 = getBirthData(date1)
  const birthData2 = getBirthData(date2)
  // Hämta huvudanalys från Sol-planetens text och ta bort prefixet 'Sol:' om det finns
  let mainFunnyText = getFunnyPlanetText('sun', result.breakdown.sun, birthData1.sun, birthData2.sun)
  if (mainFunnyText.startsWith('Sol:')) {
    mainFunnyText = mainFunnyText.replace(/^Sol:\s*/, '')
  }
  return (
    <div className="flex flex-col items-center min-h-[140px] w-[340px] mx-auto p-6 bg-white rounded-xl shadow relative">
      {/* Magiska stjärnor och trollkarlar i bakgrunden */}
      <span className="absolute top-2 left-4 text-2xl select-none">🧙‍♂️✨</span>
      <span className="absolute top-2 right-4 text-2xl select-none">🌟🔮</span>
      <span className="absolute bottom-2 left-8 text-xl select-none">🪄</span>
      <span className="absolute bottom-2 right-8 text-xl select-none">🌠</span>
      <p className="text-gray-700 text-lg font-medium text-center">
        <span className="text-2xl mr-2">✨</span>{mainFunnyText}<span className="text-2xl ml-2">🔮</span>
      </p>

      {/* Planet Breakdown (skip Sol, already shown above) */}
      <div className="space-y-4">
        {/* Visa bara planeter med score > 0 och hoppa över 'sun' */}
        {Object.entries(result.breakdown)
          .filter(([planet, score]) => score > 0 && planet !== 'sun')
          .map(([planet, score]) => {
            // Use zodiac animal emoji for planet name
            let emoji = '';
            if (planet === 'moon') emoji = '';
            else if (planet === 'sun') emoji = '☀️';
            else if (planet === 'venusMars') emoji = '💘';
            else if (planet === 'mercury') emoji = '🦋';
            else if (planet === 'jupiter') emoji = '🦁';
            else if (planet === 'saturn') emoji = '🐢';
            const name = planetNames[planet as keyof typeof planetNames];
            const description = planetDescriptions[planet as keyof typeof planetDescriptions];
            const funnyText = getFunnyPlanetText(planet, score, birthData1.sun, birthData2.sun);
            return (
              <motion.div
                key={planet}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 rounded-lg p-4 relative"
              >
                <span className="absolute top-1 right-2 text-xl select-none">✨</span>
                <span className="absolute bottom-1 left-2 text-xl select-none">🧙‍♂️</span>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {emoji && <span className="text-2xl">{emoji}</span>}
                    <span className="font-medium text-gray-900">{name}</span>
                    <span className="ml-1 text-lg">🌟</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">{score}% <span className="ml-1">🪄</span></span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{description} <span className="ml-1">🔮</span></p>
                <p className="text-sm text-pink-600 mb-2 font-bold">{funnyText} <span className="ml-1">✨</span></p>
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  )
}

function getZodiacEmoji(sign: string): string {
  const emojis: Record<string, string> = {
    'Väduren': '♈',
    'Oxen': '♉',
    'Tvillingarna': '♊',
    'Kräftan': '♋',
    'Lejonet': '♌',
    'Jungfrun': '♍',
    'Vågen': '♎',
    'Skorpionen': '♏',
    'Skytten': '♐',
    'Stenbocken': '♑',
    'Vattumannen': '♒',
    'Fiskarna': '♓'
  }
  return emojis[sign] || '⭐'
}