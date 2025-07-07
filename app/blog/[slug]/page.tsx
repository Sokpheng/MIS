import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const blogPosts = {
  "math-powers-gaming": {
    id: "math-powers-gaming",
    title: "How Math Powers Modern Gaming: From Graphics to Game Logic",
    excerpt:
      "Explore how mathematical concepts like vectors, matrices, probability, and algorithms are used in game development—from rendering 3D worlds to designing fair loot systems.",
    content: `
# How Math Powers Modern Gaming: From Graphics to Game Logic

Gaming has evolved from simple 2D sprites to complex 3D worlds with realistic physics, stunning graphics, and intelligent AI. Behind every pixel, every movement, and every game mechanic lies a foundation of mathematical concepts that make the magic possible.

## The Mathematics Behind 3D Graphics

### Vectors and Matrices
At the heart of 3D graphics are **vectors** and **matrices**. Every object in a 3D game world is defined by vectors that represent:
- Position (x, y, z coordinates)
- Direction (movement vectors)  
- Rotation (orientation in 3D space)

Matrices are used for transformations:
- **Translation matrices** move objects
- **Rotation matrices** rotate objects
- **Scaling matrices** resize objects
- **Projection matrices** convert 3D coordinates to 2D screen coordinates

### Linear Algebra in Action
When you see a character walking across the screen, the game engine is performing hundreds of matrix multiplications per second to:
1. Transform the character's 3D model
2. Apply lighting calculations
3. Project the 3D scene onto your 2D screen
4. Handle camera movements and rotations

## Probability and Random Number Generation

### Loot Systems
Ever wondered how games determine what loot you get from a treasure chest? It's all about **probability distributions**:

- **Uniform distribution**: Equal chance for all items
- **Weighted distribution**: Rare items have lower probability
- **Normal distribution**: Most items cluster around average quality

### Procedural Generation
Games like Minecraft use mathematical algorithms to generate infinite worlds:
- **Perlin noise** for terrain generation
- **Fractals** for creating natural-looking landscapes
- **Cellular automata** for cave systems

## Physics Simulation

### Collision Detection
When objects collide in games, complex mathematical calculations determine:
- **Bounding boxes**: Simple rectangular collision detection
- **Sphere collision**: Using distance formulas
- **Mesh collision**: Precise polygon-to-polygon detection

### Realistic Movement
Physics engines use calculus and differential equations to simulate:
- Gravity and acceleration
- Friction and air resistance
- Momentum and energy conservation

## Game AI and Decision Making

### Pathfinding Algorithms
AI characters use mathematical algorithms to navigate:
- **A* algorithm**: Finds optimal paths using heuristics
- **Dijkstra's algorithm**: Shortest path calculations
- **Navigation meshes**: 3D pathfinding in complex environments

### Behavioral Mathematics
AI behavior often relies on:
- **State machines**: Mathematical models of behavior
- **Utility functions**: Numerical decision-making
- **Neural networks**: Machine learning for adaptive AI

## Conclusion

Next time you play your favorite game, remember that behind every explosion, every character movement, and every beautiful landscape lies a complex web of mathematical concepts working in harmony. From the linear algebra powering 3D graphics to the probability theory governing loot drops, mathematics is the invisible force that makes gaming magic possible.

Whether you're interested in game development or just curious about the technology behind your favorite games, understanding these mathematical foundations opens up a whole new appreciation for the art and science of gaming.

*What mathematical concept in gaming fascinates you the most? Share your thoughts in the comments below!*
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Mathematics", "Game Development", "Programming", "3D Graphics"],
    image: "https://cdnpro.eraspace.com/media/wysiwyg/artikel/Tahun_2023/Juli/turnbasedgame-1.jpg",
    gradient: "from-red-700 to-red-800",
  },
  "first-laravel-project": {
    id: "first-laravel-project",
    title: "What I Learned Building My First Laravel Project as a Student Developer",
    excerpt:
      "Share your experience building a Laravel project, what problems you faced (like routing, models, relationships), and what advice you'd give to other students just starting.",
    content: `
# What I Learned Building My First Laravel Project as a Student Developer

As a computer science student, diving into Laravel for the first time was both exciting and overwhelming. Here's my honest journey through building my first real Laravel application—a simple task management system—and the lessons I learned along the way.

## The Project: A Task Management System

I decided to build a task management application where users could:
- Create and manage personal tasks
- Organize tasks into categories
- Set deadlines and priorities
- Track completion status

Simple enough, right? Well, not quite as simple as I initially thought!

## Challenge #1: Understanding MVC Architecture

Coming from procedural PHP, Laravel's MVC (Model-View-Controller) pattern was confusing at first.

### What I Struggled With:
- Where to put business logic
- How controllers, models, and views interact
- When to use which component

### What I Learned:
- **Models** handle data and database interactions
- **Views** are for presentation only
- **Controllers** coordinate between models and views
- Keep controllers thin and models fat

## Challenge #2: Database Relationships

Understanding Eloquent relationships was probably my biggest hurdle.

### The Confusion:
- One-to-many vs many-to-many relationships
- Foreign keys and migrations
- Eager loading vs lazy loading

### My Breakthrough Moment:
When I finally understood that a User **has many** Tasks, and a Task **belongs to** a User, everything clicked!

## Challenge #3: Routing Confusion

Laravel's routing system seemed magical but confusing.

### Common Mistakes I Made:
- Not understanding route parameters
- Forgetting about route model binding
- Mixing up GET and POST routes

### What Helped:
- Using php artisan route:list to see all routes
- Understanding RESTful conventions
- Learning about route groups and middleware

## Final Thoughts

Building my first Laravel project was challenging but incredibly rewarding. The framework's "convention over configuration" approach means there's a learning curve, but once you understand Laravel's way of doing things, development becomes much more enjoyable and productive.

**To fellow students**: Don't get discouraged if it feels overwhelming at first. Every expert was once a beginner. Keep building, keep learning, and don't be afraid to make mistakes—they're the best teachers!

*What was your biggest challenge when learning Laravel? Share your experience in the comments!*
    `,
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["Laravel", "PHP", "Student Life", "Web Development"],
    image: "https://developerhowto.com/wp-content/uploads/2021/01/laravel8-starter-home.png",
    gradient: "from-red-800 to-red-900",
  },
  "gamer-skills-tech-careers": {
    id: "gamer-skills-tech-careers",
    title: "The Hidden Skills Gamers Bring to Tech Careers",
    excerpt:
      "Discuss how playing games helps develop transferable skills like problem-solving, reaction time, resource management, and teamwork—and how they apply in tech fields like software development or cybersecurity.",
    content: `
# The Hidden Skills Gamers Bring to Tech Careers

Gaming isn't just entertainment—it's a training ground for skills that directly translate to successful tech careers. As someone who's spent countless hours gaming and now works in technology, I've discovered that many of the abilities I developed as a gamer have become my greatest professional assets.

## Problem-Solving Under Pressure

### Gaming Experience:
- Solving complex puzzles in games like Portal or The Witness
- Figuring out boss mechanics in Dark Souls or Elden Ring
- Debugging strategies in real-time during competitive matches

### Tech Career Application:
- **Debugging code** under tight deadlines
- **System troubleshooting** when servers go down
- **Algorithm optimization** for performance issues
- **Root cause analysis** for production bugs

*Example*: The methodical approach I learned from debugging game mechanics directly helped me trace through complex codebases to find elusive bugs.

## Resource Management and Optimization

### Gaming Skills:
- Managing limited inventory in survival games
- Optimizing build orders in strategy games like StarCraft
- Balancing stats and equipment in RPGs
- Efficient farming and progression planning

### Professional Benefits:
- **Project management** and resource allocation
- **Database optimization** and query performance
- **Memory management** in programming
- **Time management** and sprint planning
- **Budget optimization** for cloud resources

## Pattern Recognition and Strategic Thinking

### Gaming Development:
- Recognizing enemy patterns and attack sequences
- Understanding meta-strategies in competitive games
- Learning optimal routes and efficiency paths
- Adapting strategies based on changing conditions

### Tech Applications:
- **Code pattern recognition** for refactoring
- **Security threat identification**
- **Performance bottleneck detection**
- **User behavior analysis**
- **System architecture planning**

## Conclusion

Don't let anyone tell you that gaming is "just a hobby" or "waste of time." The skills you've developed as a gamer are valuable assets in the tech industry. The key is recognizing these transferable skills and learning how to articulate them professionally.

Your gaming background gives you a unique perspective and skill set that many traditional candidates lack. Embrace it, leverage it, and use it to stand out in your tech career.

*What gaming skills have helped you most in your professional life? Share your experiences in the comments!*
    `,
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["Gaming", "Career Development", "Soft Skills", "Technology"],
    image: "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2022/11/GettyImages-1385176855.jpg",
    gradient: "from-red-600 to-red-700",
  },
  "learning-to-code-struggles": {
    id: "learning-to-code-struggles",
    title: "Why Learning to Code Feels Hard—And How to Push Through It",
    excerpt:
      "Break down common struggles like imposter syndrome, debugging frustration, and tutorial hell. Share personal tips or resources that helped you improve.",
    content: `
# Why Learning to Code Feels Hard—And How to Push Through It

Learning to code is one of the most rewarding yet frustrating journeys you can embark on. As someone who's been through the struggle and come out the other side, I want to share why coding feels so difficult and, more importantly, how to push through the challenges.

## The Reality: Coding IS Hard (And That's Normal)

Let's start with the truth: learning to code is genuinely difficult. It's not just you, and you're not "not cut out for it." Here's why it feels so challenging:

### 1. **You're Learning a New Language**
Programming languages have their own syntax, rules, and logic patterns. It's like learning French, Spanish, German simultaneously while also learning how to think in completely new ways.

### 2. **Abstract Thinking Required**
Code exists in an abstract world. You're manipulating concepts, data structures, and logic flows that don't have physical representations. This mental shift is huge.

### 3. **Precision Matters**
One missing semicolon, one wrong bracket, one typo—and nothing works. The computer doesn't understand "what you meant"; it only understands exactly what you wrote.

### 4. **Constant Problem-Solving**
Every line of code is essentially solving a problem. Your brain is constantly working to break down complex tasks into smaller, logical steps.

## Common Struggles (You're Not Alone!)

### 1. **Imposter Syndrome**
*"Everyone else seems to get this so easily. Maybe I'm just not smart enough."*

**The Reality**: Even senior developers Google basic syntax. Programming is about problem-solving, not memorizing every function.

**My Experience**: I spent my first year thinking I was the only one who didn't "naturally" understand everything. Turns out, everyone feels this way!

### 2. **Tutorial Hell**
*"I've watched 50 tutorials, but I still can't build anything from scratch."*

**The Problem**: Tutorials give you the illusion of understanding without the struggle of actual problem-solving.

**The Solution**: Start building projects, even if they're terrible. Struggle is where learning happens.

### 3. **Debugging Frustration**
*"My code worked yesterday, and I changed one thing, and now nothing works!"*

**The Truth**: Debugging is 70% of programming. It's not a sign you're bad at coding—it's literally part of the job.

### 4. **Information Overload**
*"Should I learn React or Vue? Python or JavaScript? There are so many options!"*

**My Advice**: Pick one path and stick with it. You can always learn other technologies later.

## Strategies That Actually Work

### 1. **Embrace the Struggle**
Struggling means you're learning. If everything feels easy, you're probably not challenging yourself enough.

**Mindset Shift**: Change "I don't know how to do this" to "I don't know how to do this *yet*."

### 2. **Build Projects, Not Just Tutorials**
Start with simple projects:
- **Calculator**
- **To-do list**
- **Personal website**
- **Simple game**

Each project teaches you something tutorials can't: how to solve problems independently.

### 3. **Learn to Debug Systematically**
Debugging isn't random—it's a skill:
1. **Read the error message** (seriously, read it)
2. **Isolate the problem** (comment out code sections)
3. **Use print statements** or debugger tools
4. **Google the exact error message**
5. **Ask for help** with specific questions

## Final Thoughts

Learning to code is hard because you're literally rewiring your brain to think in new ways. The struggle isn't a bug—it's a feature. Every programmer has felt exactly what you're feeling right now.

The difference between those who succeed and those who quit isn't talent—it's persistence. Keep showing up, keep building things, and keep pushing through the frustration.

Remember: You don't have to be great to get started, but you have to get started to be great.

**Your coding journey is a marathon, not a sprint. Pace yourself, be patient with yourself, and trust the process.**

*What's been your biggest coding struggle, and how did you overcome it? Share your story in the comments to help other learners!*
    `,
    date: "2023-12-20",
    readTime: "7 min read",
    tags: ["Learning", "Programming", "Motivation", "Beginner Tips"],
    image: "https://www.rasmussen.edu/images/rasmussenlibraries/blogs/school-of-technology/2020/learn-to-code.jpg",
    gradient: "from-red-900 to-gray-800",
  },
  "backend-vs-frontend": {
    id: "backend-vs-frontend",
    title: "Backend vs. Frontend: Which Side of Code Should You Choose?",
    excerpt:
      "Compare both roles with real examples, like setting up APIs (backend) vs. designing user interfaces (frontend). Help beginners decide what path fits them best.",
    content: `
# Backend vs. Frontend: Which Side of Code Should You Choose?

One of the biggest decisions new developers face is choosing between frontend and backend development. As someone who's worked on both sides and now does full-stack development, I'll break down the differences, show you what each role actually involves, and help you figure out which path might be right for you.

## What's the Difference?

### **Frontend Development**
Frontend is everything users see and interact with directly:
- **User interfaces** (buttons, forms, menus)
- **Visual design** implementation
- **User experience** and interactions
- **Client-side logic** and functionality

### **Backend Development**
Backend is the behind-the-scenes infrastructure:
- **Server logic** and databases
- **APIs** and data processing
- **Security** and authentication
- **Performance** and scalability

Think of it like a restaurant: frontend is the dining room, menu, and service experience; backend is the kitchen, inventory management, and food preparation.

## Frontend Development Deep Dive

### **What Frontend Developers Actually Do**

#### **Daily Tasks:**
- Convert design mockups into interactive web pages
- Implement user interactions and animations
- Optimize website performance and loading speeds
- Ensure cross-browser compatibility
- Make websites responsive for different devices
- Integrate with backend APIs to display data

### **Frontend Technologies**

#### **Core Technologies:**
- **HTML**: Structure and content
- **CSS**: Styling and layout
- **JavaScript**: Interactivity and logic

#### **Popular Frameworks/Libraries:**
- **React**: Component-based UI library
- **Vue.js**: Progressive framework
- **Angular**: Full-featured framework
- **Svelte**: Compile-time optimized framework

### **Frontend Challenges**
- **Browser compatibility** issues
- **Performance optimization** for different devices
- **Responsive design** complexity
- **Accessibility** requirements
- **Constantly evolving** frameworks and tools

## Backend Development Deep Dive

### **What Backend Developers Actually Do**

#### **Daily Tasks:**
- Design and implement APIs
- Manage databases and data models
- Handle user authentication and security
- Optimize server performance and scalability
- Integrate with third-party services
- Monitor and debug production systems

### **Backend Technologies**

#### **Programming Languages:**
- **JavaScript/Node.js**: Full-stack JavaScript
- **Python**: Django, Flask, FastAPI
- **Java**: Spring Boot, enterprise applications
- **PHP**: Laravel, WordPress
- **C#**: .NET framework
- **Go**: High-performance applications
- **Ruby**: Ruby on Rails

#### **Databases:**
- **SQL**: PostgreSQL, MySQL, SQLite
- **NoSQL**: MongoDB, Redis, Cassandra
- **Cloud**: AWS RDS, Google Cloud SQL

### **Backend Challenges**
- **Security vulnerabilities** and data protection
- **Scalability** and performance under load
- **Database optimization** and query performance
- **System architecture** decisions
- **DevOps** and deployment complexity

## Personality and Skill Fit

### **You Might Prefer Frontend If You:**
- **Love visual design** and user experience
- **Enjoy immediate feedback** (seeing changes instantly)
- **Like creative problem-solving**
- **Want to work closely with designers**
- **Prefer variety** in daily tasks
- **Enjoy learning new frameworks** and tools
- **Like making things look beautiful** and functional

### **You Might Prefer Backend If You:**
- **Enjoy logical problem-solving** and algorithms
- **Like working with data** and databases
- **Prefer systematic, structured thinking**
- **Want to build scalable systems**
- **Enjoy security** and performance challenges
- **Like working behind the scenes**
- **Prefer stability** over constant framework changes

## Making Your Decision

### **Try Both!**
Build a simple project that requires both:
1. **Create a basic frontend** (HTML/CSS/JavaScript)
2. **Build a simple backend** (Node.js/Express or Python/Flask)
3. **Connect them together**
4. **See which part you enjoyed more**

### **Consider Your Goals**
- **Want to freelance?** Frontend might be easier to start
- **Want to work at big tech?** Backend often pays more
- **Want to start your own company?** Full-stack gives you flexibility
- **Want job security?** Both are in high demand

## My Personal Recommendation

**Start with frontend if:**
- You're completely new to programming
- You want to see results quickly
- You have any design interest
- You want to build things people can see and use

**Start with backend if:**
- You have some programming experience
- You enjoy math and logical thinking
- You're interested in data and systems
- You want to focus on problem-solving over presentation

**Go full-stack if:**
- You want maximum career flexibility
- You're willing to invest more time learning
- You want to build complete applications
- You can't decide between the two!

## Conclusion

There's no wrong choice between frontend and backend development. Both are rewarding career paths with excellent job prospects. The most important thing is to start coding and see what resonates with you.

Remember: you can always switch or expand your skills later. Many successful developers started on one side and moved to the other, or became full-stack developers over time.

**The best choice is the one that gets you excited to code every day.**

*Which path are you leaning toward, and what's driving your decision? Share your thoughts in the comments!*
    `,
    date: "2023-12-15",
    readTime: "12 min read",
    tags: ["Backend", "Frontend", "Career Choice", "Web Development"],
    image:
      "https://www.oneclickitsolution.com/blog/wp-content/uploads/2021/08/Frontend-vs.-Backend-Developers-What-is-the-Key-Differences.png",
    gradient: "from-red-500 to-red-600",
  },
  "laravel-mysql-guide": {
    id: "laravel-mysql-guide",
    title: "How I Built a Simple Web App with Laravel and MySQL: A Beginner's Guide",
    excerpt:
      "Walk through one of your Laravel projects step-by-step, including database setup, routing, views, and models. Make it helpful for others trying to build their first app.",
    content: `
# How I Built a Simple Web App with Laravel and MySQL: A Beginner's Guide

Building your first Laravel application can feel overwhelming, but it doesn't have to be. In this guide, I'll walk you through creating a simple blog application from scratch, covering everything from setup to deployment. This is the same approach I used for my first Laravel project as a student.

## What We're Building

A simple blog application with:
- **User authentication** (register, login, logout)
- **Create, read, update, delete** blog posts
- **Categories** for organizing posts
- **Comments** system
- **Responsive design** with Bootstrap

## Prerequisites

Before we start, make sure you have:
- **PHP 8.0+** installed
- **Composer** (PHP package manager)
- **MySQL** or **XAMPP/MAMP**
- **Basic PHP knowledge**
- **HTML/CSS fundamentals**

## Step 1: Laravel Installation and Setup

### Install Laravel
Install Laravel via Composer:
composer create-project laravel/laravel blog-app

Navigate to project directory:
cd blog-app

Start development server:
php artisan serve

Your Laravel app should now be running at http://localhost:8000.

### Environment Configuration
Edit the .env file for database connection:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=blog_app
DB_USERNAME=root
DB_PASSWORD=your_password

### Create Database
CREATE DATABASE blog_app;

## Step 2: Database Design and Migrations

### Create Migrations
Create migrations for our tables:
php artisan make:migration create_categories_table
php artisan make:migration create_posts_table
php artisan make:migration create_comments_table

### Run Migrations
php artisan migrate

## Step 3: Creating Models

### Generate Models
php artisan make:model Category
php artisan make:model Post
php artisan make:model Comment

## Step 4: Authentication Setup

Laravel makes authentication incredibly easy:

Install Laravel UI:
composer require laravel/ui

Generate auth scaffolding:
php artisan ui bootstrap --auth

Install npm dependencies and compile assets:
npm install && npm run dev

This creates login, register, and password reset functionality automatically!

## Step 5: Controllers

### Create Controllers
php artisan make:controller PostController --resource
php artisan make:controller CategoryController --resource
php artisan make:controller CommentController
php artisan make:controller HomeController

## What I Learned Building This

### **Key Takeaways:**
1. **Laravel's conventions** make development faster once you learn them
2. **Eloquent relationships** are powerful but need practice
3. **Blade templating** is intuitive and flexible
4. **Authentication** is incredibly easy with Laravel
5. **Migration system** makes database changes manageable

### **Mistakes I Made:**
1. **Not using validation** early enough
2. **Forgetting about authorization** (letting users edit others' posts)
3. **Not planning database relationships** properly
4. **Skipping error handling** in the beginning

### **What I'd Do Differently:**
1. **Write tests** from the beginning
2. **Use form requests** for complex validation
3. **Implement proper error pages**
4. **Add image upload** functionality
5. **Use queues** for email notifications

## Conclusion

Building this blog application taught me more about Laravel than any tutorial could. The key is to start simple and gradually add complexity. Don't try to build everything at once—get the basics working first, then iterate.

**Remember**: Every expert was once a beginner. Your first Laravel app doesn't need to be perfect—it just needs to work and teach you something new.

*What feature would you add to this blog application? Share your ideas in the comments!*
    `,
    date: "2023-12-10",
    readTime: "9 min read",
    tags: ["Laravel", "MySQL", "Tutorial", "Database"],
    image: "https://i.ytimg.com/vi/LpB2GCeFjao/maxresdefault.jpg",
    gradient: "from-red-700 to-red-800",
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-100 to-gray-800">
      <Navigation />
      <main className="pt-20">
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  )
}
