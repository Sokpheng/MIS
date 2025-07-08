import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Star, Trophy, ExternalLink, Eye, Code, Palette } from "lucide-react"

export function Experience() {
  const caseStudies = [
    {
      title: "Hi-Fi Prototype",
      description:
        "A high-fidelity prototype created to demonstrate my growing skills in modern UI/UX design. As a student looking for remote opportunities, this project highlights my ability to design professional, user-centered interfaces while gaining real-world experience and building a strong portfolio to support future career growth.",
      technologies: ["Figma", "Prototyping", "UI/UX Design", "User Research", "Wireframing"],
      features: [
        "Interactive prototype with multiple user flows",
        "Responsive design for mobile and desktop",
        "User-centered interface design",
        "Professional job search platform concept",
        "Complete user journey mapping",
      ],
      image: "/images/hi-fi-prototype.png",
      link: "https://www.figma.com/design/0s6B4XNOYd9I3FJKx2UmE4/Sokpheng_Phon_High-Fi?node-id=13-36&t=Ns8M2x3jCfFyEJop-1",
      type: "Design",
      gradient: "from-red-600 to-red-700",
    },
    {
      title: "My Process",
      description:
        "Comprehensive UX process documentation showcasing systematic approach to user experience design. This project demonstrates my methodology for user research, journey mapping, and iterative design processes using various evaluation frameworks and storyboarding techniques.",
      technologies: ["Figma", "User Research", "Process Documentation", "UX Strategy", "Journey Mapping"],
      features: [
        "Multi-hat evaluation framework implementation",
        "Detailed user journey mapping and analysis",
        "Step-by-step UX storyboarding guide",
        "Solution ideation and validation process",
        "Comprehensive process documentation",
      ],
      image: "/images/my-process.png",
      link: "https://www.figma.com/board/uyv32qjX2B9s5KRo6szktd/Sokpheng_Selecting_UserJourney?node-id=0-1&t=pmxm9fJmbEMoHhXr-1",
      type: "Process",
      gradient: "from-red-700 to-red-800",
    },
  ]

  const experiences = [
    {
      title: "Data Management",
      company: "Q-Or",
      location: "Phnom Penh, Cambodia",
      period: "2024 - 2025",
      description:
        "Responsible for organizing, maintaining, and securing company data to support operational efficiency and decision-making. Tasks include database management, data entry verification, report generation, and collaborating with teams to ensure data accuracy and consistency across platforms. Also involved in improving data workflows and implementing best practices for data storage and retrieval.",
      technologies: ["Excel", "GoogleSeet", "GoogleDrive", "MongoDB"],
      gradient: "from-red-700 to-red-800",
    },
    {
      title: "Journoir Development",
      company: "Q-Or",
      location: "Phnom Penh, Cambodia",
      period: "2025 - Present",
      description:
        "Contributed to the design and development of the Journoir platform, focusing on feature implementation, backend integration, and user experience optimization. Worked with cross-functional teams to build scalable web solutions, troubleshoot issues, and enhance system performance. Participated in code reviews, testing, and iterative improvements to meet product and user requirements.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
      gradient: "from-red-700 to-red-800",
    },
    {
      title: "Video Editor",
      company: ".Me.",
      location: "Home",
      period: "2020 - 2025",
      description:
        "Edited and produced a variety of video content including vlogs, short films, promotional videos, and social media clips. Proficient in using editing software such as Adobe Premiere Pro, After Effects, and DaVinci Resolve to create visually engaging content. Responsible for color grading, sound design, transitions, and ensuring storytelling flow. Collaborated with clients and team members remotely to meet creative goals and deadlines.",
      technologies: ["Canva", "Pental Clip"],
      gradient: "from-red-800 to-red-900",
    },
    {
      title: "Backend Developer",
      company: "School Project",
      location: "School, Home, Coffee",
      period: "2024-2025",
      description:
        "Designed and developed backend systems for academic projects using technologies such as PHP (Laravel), MySQL, and RESTful APIs. Responsible for database design, server-side logic, authentication, and integrating third-party services. Collaborated with front-end developers to ensure smooth data flow and overall functionality. Focused on writing clean, maintainable code and applying version control using Git.",
      technologies: ["JavaScript", "Vue.js", "CSS3", "HTML5", "Firebase"],
      gradient: "from-red-600 to-red-700",
    },
  ]

  const education = [
    {
      degree: "Computer Science (Current)",
      school: "Paragon University",
      period: "2023 - 2025",
      description: "Focused on software engineering, algorithms, and database systems.",
      gradient: "from-red-700 to-red-800",
      image: "/images/paragon-university.png",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 via-transparent to-gray-100/30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 via-gray-800 to-red-900 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="flex justify-center mb-6">
            <Trophy className="h-6 w-6 text-red-700 animate-pulse" />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my career in technology.
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800 flex items-center">
            <Palette className="mr-3 h-8 w-8 text-red-700" />
            Case Studies
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-300 overflow-hidden group"
              >
                {/* Case Study Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800 border-0">
                      {study.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    {study.type === "Design" ? (
                      <Eye className="h-6 w-6 text-white" />
                    ) : (
                      <Code className="h-6 w-6 text-white" />
                    )}
                  </div>
                </div>

                <CardHeader>
                  <div className={`w-full h-1 bg-gradient-to-r ${study.gradient} rounded-full mb-4`}></div>
                  <CardTitle className="text-2xl text-gray-800 flex items-center justify-between">
                    {study.title}
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-red-700 hover:text-red-800 hover:bg-red-50"
                    >
                      <a href={study.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">{study.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {study.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs bg-gradient-to-r ${
                          techIndex % 4 === 0
                            ? "from-red-700/20 to-red-800/20 border-red-600/50 text-red-700"
                            : techIndex % 4 === 1
                              ? "from-red-600/20 to-red-700/20 border-red-500/50 text-red-600"
                              : techIndex % 4 === 2
                                ? "from-red-800/20 to-red-900/20 border-red-700/50 text-red-800"
                                : "from-red-500/20 to-red-600/20 border-red-400/50 text-red-500"
                        } hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${study.gradient} hover:opacity-90 text-white font-semibold transition-all duration-300 hover:scale-105`}
                  >
                    <a href={study.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View {study.type === "Design" ? "Prototype" : "Process"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
              <Star className="mr-2 h-6 w-6 text-red-700" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-300"
                >
                  <CardHeader>
                    <div className={`w-full h-1 bg-gradient-to-r ${exp.gradient} rounded-full mb-4`}></div>
                    <CardTitle className="text-xl text-gray-800">{exp.title}</CardTitle>
                    <div className="space-y-2">
                      <div
                        className={`text-lg font-medium bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}
                      >
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs bg-gradient-to-r ${
                            techIndex % 4 === 0
                              ? "from-red-700/20 to-red-800/20 border-red-600/50 text-red-700"
                              : techIndex % 4 === 1
                                ? "from-red-600/20 to-red-700/20 border-red-500/50 text-red-600"
                                : techIndex % 4 === 2
                                  ? "from-red-800/20 to-red-900/20 border-red-700/50 text-red-800"
                                  : "from-red-500/20 to-red-600/20 border-red-400/50 text-red-500"
                          } hover:scale-105 transition-transform duration-200`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 overflow-hidden"
                >
                  {edu.image && (
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={edu.image || "/placeholder.svg"}
                        alt={`${edu.school} campus`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-20`}></div>
                    </div>
                  )}
                  <CardHeader>
                    <div className={`w-full h-1 bg-gradient-to-r ${edu.gradient} rounded-full mb-4`}></div>
                    <CardTitle className="text-lg text-gray-800">{edu.degree}</CardTitle>
                    <div className={`font-medium bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                      {edu.school}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <CalendarDays className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Certifications</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm border border-gray-200">
                  <div className="font-medium text-red-800">CERTIFICATE OFAPPRECIATION</div>
                  <div className="text-sm text-gray-600">Volunteer For You Can Code</div>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm border border-gray-200">
                  <div className="font-medium text-red-800">BASIC/ADVANCE C/C++/OOP & PROJECT COURSES</div>
                  <div className="text-sm text-gray-600">ETECT Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
