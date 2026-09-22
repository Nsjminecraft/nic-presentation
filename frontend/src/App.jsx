import Sidebar from './components/Sidebar'
import ProgressBar from './components/ProgressBar'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useActiveSection } from './hooks/useActiveSection'

import Hero from './sections/Hero'
import WhatIsNic from './sections/WhatIsNic'
import Types from './sections/Types'
import Standards from './sections/Standards'
import HowItWorks from './sections/HowItWorks'
import Components from './sections/Components'
import Specs from './sections/Specs'
import Manufacturers from './sections/Manufacturers'
import Future from './sections/Future'
import FunFacts from './sections/FunFacts'
import Bibliography from './sections/Bibliography'
import Quiz from './sections/Quiz'

const sectionIds = [
  'hero', 'what-is-nic', 'types', 'standards', 'how-it-works',
  'components', 'specs', 'manufacturers', 'future', 'fun-facts',
  'bibliography', 'quiz',
]

export default function App() {
  const progress = useScrollProgress()
  useActiveSection(sectionIds)

  return (
    <div className="relative">
      <ProgressBar progress={progress} />
      <Sidebar />

      <main className="ml-[240px] transition-all duration-300">
        <Hero />
        <WhatIsNic />
        <Types />
        <Standards />
        <HowItWorks />
        <Components />
        <Specs />
        <Manufacturers />
        <Future />
        <FunFacts />
        <Bibliography />
        <Quiz />
      </main>
    </div>
  )
}
