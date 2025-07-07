"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook, Sparkles, Heart } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sokpheng.phon@email.com",
      link: "mailto:sokpheng.phon@email.com",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+855 12 345 678",
      link: "tel:+85512345678",
      gradient: "from-red-600 to-red-700",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Phnom Penh, Cambodia",
      link: "#",
      gradient: "from-red-400 to-red-500",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/sokphengphon",
      gradient: "from-red-600 to-red-700",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/sokphengphon",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/sokphengphon",
      gradient: "from-red-700 to-red-800",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      url: "https://facebook.com/sokphengphon",
      gradient: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-800 via-gray-800 to-red-900 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="flex justify-center mb-6">
            <Heart className="h-6 w-6 text-red-700 animate-pulse" />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to
            bring your ideas to life with a touch of magic! ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center">
                <Sparkles className="mr-2 h-6 w-6 text-red-700" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-red-800">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-red-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-red-800">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-red-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-red-800">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-red-700"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-red-800">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-red-700"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${info.gradient} shadow-lg`}>
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div>
                      <div className="font-medium text-red-800">{info.title}</div>
                      <a href={info.link} className="text-red-700/80 hover:text-red-600 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className={`border-2 bg-gradient-to-r ${social.gradient} border-0 text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
