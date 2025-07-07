import { Navigation } from "@/components/navigation"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-100 to-gray-800">
      <Navigation />
      <main className="pt-20">
        <Experience />
      </main>
      <Footer />
    </div>
  )
}
