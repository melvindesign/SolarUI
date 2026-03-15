import FinalCtaSection from './components/FinalCtaSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OpenSourceSection from './components/OpenSourceSection'
import ShowcaseSection from './components/ShowcaseSection'
import WhySolarSection from './components/WhySolarSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhySolarSection />
        <ShowcaseSection />
        <OpenSourceSection />
        <FinalCtaSection />
      </main>
      <FooterSection />
    </>
  )
}
