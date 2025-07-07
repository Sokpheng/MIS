import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"

export function Blog() {
  const blogPosts = [
    {
      id: "math-powers-gaming",
      title: "How Math Powers Modern Gaming: From Graphics to Game Logic",
      excerpt:
        "Explore how mathematical concepts like vectors, matrices, probability, and algorithms are used in game development—from rendering 3D worlds to designing fair loot systems.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Mathematics", "Game Development", "Programming", "3D Graphics"],
      image: "https://cdnpro.eraspace.com/media/wysiwyg/artikel/Tahun_2023/Juli/turnbasedgame-1.jpg",
      gradient: "from-red-700 to-red-800",
    },
    {
      id: "first-laravel-project",
      title: "What I Learned Building My First Laravel Project as a Student Developer",
      excerpt:
        "Share your experience building a Laravel project, what problems you faced (like routing, models, relationships), and what advice you'd give to other students just starting.",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Laravel", "PHP", "Student Life", "Web Development"],
      image: "https://developerhowto.com/wp-content/uploads/2021/01/laravel8-starter-home.png",
      gradient: "from-red-800 to-red-900",
    },
    {
      id: "gamer-skills-tech-careers",
      title: "The Hidden Skills Gamers Bring to Tech Careers",
      excerpt:
        "Discuss how playing games helps develop transferable skills like problem-solving, reaction time, resource management, and teamwork—and how they apply in tech fields like software development or cybersecurity.",
      date: "2024-01-01",
      readTime: "10 min read",
      tags: ["Gaming", "Career Development", "Soft Skills", "Technology"],
      image: "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2022/11/GettyImages-1385176855.jpg",
      gradient: "from-red-600 to-red-700",
    },
    {
      id: "learning-to-code-struggles",
      title: "Why Learning to Code Feels Hard—And How to Push Through It",
      excerpt:
        "Break down common struggles like imposter syndrome, debugging frustration, and tutorial hell. Share personal tips or resources that helped you improve.",
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["Learning", "Programming", "Motivation", "Beginner Tips"],
      image: "https://www.rasmussen.edu/images/rasmussenlibraries/blogs/school-of-technology/2020/learn-to-code.jpg",
      gradient: "from-red-900 to-gray-800",
    },
    {
      id: "backend-vs-frontend",
      title: "Backend vs. Frontend: Which Side of Code Should You Choose?",
      excerpt:
        "Compare both roles with real examples, like setting up APIs (backend) vs. designing user interfaces (frontend). Help beginners decide what path fits them best.",
      date: "2023-12-15",
      readTime: "12 min read",
      tags: ["Backend", "Frontend", "Career Choice", "Web Development"],
      image:
        "https://www.oneclickitsolution.com/blog/wp-content/uploads/2021/08/Frontend-vs.-Backend-Developers-What-is-the-Key-Differences.png",
      gradient: "from-red-500 to-red-600",
    },
    {
      id: "laravel-mysql-guide",
      title: "How I Built a Simple Web App with Laravel and MySQL: A Beginner's Guide",
      excerpt:
        "Walk through one of your Laravel projects step-by-step, including database setup, routing, views, and models. Make it helpful for others trying to build their first app.",
      date: "2023-12-10",
      readTime: "9 min read",
      tags: ["Laravel", "MySQL", "Tutorial", "Database"],
      image: "https://i.ytimg.com/vi/LpB2GCeFjao/maxresdefault.jpg",
      gradient: "from-red-700 to-red-800",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 via-transparent to-gray-100/30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 via-gray-800 to-red-900 bg-clip-text text-transparent">
            Blog
          </h2>
          <div className="flex justify-center mb-6">
            <BookOpen className="h-6 w-6 text-red-700 animate-pulse" />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I write about web development, technology trends, and share insights from my experience building digital
            products with passion and creativity! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`}></div>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Sparkles className="h-5 w-5 text-white animate-pulse" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
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
                <CardTitle
                  className={`text-xl group-hover:bg-gradient-to-r group-hover:${post.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-gray-800`}
                >
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`text-xs bg-gradient-to-r ${
                        tagIndex % 4 === 0
                          ? "from-red-700/20 to-red-800/20 border-red-600/50 text-red-700"
                          : tagIndex % 4 === 1
                            ? "from-red-600/20 to-red-700/20 border-red-500/50 text-red-600"
                            : tagIndex % 4 === 2
                              ? "from-red-800/20 to-red-900/20 border-red-700/50 text-red-800"
                              : "from-red-500/20 to-red-600/20 border-red-400/50 text-red-500"
                      } border hover:scale-105 transition-transform duration-200`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className={`p-0 h-auto font-medium text-red-700 hover:bg-gradient-to-r hover:${post.gradient} hover:bg-clip-text hover:text-transparent transition-all duration-300`}
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
