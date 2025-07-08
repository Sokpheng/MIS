import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowLeft, Share2, Heart, BookOpen } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  post: {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    readTime: string
    tags: string[]
    image: string
    gradient: string
  }
}

export function BlogPost({ post }: BlogPostProps) {
  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      // Headers
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-800">
            {line.substring(2)}
          </h1>
        )
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
            {line.substring(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-800">
            {line.substring(4)}
          </h3>
        )
      }
      if (line.startsWith("#### ")) {
        return (
          <h4 key={index} className="text-lg font-semibold mt-3 mb-2 text-gray-800">
            {line.substring(5)}
          </h4>
        )
      }

      // Bold text
      if (line.includes("**")) {
        const parts = line.split("**")
        return (
          <p key={index} className="mb-3 text-gray-700 leading-relaxed">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="font-semibold text-red-800">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
        )
      }

      // Italic text
      if (line.includes("*") && !line.includes("**")) {
        const parts = line.split("*")
        return (
          <p key={index} className="mb-3 text-gray-700 leading-relaxed">
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <em key={i} className="italic text-red-700">
                  {part}
                </em>
              ) : (
                part
              ),
            )}
          </p>
        )
      }

      // List items
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="mb-1 text-gray-700 ml-4">
            {line.substring(2)}
          </li>
        )
      }

      // Empty lines
      if (line.trim() === "") {
        return <br key={index} />
      }

      // Regular paragraphs
      return (
        <p key={index} className="mb-3 text-gray-700 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 via-transparent to-gray-100/30"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="text-red-800 hover:text-red-900 hover:bg-red-50 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="aspect-video overflow-hidden rounded-2xl mb-8 relative shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`}></div>
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4">
            <BookOpen className="h-8 w-8 text-white animate-pulse" />
          </div>
        </div>

        {/* Article Header */}
        <Card className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <h1
              className={`text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}
            >
              {post.title}
            </h1>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`text-xs bg-gradient-to-r ${
                    index % 4 === 0
                      ? "from-red-700/20 to-red-800/20 border-red-600/50 text-red-700"
                      : index % 4 === 1
                        ? "from-red-600/20 to-red-700/20 border-red-500/50 text-red-600"
                        : index % 4 === 2
                          ? "from-red-800/20 to-red-900/20 border-red-700/50 text-red-800"
                          : "from-red-500/20 to-red-600/20 border-red-400/50 text-red-500"
                  } hover:scale-105 transition-transform duration-200`}
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all duration-300 bg-transparent"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-all duration-300 bg-transparent"
              >
                <Heart className="mr-2 h-4 w-4" />
                Like
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <Card className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">{renderContent(post.content)}</div>
          </CardContent>
        </Card>

        {/* Author Section */}
        <Card className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 shadow-lg mt-8">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-red-800/30">
                <img src="/images/profile.png" alt="Sokpheng Phon" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Sokpheng Phon</h3>
                <p className="text-gray-600">Full Stack Developer & Student</p>
                <p className="text-sm text-gray-500 mt-1">
                  Passionate about web development, gaming, and sharing knowledge with fellow developers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
