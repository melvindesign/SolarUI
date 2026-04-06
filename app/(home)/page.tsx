import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ShowcaseSection from './components/ShowcaseSection'
import TechLogosSection from './components/TechLogosSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <TechLogosSection />
      </main>
      <FooterSection />
    </>
  )
}
