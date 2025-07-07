import { Heart, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-700/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-lg font-semibold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Sokpheng Phon
            </div>
            <div className="text-sm text-blue-200/80">Full Stack Developer & Back-end Developer</div>
          </div>
          <div className="text-sm text-blue-200/80 text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-1">
              © 2024 Sokpheng Phon. I am build differece.
            </p>
            <p>Built with Next.js and Tailwind CSS ✨</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
