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
  Diamond,
  Gem
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
  const [expandedExperienceIds, setExpandedExperienceIds] = useState(new Set());
  const [showMoreProject1, setShowMoreProject1] = useState(false);
  const [showMoreProject2, setShowMoreProject2] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const projectLink1 = "https://github.com/yourusername/options-data-manager"; // TODO: Replace with actual link
  const projectLink2 = "https://github.com/yourusername/progress-tracker"; // TODO: Replace with actual link

  const handleConnectClick = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000); // Hide after 4 seconds
  };

  const handleContactInfoClick = () => {
    window.location.href = "mailto:dindorevedant28@gmail.com";
  };

  const handleMailClick = () => {
    window.location.href = "mailto:dindorevedant28@gmail.com";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/yourusername", "_blank");
  };

  const handlePortfolioClick = () => {
    window.open("https://yourportfolio.com", "_blank");
  };

  const toggleExperienceDescription = (id) => {
    setExpandedExperienceIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const aboutText = `I'm a passionate Software Engineer and Machine Learning/Data Analyst with hands‑on experience in designing and optimizing complex data‑processing pipelines and scalable back‑end systems. In a recent role, I built and tuned sophisticated algorithms for big‑data applications—reducing end‑to‑end processing times by 37%—and collaborated with a cross‑functional team of engineers, analysts, and traders to deliver real‑time insights. As an ML & Data Analyst Intern, I engineered 4+ advanced models (classification, regression, time‑series), slashed compute time by 29%, and developed a React‑based analytics app for Motilal Oswal Fin Corp to visualize market signals and backtest strategies.

I thrive on turning complex datasets into clear, actionable dashboards and building performant, maintainable systems that drive measurable business impact. I'm now seeking opportunities where I can blend deep technical problem solving with data‑driven decision making—whether that's architecting scalable data platforms, crafting high‑throughput ML services, or innovating in a dynamic product environment. Let's connect!

Key Skills:
• Languages & Frameworks: Python • C++ • JavaScript (Node.js, React)
• Data & ML: Hadoop • Pandas • scikit‑learn • TensorFlow • Time‑Series Analysis
• Algorithms & Optimization: Advanced DSA • Big‑Data Algorithm Design • Performance Tuning
• Tools & Platforms: Git • Docker • AWS (EC2, S3) • CI/CD Pipelines
• Collaboration & Methodologies: Agile/Scrum • Cross‑Functional Team Leadership • Data Visualization (D3.js, Chart.js)`;

  const truncatedAbout = aboutText.split('\n\n').slice(0, 2).join('\n\n');

  const allExperiences = [
    {
      id: 1,
      company: "Mehta Prop Firm",
      logo: "M",
      logoColor: "bg-blue-500",
      logoUrl: "/images/companies/mehta-prop-firm.jpg",
      title: "Machine Learning & Data Analyst Intern",
      type: "Internship",
      duration: "Jun 2019 - Dec 2021 · 5 mos",
      location: "Pune · Hybrid",
      description: [
        "Engineered and deployed 4+ sophisticated ML models—spanning classification, regression, and time‑series approaches—slashing overall model compute time by 29%.",
        "Architected end‑to‑end data pipelines on Hadoop and Python, ingesting and pre‑processing large, heterogeneous datasets to surface key trading and operational insights.",
        "Transformed complex analytical findings into clear, interactive charts and dashboards (React) for non‑technical stakeholders, accelerating data‑driven decision‑making.",
        "Collaborated within a 4‑member analytics team and partnered closely with traders to define requirements, validate model outputs, and iterate on predictive strategies.",
        "Integrated ML endpoints into a Node.js backend, ensuring seamless full‑stack delivery of data services and real‑time scoring capabilities."
      ],
      skills: ["Python", "Hadoop", "Data Pipelines", "Machine Learning", "React", "Node.js"]
    },
    {
      id: 2,
      company: "Motilal Oswal Fin Corp",
      logo: "A",
      logoColor: "bg-red-500",
      logoUrl: "/images/companies/motilal-oswal.jpg",
      title: "Software Developer",
      type: "Internship",
      duration: "Aug 2017 - May 2019 · 1 yr 10 mos",
      location: "Pune · Hybrid",
      description: [
        "Built responsive web applications using React and Redux for Airbnb's booking platform",
        "Implemented accessibility features achieving WCAG 2.1 AA compliance",
        "Optimized for mobile devices resulting in 20% increase in mobile conversions",
        "Collaborated with UX team to A/B test new features and improve user engagement"
      ],
      skills: ["Python", "Machine Learning", "Data Analytics", "React", "Node.js"]
    },
    {
      id: 3,
      company: "Sutherland",
      logo: "G",
      logoColor: "bg-blue-600",
      logoUrl: "/images/companies/sutherland.jpg",
      title: "Software Engineer",
      type: "Internship",
      duration: "Jan 2022 - Present · 3 mos",
      location: "Remote",
      description: [
        "Designed and optimized complex data‑structuring algorithms for big‑data applications, cutting end‑to‑end processing times by 37%.",
        "Revamped backend architecture to boost performance and scalability, enabling the system to handle a 2× increase in data throughput.",
        "Partnered within a 6‑person cross‑functional squad (data engineers & analysts) to translate analytic requirements into high‑efficiency pipelines.",
        "Leveraged Python, C++, and core DSA principles to build and tune data‑processing modules; interfaced with Node.js and React components for full‑stack integration.",
      ],
      skills: ["CPP", "React", "Node.js", "Python", "DSA"]
    },
    
  ];

  const allEducation = [
    {
      id: 1,
      school: "Savitribai Phule Pune University",
      logo: "S",
      logoColor: "bg-red-600",
      logoUrl: "/images/universities/pune-university.jpg",
      degree: "Bachelor in Engineering - BE, E & Computer Engineering",
      duration: "2021 - 2025",
      // description: "Graduated Magna Cum Laude. Focused on algorithms, data structures, and software engineering principles."
    },
    {
      id: 2,
      school: "KBP Mahavidyalay",
      logo: "KBP",
      logoColor: "bg-blue-800",
      logoUrl: "/images/universities/kbp-mahavidyalay.jpg",
      degree: "Higher Secondary",
      duration: "2019 - 2021",
      // description: "Specialized in Machine Learning and Distributed Systems. Thesis on scalable recommendation systems."
    }
  ];

  const allLicenses = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services (AWS)",
      logo: "AWS",
      logoColor: "bg-orange-500",
      logoUrl: "/images/certifications/aws.jpg",
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
      logoUrl: "/images/certifications/google-cloud.jpg",
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
      logoUrl: "/images/certifications/mongodb.jpg",
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
    { name: "Python", endorsements: 7 },
    { name: "Machine Learning", endorsements: 7 },
    { name: "React.js", endorsements: 12 },
    { name: "JavaScript", endorsements: 18 },
    { name: "Node.js", endorsements: 14 },
    { name: "TypeScript", endorsements: 9 },
    { name: "CPP", endorsements: 6 },
    { name: "AWS", endorsements: 11 },
    { name: "Docker", endorsements: 8 },
    { name: "SQL / NoSQL", endorsements: 5 },
    { name: "Hadoop", endorsements: 4 },
    { name: "Redis", endorsements: 3 },
    { name: "Git", endorsements: 15 },
    { name: "Agile Methodologies", endorsements: 10 },
    { name: "System Design", endorsements: 8 }
  ];

  const allInterests = [
    { name: "Graviton Research Capital LLP", type: "Financial Services", followers: "69,249", logo: "G", logoColor: "bg-blue-600", link: "https://in.linkedin.com/company/gravitonresearchcapital", logoUrl: "/images/interests/graviton.jpg" },
    { name: "Tower Research Capital", type: "Financial Services", followers: "177,781", logo: "T", logoColor: "bg-black", link: "https://in.linkedin.com/company/tower-research-capital", logoUrl: "/images/interests/tower-research.jpg" },
    { name: "Jump Trading", type: "Financial Services", followers: "96,130", logo: "JT", logoColor: "bg-orange-500", link: "https://in.linkedin.com/company/jump-trading", logoUrl: "/images/interests/jump-trading.jpg" },
    { name: "FYERS", type: "Financial Services", followers: "22,703", logo: "F", logoColor: "bg-blue-500", link: "https://in.linkedin.com/company/fyers-securities-pvt-ltd", logoUrl: "/images/interests/fyers.jpg" },
    { name: "Kaggle", type: "IT Services and IT Consulting", followers: "461,185", logo: "", logoColor: "bg-gray-300", link: "https://www.linkedin.com/company/kaggle", logoUrl: "/images/interests/kaggle.jpg" },
    { name: "Hudson River Trading", type: "Financial Services", followers: "134,935", logo: "N", logoColor: "bg-red-500", link: "https://www.linkedin.com/company/hudson-river-trading", logoUrl: "/images/interests/hrt.jpg" },
    { name: "Microsoft", type: "Software Development", followers: "25,988,887", logo: "M", logoColor: "bg-blue-500", link: "https://www.linkedin.com/company/microsoft", logoUrl: "/images/interests/microsoft.jpg" },
    { name: "Tesla", type: "Motor Vehicle Manufacturing", followers: "12,253,461", logo: "T", logoColor: "bg-red-600", link: "https://www.linkedin.com/company/tesla-motors", logoUrl: "/images/interests/tesla.jpg" },
  ];

  const allPeopleViewed = [
    { name: "Michael Chen", title: "Product Manager at Apple", mutualConnections: 0, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" },
    { name: "Emily Rodriguez", title: "UX Designer at Netflix", mutualConnections: 0, imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face" },
    { name: "David Kim", title: "Data Scientist at Microsoft", mutualConnections: 0, imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" },
    { name: "Lisa Wang", title: "Engineering Manager at Tesla", mutualConnections: 0, imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face" },
    { name: "James Wilson", title: "DevOps Engineer at Amazon", mutualConnections: 0, imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face" },
    { name: "Maria Garcia", title: "Frontend Developer at Spotify", mutualConnections: 0, imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face" }
  ];

  const allPeopleKnow = [
    { name: "Alex Thompson", title: "Full Stack Developer at Stripe", mutualConnections: 2, imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop&crop=face" },
    { name: "Jessica Wu", title: "Technical Lead at Amazon", mutualConnections: 5, imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=48&h=48&fit=crop&crop=face" },
    { name: "Robert Martinez", title: "Senior Developer at Shopify", mutualConnections: 3, imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=48&h=48&fit=crop&crop=face" },
    { name: "Amanda Foster", title: "Software Architect at Adobe", mutualConnections: 4, imageUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=48&h=48&fit=crop&crop=face" },
    { name: "Kevin Chang", title: "Mobile Developer at Uber", mutualConnections: 1, imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=48&h=48&fit=crop&crop=face" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Notification */}
      {showNotification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">LinkedIn Clone</p>
                <p className="text-sm text-gray-600">Please go to LinkedIn Page to Connect</p>
              </div>
              <button 
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
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
                <img 
                  src="/images/profile/profile.jpg" 
                  alt="Profile" 
                  className="w-6 h-6 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=30&h=30&fit=crop&crop=face';
                  }}
                />
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
              <div className="h-16 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
                {/* Cover Photo for Left Sidebar */}
                <img 
                  src="/images/profile/cover.jpg" 
                  alt="Cover" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute -bottom-8 left-4">
                  <img 
                    src="/images/profile/profile.jpg" 
                    alt="Vedant Dindore" 
                    className="w-16 h-16 rounded-full border-4 border-white object-cover"
                  />
                </div>
              </div>
              <div className="pt-12 pb-4 px-4">
                <h3 className="font-semibold text-gray-900">Vedant Dindore</h3>
                <p className="text-sm text-gray-600 mb-3">React | Python | Machine Learning Practitioner</p>
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
                    <span>Machine Learning Devs</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>React.js Developers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Financial Firms</span>
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
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
                {/* Cover Photo */}
                <img 
                  src="/images/profile/cover.jpg" 
                  alt="Cover" 
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute -bottom-16 left-6 z-10">
                  <img 
                    src="/images/profile/profile.jpg" 
                    alt="Vedant Dindore" 
                    className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="pt-20 pb-6 px-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Vedant Dindore</h1>
                    <p className="text-lg text-gray-700 mb-1">React | Python | Machine Learning Practitioner</p>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Pune, India</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm mb-4">
                      <span className="text-blue-600 font-semibold">500+ connections</span>
                      <span className="text-gray-400">•</span>
                      <button 
                        onClick={handleContactInfoClick}
                        className="text-blue-600 hover:underline"
                      >
                        Contact info
                      </button>
                      <span className="text-gray-400">•</span>
                      <button 
                        onClick={handleMailClick}
                        className="text-blue-600 hover:underline"
                      >
                        Mail
                      </button>
                      <span className="text-gray-400">•</span>
                      <button 
                        onClick={handleGithubClick}
                        className="text-blue-600 hover:underline"
                      >
                        GitHub
                      </button>
                    </div>
                    <div className="flex items-center space-x-1 text-sm mb-4">
                      <button 
                        onClick={handlePortfolioClick}
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        Portfolio
                      </button>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={handleConnectClick}
                      className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 font-semibold"
                    >
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
                {/* <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <span className="text-sm font-semibold">Google</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <span className="text-sm font-semibold">Stanford University</span>
                  </div>
                </div> */}
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
                    <p className="text-sm text-gray-600 mb-2">Vedant posted this • 2d</p>
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
                    <p className="text-sm text-gray-600 mb-2">Vedant commented on this • 5d</p>
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
                      <img 
                        src={exp.logoUrl} 
                        alt={exp.company}
                        className="w-12 h-12 rounded object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-12 h-12 ${exp.logoColor} rounded flex items-center justify-center text-white font-bold hidden`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-gray-700">{exp.company} · {exp.type}</p>
                        <p className="text-sm text-gray-600">{exp.duration}</p>
                        <p className="text-sm text-gray-600">{exp.location}</p>
                        <ul className="text-gray-700 mt-2 space-y-1">
                          {(expandedExperienceIds.has(exp.id) ? exp.description : exp.description.slice(0, 3)).map((bullet, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.description.length > 3 && (
                          <button 
                            onClick={() => toggleExperienceDescription(exp.id)}
                            className="text-blue-600 hover:underline mt-2 font-semibold flex items-center text-sm"
                          >
                            {expandedExperienceIds.has(exp.id) ? (
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
                        )}
                        {!showAllExperiences && exp.skills && exp.skills.length > 0 && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Gem className="w-6 h-4 text-gray-800" />
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
                      <img 
                        src={edu.logoUrl} 
                        alt={edu.school}
                        className="w-12 h-12 rounded object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-12 h-12 ${edu.logoColor} rounded flex items-center justify-center text-white font-bold hidden`}>
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
                      <img 
                        src={license.logoUrl} 
                        alt={license.issuer}
                        className="w-12 h-12 rounded object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-12 h-12 ${license.logoColor} rounded flex items-center justify-center text-white font-bold text-xs hidden`}>
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
            {/* <div className="bg-white rounded-lg border border-gray-200 mb-4">
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
            </div> */}

            {/* Skills Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
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

            {/* Projects Section */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Projects</h2>
                <div className="space-y-6">
                  {/* Options EOD Data Analyzer Project */}
                  <a href={projectLink1} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 rounded transition">
                    <h4 className="font-medium text-blue-700 underline hover:text-blue-900">Options EOD Data Analyzer</h4>
                    <p className="text-sm text-gray-600">Jan 2023 - Present</p>
                    <p className="text-sm text-gray-700 mt-1">
                      {showMoreProject1 ? (
                        <>
                          Developed a sophisticated financial data analytics platform that processes NSE EOD (End-of-Day) reports and performs advanced quantitative analysis for options trading strategies.<br/>
                          <b>Core Capabilities:</b> Automated ingestion and preprocessing of large-scale financial datasets with real-time data validation and cleaning pipelines.<br/>
                          <b>Advanced Analytics:</b><br/>
                          • Machine Learning Models: Predictive analytics for volatility forecasting and pattern recognition<br/>
                          • Monte Carlo Simulations: Risk assessment and option pricing using 10,000+ simulation paths<br/>
                          • Statistical Analysis: Correlation matrices, CVaR, and advanced risk metrics for portfolio optimization<br/>
                          • Dynamic Volatility Modeling: GARCH and stochastic volatility models for market analysis<br/>
                          • Pattern Detection: Technical analysis algorithms for identifying support/resistance levels<br/>
                          <b>Technical Implementation:</b><br/>
                          • High-performance data processing using NumPy and Pandas for large datasets<br/>
                          • Real-time analytics dashboard with interactive visualizations (Plotly, D3.js)<br/>
                          • RESTful API architecture for seamless integration with trading platforms<br/>
                          • Database optimization for handling multilayered files historical data<br/>
                          <b>Outcome:</b><br/>
                          Created a comprehensive quantitative analysis toolkit that processes NSE EOD reports efficiently, providing institutional-grade analytics for options trading strategies with 99.9% data accuracy and sub-second query response times.
                        </>
                      ) : (
                        <>Developed a sophisticated financial data analytics platform that processes NSE EOD reports and performs advanced quantitative analysis including machine learning, Monte Carlo simulations, and risk metrics...</>
                      )}
                    </p>
                    <button 
                      type="button"
                      onClick={e => { e.preventDefault(); setShowMoreProject1(!showMoreProject1); }}
                      className="text-blue-600 hover:underline mt-2 font-semibold flex items-center text-sm"
                    >
                      {showMoreProject1 ? (
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
                    {!showMoreProject1 && !showAllProjects && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Gem className="w-6 h-4 text-gray-800" />
                        <div className="text-sm">
                          <span className="font-bold text-gray-900">Python</span>
                          <span className="text-gray-600">, </span>
                          <span className="font-bold text-gray-900">Machine Learning</span>
                          <span className="text-gray-600"> and </span>
                          <span className="font-bold text-gray-900">3 additional skills</span>
                        </div>
                      </div>
                    )}
                    {(showMoreProject1 || showAllProjects) && (
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm font-semibold text-gray-700">Skills:</span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Python</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Machine Learning</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">NumPy</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Pandas</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Financial Analytics</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">RESTful APIs</span>
                        </div>
                      </div>
                    )}
                  </a>
                  {/* Progress Tracker Project */}
                  <a href={projectLink2} target="_blank" rel="noopener noreferrer" className="block hover:bg-gray-50 rounded transition">
                    <h4 className="font-medium text-blue-700 underline hover:text-blue-900">Progress Tracker</h4>
                    <p className="text-sm text-gray-600">Jun 2022 - Dec 2022</p>
                    <p className="text-sm text-gray-700 mt-1">
                      {showMoreProject2 ? (
                        <>
                          Built a fully integrated productivity tracker that gamifies personal task management using financial market mechanics.<br/>
                          <b>Key Features:</b> Stock-based Progress Tracker: Users define "stocks" (e.g., Coding Prep, Projects, To-Dos), with task completions rewarding/deducting points tied to each stock.<br/>
                          <b>Dynamic Indexing:</b> A custom index is calculated in real time, visualized through line charts, reflecting overall progress and task trends.<br/>
                          <b>Simulated Trading System:</b> Users can buy/sell their own stocks, adding a market-based urgency and accountability to task completion.<br/>
                          <b>Options Segment:</b> Implemented realistic options trading mechanisms including decay, intrinsic value, and time value — mapped to task timelines and deadlines.<br/>
                          <b>Strategic Tools:</b><br/>
                          Journal and notes system for personal reflections<br/>
                          Task calendar with daily/monthly views<br/>
                          Pattern detection for behavioral analysis<br/>
                          Retrospection mode for progress reviews<br/>
                          Strategic planning modules for goal setting<br/>
                          <b>Tech Stack:</b> React, Node.js, Python, D3.js, Python, etc.<br/>
                          <b>Outcome:</b><br/>
                          Created a psychologically engaging system that merges productivity with gamified trading, encouraging timely execution of goals through simulated financial stakes.
                        </>
                      ) : (
                        <>Built a fully integrated productivity tracker that gamifies personal task management using financial market mechanics...</>
                      )}
                    </p>
                    <button 
                      type="button"
                      onClick={e => { e.preventDefault(); setShowMoreProject2(!showMoreProject2); }}
                      className="text-blue-600 hover:underline mt-2 font-semibold flex items-center text-sm"
                    >
                      {showMoreProject2 ? (
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
                    {!showMoreProject2 && !showAllProjects && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Gem className="w-6 h-4 text-gray-800" />
                        <div className="text-sm">
                          <span className="font-bold text-gray-900">React</span>
                          <span className="text-gray-600">, </span>
                          <span className="font-bold text-gray-900">Node.js</span>
                          <span className="text-gray-600"> and </span>
                          <span className="font-bold text-gray-900">4 additional skills</span>
                        </div>
                      </div>
                    )}
                    {(showMoreProject2 || showAllProjects) && (
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm font-semibold text-gray-700">Skills:</span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">React</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Node.js</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Python</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">D3.js</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">JavaScript</span>
                          <span className="px-2 py-1 bg-gray-100 text-xs rounded">Data Visualization</span>
                        </div>
                      </div>
                    )}
                  </a>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4 text-center">
                  <button 
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="text-base font-semibold text-gray-600 hover:text-blue-600"
                  >
                    {showAllProjects ? 'Show less' : 'Show all projects →'}
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
                  {/* <div>
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
                  </div> */}

                  {/* Honors & Awards */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Honors & awards</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Algo Building Competition</h4>
                        <p className="text-sm text-gray-600">HDFC | Deutsche Bank · Nov 2023</p>
                        <p className="text-sm text-gray-700 mt-1">
                           Secured first place in a competitive algorithm development event
                           organized by HDFC and Deutsche Bank.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Hack to the Future</h4>
                        <p className="text-sm text-gray-600">Finastra · Mar 2023</p>
                        <p className="text-sm text-gray-700 mt-1">
                          Awarded for outstanding contributions to diversity and inclusion in technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Courses */}
                  {/* <div>
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
                  </div> */}
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
                    <a
                      key={index}
                      href={interest.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                    >
                      <img 
                        src={interest.logoUrl} 
                        alt={interest.name}
                        className="w-12 h-12 rounded object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-12 h-12 ${interest.logoColor} rounded ${interest.logo ? 'flex items-center justify-center text-white font-bold' : 'rounded-full'} hidden`}>
                        {interest.logo || ''}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700 underline hover:text-blue-900 text-sm">{interest.name}</h4>
                        <p className="text-xs text-gray-600">{interest.type} • {interest.followers} followers</p>
                      </div>
                    </a>
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
                <p className="text-sm text-gray-600 mb-2">www.linkedin.com/in/vedant-dindore</p>
              </div>
            </div>

            {/* People Also Viewed */}
            <div className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-4">People also viewed</h3>
                <div className="space-y-3">
                  {(showAllPeopleViewed ? allPeopleViewed : allPeopleViewed.slice(0, 5)).map((person, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img 
                        src={person.imageUrl} 
                        alt={person.name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="w-12 h-12 bg-gray-300 rounded-full hidden"></div>
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
                      <img 
                        src={person.imageUrl} 
                        alt={person.name}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="w-12 h-12 bg-gray-300 rounded-full hidden"></div>
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