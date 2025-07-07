import { Navigation } from "@/components/navigation"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-100 to-gray-800">
      <Navigation />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
