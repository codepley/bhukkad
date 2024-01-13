import AppPreview from "./components/AppPreview"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Screen from "./components/Screen"
import Screen2 from "./components/Screen2"


function App() {

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Hero />
      <AppPreview />
      <Screen />
      <Screen2 />
      <Screen />
      <Download />
      <Footer />
    </div>
  )
}

export default App
