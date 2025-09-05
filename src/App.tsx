import { Mail, Phone, MapPin, Globe, Download, ExternalLink, Calendar, Users, Award, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import profile from './assets/profile.png';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <div className="profile">
                <img src={profile} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">John Rexes Murro</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">Senior Software Engineer</h2>
              <p className="text-muted-foreground max-w-2xl mb-6 leading-relaxed">
                Passionate full-stack developer with 6+ years of experience building impactful software solutions.
                I bring a strong background in developing and maintaining enterprise applications, API integrations, and AI-driven tools. 
                With hands-on experience in C/C++, Java, JavaScript, Shell Scripting, and Rust, I have contributed to diverse projects—from firmware development to cloud-deployed web applications.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
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
              <Button className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View Portfolio
              </Button>
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
                achievements: [
                  'Led a team of 6 developers in building a microservices architecture that improved system performance by 40%',
                  'Architected and implemented a real-time analytics dashboard serving 10M+ daily users',
                  'Mentored junior developers and established code review processes that reduced bugs by 60%'
                ]
              },
              {
                title: 'Software Engineer',
                company: 'Amdocs',
                period: '2022 - 2024',
                location: 'Metro Manila, Philippines',
                achievements: [
                  'Built the entire frontend using React and TypeScript, increasing user engagement by 35%',
                  'Developed REST APIs with Node.js and PostgreSQL handling 100K+ requests per day',
                  'Implemented CI/CD pipelines using Docker and AWS, reducing deployment time by 80%'
                ]
              },
              {
                title: 'Firmware Development Engineer',
                company: 'Lexmark',
                period: '2019 - 2022',
                location: 'Cebu, Philippines',
                achievements: [
                  'Developed responsive web applications for Fortune 500 clients',
                  'Collaborated with design teams to create pixel-perfect user interfaces',
                  'Optimized application performance resulting in 50% faster load times'
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
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
                skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3']
              },
              {
                category: 'Backend Development',
                skills: ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
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
            Education & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Bachelor of Computer Science</h4>
                <p className="text-primary font-medium mb-2">University of California, Berkeley</p>
                <p className="text-muted-foreground text-sm">2012 - 2016 | GPA: 3.8/4.0</p>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Focused on software engineering, algorithms, and data structures. 
                  Graduated Magna Cum Laude.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
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
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'E-commerce Platform',
                description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
                tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
                impact: '500K+ users'
              },
              {
                name: 'Analytics Dashboard',
                description: 'Real-time data visualization platform for business intelligence',
                tech: ['React', 'D3.js', 'Python', 'AWS'],
                impact: '10M+ data points'
              },
              {
                name: 'Mobile App',
                description: 'Cross-platform mobile application with React Native',
                tech: ['React Native', 'Firebase', 'Redux'],
                impact: '100K+ downloads'
              },
              {
                name: 'API Gateway',
                description: 'Microservices API gateway with rate limiting and authentication',
                tech: ['Node.js', 'Docker', 'Kubernetes'],
                impact: '1B+ requests/month'
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
                    <Button variant="ghost" size="sm" className="text-primary">
                      View Details
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Let's connect and discuss how we can work together
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">GitHub</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button size="sm">Get In Touch</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App