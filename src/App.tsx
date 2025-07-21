import React, { useState } from 'react';
import { 
  Search, 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Bell, 
  User, 
  Grid3X3,
  ChevronDown,
  Plus,
  Edit3,
  Mail,
  MoreHorizontal,
  MapPin,
  Building2,
  GraduationCap,
  Award,
  Eye,
  Calendar,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Send,
  Camera,
  ChevronUp,
  Diamond
} from 'lucide-react';

function App() {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [showAllLicenses, setShowAllLicenses] = useState(false);
  const [showAllVolunteer, setShowAllVolunteer] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllAccomplishments, setShowAllAccomplishments] = useState(false);
  const [showAllInterests, setShowAllInterests] = useState(false);
  const [showAllPeopleViewed, setShowAllPeopleViewed] = useState(false);
  const [showAllPeopleKnow, setShowAllPeopleKnow] = useState(false);

  const aboutText = `Passionate Senior Software Engineer with 8+ years of experience building scalable web applications and leading cross-functional teams. Currently at Google, working on innovative products that impact millions of users worldwide.

Specializing in React, Node.js, and cloud architecture with a strong focus on performance optimization and user experience. I'm passionate about mentoring junior developers and contributing to open-source projects.

Always learning and exploring new technologies to solve complex problems and drive business growth. I have extensive experience in agile methodologies, test-driven development, and DevOps practices.

My expertise includes full-stack development, microservices architecture, database design, and API development. I've successfully led teams of 5-10 engineers and delivered products that generated $10M+ in revenue.

Outside of work, I enjoy contributing to open-source projects, speaking at tech conferences, and mentoring aspiring developers through various programs.`;

  const truncatedAbout = aboutText.split('\n\n').slice(0, 3).join('\n\n');

  const allExperiences = [
    {
      id: 1,
      company: "Google",
      logo: "G",
      logoColor: "bg-blue-600",
      title: "Senior Software Engineer",
      type: "Full-time",
      duration: "Jan 2022 - Present · 2 yrs 11 mos",
      location: "Mountain View, California, United States",
      description: "Leading development of high-impact features for Google Search, serving billions of users daily. Architected scalable solutions resulting in 25% performance improvements.",
      skills: ["React", "TypeScript", "Node.js", "Python", "Kubernetes"]
    },
    {
      id: 2,
      company: "Meta",
      logo: "M",
      logoColor: "bg-blue-500",
      title: "Software Engineer",
      type: "Full-time",
      duration: "Jun 2019 - Dec 2021 · 2 yrs 7 mos",
      location: "Menlo Park, California, United States",
      description: "Developed and maintained React components for Facebook's main platform. Collaborated with design teams to implement pixel-perfect UIs.",
      skills: ["React", "JavaScript", "GraphQL", "PHP"]
    },
    {
      id: 3,
      company: "Airbnb",
      logo: "A",
      logoColor: "bg-red-500",
      title: "Frontend Developer",
      type: "Full-time",
      duration: "Aug 2017 - May 2019 · 1 yr 10 mos",
      location: "San Francisco, California, United States",
      description: "Built responsive web applications using React and Redux. Implemented accessibility features and optimized for mobile devices.",
      skills: ["React", "Redux", "CSS", "JavaScript"]
    }
  ];

  const allEducation = [
    {
      id: 1,
      school: "Stanford University",
      logo: "S",
      logoColor: "bg-red-600",
      degree: "Bachelor of Science - BS, Computer Science",
      duration: "2013 - 2017",
      description: "Graduated Magna Cum Laude. Focused on algorithms, data structures, and software engineering principles."
    },
    {
      id: 2,
      school: "UC Berkeley",
      logo: "UC",
      logoColor: "bg-blue-800",
      degree: "Master of Science - MS, Computer Science",
      duration: "2017 - 2019",
      description: "Specialized in Machine Learning and Distributed Systems. Thesis on scalable recommendation systems."
    }
  ];

  const allLicenses = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services (AWS)",
      logo: "AWS",
      logoColor: "bg-orange-500",
      issued: "Issued Dec 2023 · Expires Dec 2026",
      credentialId: "AWS-PSA-12345",
      showCredential: true
    },
    {
      id: 2,
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      logo: "G",
      logoColor: "bg-blue-600",
      issued: "Issued Oct 2023 · Expires Oct 2025",
      credentialId: "GCP-PCA-67890",
      showCredential: true
    },
    {
      id: 3,
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB",
      logo: "M",
      logoColor: "bg-green-600",
      issued: "Issued Aug 2023 · No Expiration Date",
      credentialId: "MDB-DEV-11111",
      showCredential: false
    }
  ];

  const allVolunteer = [
    {
      id: 1,
      organization: "Code.org",
      logo: "CG",
      logoColor: "bg-purple-600",
      role: "Technical Mentor",
      cause: "Education",
      duration: "Jan 2020 - Present · 4 yrs",
      description: "Mentoring high school students in computer science fundamentals and web development. Helped over 50 students build their first web applications and prepare for tech careers."
    },
    {
      id: 2,
      organization: "Red Cross",
      logo: "RC",
      logoColor: "bg-red-500",
      role: "Software Development Volunteer",
      cause: "Nonprofit Organization Management",
      duration: "Mar 2019 - Dec 2021 · 2 yrs 10 mos",
      description: "Developed and maintained web applications for disaster relief coordination. Built tools that helped coordinate aid distribution to over 10,000 families."
    }
  ];

  const allSkills = [
    { name: "React.js", endorsements: 12 },
    { name: "JavaScript", endorsements: 18 },
    { name: "Node.js", endorsements: 14 },
    { name: "TypeScript", endorsements: 9 },
    { name: "Python", endorsements: 7 },
    { name: "AWS", endorsements: 11 },
    { name: "Docker", endorsements: 8 },
    { name: "Kubernetes", endorsements: 6 },
    { name: "GraphQL", endorsements: 5 },
    { name: "MongoDB", endorsements: 4 },
    { name: "PostgreSQL", endorsements: 7 },
    { name: "Redis", endorsements: 3 },
    { name: "Git", endorsements: 15 },
    { name: "Agile Methodologies", endorsements: 10 },
    { name: "System Design", endorsements: 8 }
  ];

  const allInterests = [
    { name: "Google", type: "Company", followers: "2,847,392", logo: "G", logoColor: "bg-blue-600" },
    { name: "Apple", type: "Company", followers: "4,521,847", logo: "A", logoColor: "bg-black" },
    { name: "Sundar Pichai", type: "CEO at Google", followers: "3,245,123", logo: "", logoColor: "bg-gray-300" },
    { name: "Microsoft", type: "Company", followers: "3,892,456", logo: "M", logoColor: "bg-blue-500" },
    { name: "Amazon", type: "Company", followers: "2,156,789", logo: "A", logoColor: "bg-orange-500" },
    { name: "Satya Nadella", type: "CEO at Microsoft", followers: "2,987,654", logo: "", logoColor: "bg-gray-300" },
    { name: "Tesla", type: "Company", followers: "1,234,567", logo: "T", logoColor: "bg-red-600" },
    { name: "Netflix", type: "Company", followers: "987,654", logo: "N", logoColor: "bg-red-500" }
  ];

  const allPeopleViewed = [
    { name: "Michael Chen", title: "Product Manager at Apple", mutualConnections: 0 },
    { name: "Emily Rodriguez", title: "UX Designer at Netflix", mutualConnections: 0 },
    { name: "David Kim", title: "Data Scientist at Microsoft", mutualConnections: 0 },
    { name: "Lisa Wang", title: "Engineering Manager at Tesla", mutualConnections: 0 },
    { name: "James Wilson", title: "DevOps Engineer at Amazon", mutualConnections: 0 },
    { name: "Maria Garcia", title: "Frontend Developer at Spotify", mutualConnections: 0 }
  ];

  const allPeopleKnow = [
    { name: "Alex Thompson", title: "Full Stack Developer at Stripe", mutualConnections: 2 },
    { name: "Jessica Wu", title: "Technical Lead at Amazon", mutualConnections: 5 },
    { name: "Robert Martinez", title: "Senior Developer at Shopify", mutualConnections: 3 },
    { name: "Amanda Foster", title: "Software Architect at Adobe", mutualConnections: 4 },
    { name: "Kevin Chang", title: "Mobile Developer at Uber", mutualConnections: 1 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left section */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                in
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-gray-100 pl-10 pr-4 py-2 rounded-md w-80 text-sm focus:outline-none focus:bg-white focus:border-blue-600 border border-transparent"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <Home className="w-6 h-6" />
                <span className="text-xs mt-1">Home</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <Users className="w-6 h-6" />
                <span className="text-xs mt-1">My Network</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <Briefcase className="w-6 h-6" />
                <span className="text-xs mt-1">Jobs</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <MessageSquare className="w-6 h-6" />
                <span className="text-xs mt-1">Messaging</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <Bell className="w-6 h-6" />
                <span className="text-xs mt-1">Notifications</span>
              </div>
              <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="flex items-center">
                  <span className="text-xs mt-1">Me</span>
                  <ChevronDown className="w-3 h-3 mt-1" />
                </div>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                  <Grid3X3 className="w-6 h-6" />
                  <div className="flex items-center">
                    <span className="text-xs mt-1">Work</span>
                    <ChevronDown className="w-3 h-3 mt-1" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
              <div className="h-16 bg-gradient-to-r from-blue-400 to-purple-500 relative">
                <div className="absolute -bottom-8 left-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full border-4 border-white"></div>
                </div>
              </div>
              <div className="pt-12 pb-4 px-4">
                <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                <p className="text-sm text-gray-600 mb-3">Senior Software Engineer at Google</p>
                <hr className="border-gray-200 mb-3" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Profile viewers</span>
                    <span className="text-blue-600 font-semibold">127</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Post impressions</span>
                    <span className="text-blue-600 font-semibold">1,204</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Recent</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Frontend Developers Network</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>React.js Developers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Women in Tech</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mt-4 mb-2">Groups</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>JavaScript Developers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Tech Leadership</span>
                  </div>
                </div>
                <button className="text-sm text-gray-600 hover:text-blue-600 mt-3">Show more</button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Profile Header */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                <div className="absolute -bottom-16 left-6">
                  <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white"></div>
                </div>
              </div>
              <div className="pt-20 pb-6 px-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Sarah Johnson</h1>
                    <p className="text-lg text-gray-700 mb-1">Senior Software Engineer at Google</p>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>San Francisco, California, United States</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm mb-4">
                      <span className="text-blue-600 font-semibold">500+ connections</span>
                      <span className="text-gray-400">•</span>
                      <button className="text-blue-600 hover:underline">Contact info</button>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold">
                      Connect
                    </button>
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 font-semibold">
                      Message
                    </button>
                    <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-50">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <span className="text-sm font-semibold">Google</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <span className="text-sm font-semibold">Stanford University</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
                <div className="text-gray-700 leading-relaxed">
                  {showFullAbout ? (
                    <div className="whitespace-pre-line">
                      {aboutText}
                    </div>
                  ) : (
                    <div className="whitespace-pre-line">
                      {truncatedAbout}
                    </div>
                  )}
                  <button 
                    onClick={() => setShowFullAbout(!showFullAbout)}
                    className="text-blue-600 hover:underline mt-2 font-semibold flex items-center"
                  >
                    {showFullAbout ? (
                      <>
                        <span>...see less</span>
                        <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        <span>...see more</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
                    <p className="text-sm text-blue-600">1,204 followers</p>
                  </div>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 font-semibold">
                    Follow
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="pb-4">
                    <p className="text-sm text-gray-600 mb-2">Sarah posted this • 2d</p>
                    <p className="text-gray-900 mb-3">
                      Excited to share that our team just shipped a major feature that improves page load times by 40%! 🚀
                      <br /><br />
                      The key was implementing smart code splitting and optimizing our bundle size. Performance matters! 
                      #WebDev #Performance #React
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>42</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <MessageCircle className="w-4 h-4" />
                        <span>8 comments</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <Repeat2 className="w-4 h-4" />
                        <span>3 reposts</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <Send className="w-4 h-4" />
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                  <div className="pb-4">
                    <p className="text-sm text-gray-600 mb-2">Sarah commented on this • 5d</p>
                    <p className="text-gray-900 mb-3">
                      Great insights on microservices architecture! I've found that proper service boundaries are crucial for maintainability.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span>15</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600">
                        <MessageCircle className="w-4 h-4" />
                        <span>3 comments</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button className="text-base font-semibold text-gray-600 hover:text-blue-600">Show all activity →</button>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
                <div className="space-y-6">
                  {(showAllExperiences ? allExperiences : allExperiences.slice(0, 2)).map((exp) => (
                    <div key={exp.id} className="flex space-x-4">
                      <div className={`w-12 h-12 ${exp.logoColor} rounded flex items-center justify-center text-white font-bold`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-gray-700">{exp.company} · {exp.type}</p>
                        <p className="text-sm text-gray-600">{exp.duration}</p>
                        <p className="text-sm text-gray-600">{exp.location}</p>
                        <p className="text-gray-700 mt-2">{exp.description}</p>
                        {!showAllExperiences && exp.skills && exp.skills.length > 0 && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Diamond className="w-3 h-3 text-gray-600" />
                            <div className="text-sm">
                              <span className="font-bold text-gray-900">{exp.skills[0]}</span>
                              {exp.skills.length > 1 && (
                                <>
                                  <span className="text-gray-600">, </span>
                                  <span className="font-bold text-gray-900">{exp.skills[1]}</span>
                                </>
                              )}
                              {exp.skills.length > 2 && (
                                <span className="text-gray-600"> and {exp.skills.length - 2} additional skills</span>
                              )}
                            </div>
                          </div>
                        )}
                        {showAllExperiences && (
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm font-semibold text-gray-700">Skills:</span>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded">{skill}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllExperiences(!showAllExperiences)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllExperiences ? 'Show less' : `Show all ${allExperiences.length} experiences →`}
                  </button>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
                <div className="space-y-6">
                  {(showAllEducation ? allEducation : allEducation.slice(0, 1)).map((edu) => (
                    <div key={edu.id} className="flex space-x-4">
                      <div className={`w-12 h-12 ${edu.logoColor} rounded flex items-center justify-center text-white font-bold`}>
                        {edu.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                        <p className="text-gray-700">{edu.degree}</p>
                        <p className="text-sm text-gray-600">{edu.duration}</p>
                        <p className="text-gray-700 mt-2">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllEducation(!showAllEducation)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllEducation ? 'Show less' : `Show all ${allEducation.length} education →`}
                  </button>
                </div>
              </div>
            </div>

            {/* Licenses & Certifications Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Licenses & certifications</h2>
                <div className="space-y-6">
                  {(showAllLicenses ? allLicenses : allLicenses.slice(0, 2)).map((license) => (
                    <div key={license.id} className="flex space-x-4">
                      <div className={`w-12 h-12 ${license.logoColor} rounded flex items-center justify-center text-white font-bold text-xs`}>
                        {license.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{license.title}</h3>
                        <p className="text-gray-700">{license.issuer}</p>
                        <p className="text-sm text-gray-600">{license.issued}</p>
                        <p className="text-sm text-gray-600">Credential ID: {license.credentialId}</p>
                        {license.showCredential && (
                          <button className="text-blue-600 hover:underline text-sm mt-1 flex items-center">
                            <span>Show credential</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllLicenses(!showAllLicenses)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllLicenses ? 'Show less' : `Show all ${allLicenses.length} licenses & certifications →`}
                  </button>
                </div>
              </div>
            </div>

            {/* Volunteer Experience Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Volunteer experience</h2>
                <div className="space-y-6">
                  {(showAllVolunteer ? allVolunteer : allVolunteer.slice(0, 1)).map((vol) => (
                    <div key={vol.id} className="flex space-x-4">
                      <div className={`w-12 h-12 ${vol.logoColor} rounded flex items-center justify-center text-white font-bold text-xs`}>
                        {vol.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{vol.role}</h3>
                        <p className="text-gray-700">{vol.organization} · {vol.cause}</p>
                        <p className="text-sm text-gray-600">{vol.duration}</p>
                        <p className="text-gray-700 mt-2">{vol.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllVolunteer(!showAllVolunteer)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllVolunteer ? 'Show less' : `Show all ${allVolunteer.length} volunteer experiences →`}
                  </button>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                  <button className="text-sm text-gray-600 hover:text-blue-600">
                    See related projects & experience
                  </button>
                </div>
                <div className="space-y-4">
                  {(showAllSkills ? allSkills : allSkills.slice(0, 6)).map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <button className="text-sm text-gray-600 hover:text-blue-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600">Endorsed by {skill.endorsements} colleagues who are skilled in this</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllSkills ? 'Show less' : `Show all ${allSkills.length} skills →`}
                  </button>
                </div>
              </div>
            </div>

            {/* Accomplishments Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Accomplishments</h2>
                <div className={`space-y-6 ${!showAllAccomplishments ? 'max-h-96 overflow-hidden' : ''}`}>
                  {/* Publications */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Publications</h3>
                    <div className={`space-y-3 ${!showAllAccomplishments ? 'max-h-24 overflow-hidden' : ''}`}>
                      <div>
                        <h4 className="font-medium text-gray-900">Optimizing React Performance at Scale</h4>
                        <p className="text-sm text-gray-600">Medium · Dec 15, 2023</p>
                        <p className="text-sm text-gray-700 mt-1">
                          A comprehensive guide to performance optimization techniques for large React applications.
                        </p>
                      </div>
                      {showAllAccomplishments && (<div>
                        <h4 className="font-medium text-gray-900">Microservices Architecture Best Practices</h4>
                        <p className="text-sm text-gray-600">IEEE Software · Sep 2023</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Research paper on scalable microservices design patterns and implementation strategies.
                        </p>
                      </div>)}
                    </div>
                  </div>

                  {/* Projects */}
                  {showAllAccomplishments && (<div>
                    <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Open Source React Component Library</h4>
                        <p className="text-sm text-gray-600">Jan 2023 - Present</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Created and maintain a popular React component library with 10k+ GitHub stars. 
                          Used by 500+ companies worldwide.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">AI-Powered Code Review Tool</h4>
                        <p className="text-sm text-gray-600">Jun 2022 - Dec 2022</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Built an ML-powered tool that automatically reviews code for security vulnerabilities and performance issues.
                        </p>
                      </div>
                    </div>
                  </div>)}

                  {/* Honors & Awards */}
                  {showAllAccomplishments && (<div>
                    <h3 className="font-semibold text-gray-900 mb-2">Honors & awards</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Google Peer Bonus Award</h4>
                        <p className="text-sm text-gray-600">Google · Nov 2023</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Recognized for exceptional collaboration and technical leadership in cross-team initiatives.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Women in Tech Leadership Award</h4>
                        <p className="text-sm text-gray-600">Tech Women Network · Mar 2023</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Awarded for outstanding contributions to diversity and inclusion in technology.
                        </p>
                      </div>
                    </div>
                  </div>)}

                  {/* Courses */}
                  {showAllAccomplishments && (<div>
                    <h3 className="font-semibold text-gray-900 mb-2">Courses</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Machine Learning Specialization</h4>
                        <p className="text-sm text-gray-600">Stanford University · Coursera · 2023</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">System Design Interview</h4>
                        <p className="text-sm text-gray-600">Educative · 2022</p>
                      </div>
                    </div>
                  </div>)}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllAccomplishments(!showAllAccomplishments)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllAccomplishments ? 'Show less' : 'Show all accomplishments →'}
                  </button>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Interests</h2>
                <div className="grid grid-cols-2 gap-4">
                  {(showAllInterests ? allInterests : allInterests.slice(0, 6)).map((interest, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className={`w-12 h-12 ${interest.logoColor} rounded ${interest.logo ? 'flex items-center justify-center text-white font-bold' : 'rounded-full'}`}>
                        {interest.logo || ''}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{interest.name}</h4>
                        <p className="text-xs text-gray-600">{interest.type} • {interest.followers} followers</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllInterests(!showAllInterests)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllInterests ? 'Show less' : 'Show all interests →'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Language */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Profile language</h3>
                <p className="text-sm text-gray-600">English</p>
              </div>
            </div>

            {/* Public Profile */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Public profile & URL</h3>
                <p className="text-sm text-gray-600 mb-2">www.linkedin.com/in/sarah-johnson</p>
              </div>
            </div>

            {/* People Also Viewed */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">People also viewed</h3>
                <div className="space-y-3">
                  {(showAllPeopleViewed ? allPeopleViewed : allPeopleViewed.slice(0, 5)).map((person, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-900">{person.name}</h4>
                        <p className="text-xs text-gray-600">{person.title}</p>
                        <button className="text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded-full mt-1 hover:bg-blue-50">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 text-center">
                  <button 
                    onClick={() => setShowAllPeopleViewed(!showAllPeopleViewed)}
                    className="text-sm text-gray-600 hover:text-blue-600"
                  >
                    {showAllPeopleViewed ? 'Show less' : 'Show more →'}
                  </button>
                </div>
              </div>
            </div>

            {/* People You May Know */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">People you may know</h3>
                <div className="space-y-3">
                  {(showAllPeopleKnow ? allPeopleKnow : allPeopleKnow.slice(0, 3)).map((person, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-900">{person.name}</h4>
                        <p className="text-xs text-gray-600">{person.title}</p>
                        <p className="text-xs text-gray-500">{person.mutualConnections} mutual connections</p>
                        <button className="text-xs text-blue-600 border border-blue-600 px-3 py-1 rounded-full mt-1 hover:bg-blue-50">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3 text-center">
                  <button 
                    onClick={() => setShowAllPeopleKnow(!showAllPeopleKnow)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllPeopleKnow ? 'Show less' : 'Show more →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;