"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-50 h-50 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl animate-glow relative border-4 border-red-800/30">
            <img src="/images/profile.png" alt="Sokpheng Phon Profile" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-800/20 via-transparent to-red-900/20"></div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-red-800 via-gray-700 to-red-900 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            Sokpheng Phon
          </h1>
          <p className="text-2xl sm:text-3xl text-red-800 mb-6 font-semibold">Computer Science Of Paragon University</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about creating mystical digital experiences that blend technology with artistry. I bring ideas to
            life through code and design, weaving magic into every project ✨
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            View My Work
          </Button>
          
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button
            variant="ghost"
            size="icon"
            className="text-red-800 hover:text-white hover:bg-red-800/80 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-800 hover:text-white hover:bg-red-900/80 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-800 hover:text-white hover:bg-red-700/80 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        <div className="animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="text-red-800 hover:text-red-900 rounded-full"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
