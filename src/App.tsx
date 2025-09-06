import { Mail, Phone, MapPin, Globe, Download, ExternalLink, Calendar, Users, Award, Star, LinkedinIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import profile from './assets/profile.jpg';
import './App.css';
import { SendEmail } from './components/custom/sendEmail'
import { LinkedinReach } from './components/custom/linkedin'
import { DeepChat } from 'deep-chat-react';
import { ChatWithAI } from './components/custom/chat'

function App() {
  return (
    <div className="min-h-screen bg-background bg-gray-50">
      {/* Header Section */}
      <header className="bg-sky-700 border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="profile">
                <img src={profile} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">John Rexes Murro</h1>
              <h2 className="text-xl md:text-2xl text-white mb-4">Senior Software Engineer</h2>
              <p className="text-white text-sm mb-6 leading-relaxed">
                Passionate full-stack developer with 6+ years of experience building impactful software solutions.
                I bring a strong background in developing and maintaining enterprise applications, API integrations, and AI-driven tools. 
                With hands-on experience in C/C++, Java, JavaScript, Shell Scripting, and Rust, I have contributed to diverse projects—from firmware development to cloud-deployed web applications.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>jrmurro@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Cebu, Philippines</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <SendEmail />
              <LinkedinReach />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Experience Section */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            Professional Experience
          </h3>
          <div className="space-y-6">
            {[
              {
                title: 'Senior Fullstack Software Engineer',
                company: 'QVantage',
                period: '2024 - Present',
                location: 'Singapore',
                website: 'https://qvantage.io',
                achievements: [
                  'Developed service routes to integrate Salesforce APIs into the application, includes connecting to Salesforce (OAuth and Tokens), mapping fields to Salesforce Custom Object, and exporting data from app to Salesforce Object.',
                  'Architected and implemented a real-time analytics dashboard serving 100K+ monthly users',
                  'Integrated OpenAI and Large Language Model for Text Generation in email workflows',
                  'Implemented AI Agentic System using LangChain Tools and Agents for Automated Chat Filtering with Content Moderation',
                ]
              },
              {
                title: 'Software Engineer',
                company: 'Amdocs',
                period: '2022 - 2024',
                location: 'Metro Manila, Philippines',
                website: 'https://amdocs.com',
                achievements: [
                  'Developed and maintained Invoicing/Billing services for TRUEMOVE Thailand and Vodafone Italy.',
                  'Designed, developed and implemented solutions or tools for internal operation.',
                  'Assisted/lead team to discover open source software tools that can be used to improve development process',
                ]
              },
              {
                title: 'Firmware Development Engineer',
                company: 'Lexmark',
                period: '2019 - 2022',
                location: 'Cebu, Philippines',
                website: 'https://lexmark.com',
                achievements: [
                  `Developed features for Lexmark laser printer's graphical user interface using Qt Framework and Android.`,
                  'Pioneered the conversion from Lettuce to Robot framework for UI Test Automation.',
                  'Part of the team that advocates Rust programming language, and the first team to implement a project using Rustlang and tools in production for Xerox.',
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                      <p className="text-primary font-medium"><a href={job.website}>{job.company}</a></p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: 'Frontend Development',
                skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Qt Framework']
              },
              {
                category: 'Backend Development',
                skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Elasticsearch']
              },
              {
                category: 'DevOps & Tools',
                skills: ['Docker', 'AWS', 'Kubernetes', 'Git', 'CI/CD', 'Linux', 'Nginx']
              },
              {
                category: 'Soft Skills',
                skills: ['Team Leadership', 'Project Management', 'Mentoring', 'Agile/Scrum', 'Communication']
              }
            ].map((skillGroup, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="hover:bg-primary hover:text-white transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Bachelor of Science in Computer Engineering</h4>
                <p className="text-primary font-medium mb-2"><a href={'https://usc.edu.ph/'}>University of San Carlos</a></p>
                <p className="text-muted-foreground text-sm">2014 - 2019 | GWA: 1.35 (95% in Philippine Grading System)</p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Focused on software engineering, algorithms, and data structures. 
                  Graduated Magna Cum Laude.
                </p>
              </CardContent>
            </Card>
            {/* <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
                <div className="space-y-3">
                  {[
                    'AWS Certified Solutions Architect',
                    'Google Cloud Professional Developer',
                    'Certified Kubernetes Administrator',
                    'React Advanced Certification'
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Analytics Dashboard',
                description: 'Real-time data visualization platform for business intelligence',
                tech: ['Microsoft Clarity'],
                impact: '10M+ data points'
              },
              {
                name: 'Graphical User Interface for Household and Enterprise printers',
                description: 'Embedded GUIs for printers built with Yocto project',
                tech: ['Qt Framework', 'Android', 'Linux', 'Yocto Project'],
                impact: '100K+ printers'
              },
              {
                name: 'API Gateway',
                description: 'Microservices API gateway with rate limiting and authentication',
                tech: ['Node.js', 'Docker', 'Kubernetes'],
                impact: '100K+ requests/month'
              },
              {
                name: 'AI Generated Email Workflow',
                description: 'Generate Email with Templates and Variables',
                tech: ['OpenAI', 'NextJS', 'Express']
              },
              {
                name: 'AI Assisted Chat Filtering',
                description: 'Advanced Filtering for Leads and Prospects',
                tech: ['OpenAI', 'LangChain Tools and Agents', 'Text Embeddings', 'Elasticsearch', 'PostgreSQL']
              }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">{project.name}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">{project.impact}</span>
                    {/* <Button variant="ghost" size="sm" className="text-primary">
                      View Details
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <ChatWithAI />
      </main>

      {/* Footer */}
      <footer className="bg-sky-900 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-white mb-4">
              Let's connect and discuss how we can work together
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App