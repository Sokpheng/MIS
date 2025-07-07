import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Globe, Star } from "lucide-react"

export function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "MongoDB",
    "Mysql",
    "PostgreSQL",
    "Laravel",
    "C/C++",
    "Using ChatGPT"

  ]

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies.",
      gradient: "from-red-700 to-red-800",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Video Edition",
      description: "Created Totorial Video.",
      gradient: "from-red-800 to-red-900",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Data Management",
      description: "Prepare Data for some shop.",
      gradient: "from-red-600 to-red-700",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full Stack",
      description: "End-to-end development from database design to frontend implementation.",
      gradient: "from-red-900 to-gray-800",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 via-gray-800 to-red-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex justify-center mb-6">
            <Star className="h-6 w-6 text-red-700 animate-pulse" />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 5 years of experience in creating digital solutions that
            make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Story</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Hello! I'm Sokpheng, a full-stack developer based in Cambodia. My journey into programming started
                during my computer science studies, where I discovered my passion for creating digital experiences that
                solve real-world problems.
              </p>
              <p>
                Over the years, I've had the privilege of working with startups, agencies, and established companies,
                helping them bring their ideas to life through code. I specialize in modern web technologies and have a
                keen eye for design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community involvement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`text-sm px-3 py-1 bg-gradient-to-r ${
                    index % 4 === 0
                      ? "from-red-700 to-red-800"
                      : index % 4 === 1
                        ? "from-red-600 to-red-700"
                        : index % 4 === 2
                          ? "from-red-800 to-red-900"
                          : "from-red-500 to-red-600"
                  } text-white border-0 hover:scale-105 transition-transform duration-200`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-red-800 to-gray-800 bg-clip-text text-transparent">
            What I Do
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-300"
              >
                <CardContent className="pt-6">
                  <div
                    className={`text-white mb-4 flex justify-center p-3 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-red-800">{service.title}</h4>
                  <p className="text-sm text-red-700/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
