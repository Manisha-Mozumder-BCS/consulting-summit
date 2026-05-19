import { useState, useEffect } from 'react'
import './App.css'
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
  ChevronDown,
  Menu,
  X,
  Mail,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Star,
  Briefcase,
  GraduationCap,
  Rocket,
  UserCheck,
  MessageCircle,
  Presentation,
  Coffee,
  Mic2,
  Handshake,
} from 'lucide-react'

const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfwXBPXP2zJgyaO7IGYYXdritBnEvJT1m6_i9pWRRpGR6OUaQ/viewform?usp=publish-editor'

const BRAND_BLUE = '#82ABE3'
const BASE = import.meta.env.BASE_URL

function CountdownTimer() {
  const targetDate = new Date('2026-07-18T09:00:00+02:00').getTime()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime()
      const diff = targetDate - now
      if (diff <= 0) return
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white/20">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-white/80 mt-2 font-medium">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Who Should Attend', href: '#audience' },
    { label: 'What to Expect', href: '#expect' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Venue', href: '#venue' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <img
              src={scrolled ? `${BASE}images/logo-light.jpg` : `${BASE}images/logo-dark.png`}
              alt="Manisha Mozumder Business Consulting Services"
              className="h-10 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  scrolled ? 'text-gray-700 hover:text-[#82ABE3]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Register Now
            </a>
          </div>

          <button
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-700 font-medium py-2 hover:text-[#82ABE3]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-white font-semibold px-5 py-3 rounded-full mt-2"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${BASE}images/hero-berlin.jpg`}
          alt="Berlin skyline at sunset"
          className="w-full h-full object-cover"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#82ABE3]/85 via-[#5a8fd4]/80 to-[#3a6db0]/90" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
          <Star size={16} className="text-yellow-300" />
          <span className="text-white/95 text-sm font-medium">One Day. Endless Opportunities.</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Consulting
          <br />
          Ecosystem Summit
          <span className="block text-yellow-300 mt-2">2026</span>
        </h1>

        <p className="text-xl sm:text-2xl font-semibold text-white mb-3">
          Connect. Collaborate. Grow Together.
        </p>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed">
          A one-day summit bringing together consulting firms, startups, investors, students and industry experts to build a stronger consulting ecosystem.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/90 mb-10">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span className="font-medium">July 18 &ndash; 19, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span className="font-medium">Berlin, Germany</span>
          </div>
        </div>

        <CountdownTimer />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#82ABE3] font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Register Now <ArrowRight size={20} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white font-medium border-2 border-white/40 px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Learn More <ChevronDown size={20} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: BRAND_BLUE }}
          >
            About the Summit
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Be Part of the Ecosystem Movement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Consulting Ecosystem Summit 2026 is an inaugural one-day event bringing together consulting firms,
            startups, investors, students and industry experts to build a stronger consulting ecosystem. Hosted by{' '}
            <strong className="text-gray-800">Manisha Mozumder Business Consulting Services</strong>,
            this summit sets the stage for meaningful connections and real opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#82ABE3]/30">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-5"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              <Handshake size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Meet consulting professionals, founders, investors and ecosystem builders from across industries.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#82ABE3]/30">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-5"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborate</h3>
            <p className="text-gray-600 leading-relaxed">
              Engage in workshops, round tables and interactive sessions designed to solve real challenges together.
            </p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#82ABE3]/30">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-5"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Grow Together</h3>
            <p className="text-gray-600 leading-relaxed">
              Discover opportunities, showcase your startup and build relationships that drive the future of consulting.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Learn. Connect. Collaborate. Grow.
          </p>
          <p className="text-lg text-gray-500">
            Meaningful Connections. Real Opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  const audiences = [
    {
      icon: <Briefcase size={32} />,
      title: 'Consulting Firms',
      description: 'Consulting firms of all sizes and specialisations.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Startups & Entrepreneurs',
      description: 'Early-stage startups, student entrepreneurs, SMEs & aspiring founders.',
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Students & University Clubs',
      description: 'University consulting clubs, students, innovation labs & entrepreneurship centres.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Investors & Ecosystem Enablers',
      description: 'Investors, accelerators, incubators, coworking spaces & ecosystem partners.',
    },
    {
      icon: <UserCheck size={32} />,
      title: 'Industry Experts',
      description: 'Senior consultants, industry leaders & practitioners.',
    },
  ]

  return (
    <section id="audience" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: BRAND_BLUE }}
          >
            Who Should Attend?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for the Entire Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you are a seasoned consultant, an aspiring founder, or an investor looking for the next opportunity — this summit is for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#82ABE3]/30"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpectSection() {
  const items = [
    'Exhibition Area with Consulting Firms, Startups & Ecosystem Partners',
    'Seminars & Workshops across key tracks',
    'Round Table Discussions on real challenges and solutions',
    'Startup Showcases & Networking Opportunities',
    'Investor Networking',
  ]

  return (
    <section id="expect" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ color: BRAND_BLUE }}
            >
              What to Expect?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              A Day of Impact & Opportunity
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Consulting Ecosystem Summit is packed with opportunities to learn, network and grow. Here is what awaits you:
            </p>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#E8F5E9' }}
                  >
                    <CheckCircle size={18} style={{ color: '#43A047' }} />
                  </div>
                  <p className="text-gray-700 font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border-2 border-dashed" style={{ borderColor: BRAND_BLUE, backgroundColor: '#f0f6ff' }}>
              <p className="text-lg font-bold text-gray-900">
                Meaningful Connections. Real Opportunities.
              </p>
              <p className="text-gray-600 mt-1">
                Be part of a community that builds impact and creates value.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={`${BASE}images/hero-berlin.jpg`}
              alt="Berlin - Summit Location"
              className="w-full rounded-2xl shadow-2xl"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80'
              }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3">
                <Calendar size={20} style={{ color: BRAND_BLUE }} />
                <div>
                  <p className="font-bold text-gray-900">July 18 &ndash; 19, 2026</p>
                  <p className="text-sm text-gray-500">Berlin, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HighlightsSection() {
  const highlights = [
    {
      icon: <Target size={28} />,
      title: 'Exhibition & Networking - All Day',
      description: 'Visit stalls, explore services, connect and collaborate.',
    },
    {
      icon: <Presentation size={28} />,
      title: 'Seminars & Workshops',
      description: 'Multiple parallel sessions across different tracks.',
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Round Table Discussions',
      description: 'Interactive discussions with experts, founders & professionals.',
    },
    {
      icon: <Rocket size={28} />,
      title: 'Startup Showcases',
      description: 'Discover innovative startups and their solutions.',
    },
    {
      icon: <Coffee size={28} />,
      title: 'Networking Mixer',
      description: 'Build relationships that drive the future.',
    },
    {
      icon: <Mic2 size={28} />,
      title: 'Investor Networking',
      description: 'Connect with investors and ecosystem enablers looking for the next opportunity.',
    },
  ]

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: BRAND_BLUE }}
          >
            Event Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes This Summit Special
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A carefully curated programme designed to maximise your impact and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#82ABE3]/30"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VenueSection() {
  return (
    <section id="venue" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
            style={{ color: BRAND_BLUE }}
          >
            Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Berlin, Germany
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Europe's vibrant capital of innovation and culture welcomes you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={`${BASE}images/hero-berlin.jpg`}
              alt="Berlin, Germany"
              className="w-full rounded-2xl shadow-xl"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80'
              }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Berlin?</h3>
            <div className="space-y-5">
              {[
                {
                  icon: <Globe size={20} />,
                  title: 'International Hub',
                  desc: 'A thriving centre for global business and startups, Berlin offers the perfect backdrop for forward-thinking discussions.',
                },
                {
                  icon: <MapPin size={20} />,
                  title: 'World-Class Venues',
                  desc: 'State-of-the-art conference facilities with cutting-edge technology and comfortable spaces.',
                },
                {
                  icon: <Users size={20} />,
                  title: 'Cultural Richness',
                  desc: 'Explore a city steeped in history, art and innovation during your time at the summit.',
                },
                {
                  icon: <Lightbulb size={20} />,
                  title: 'Easy Access',
                  desc: 'Excellent connectivity via Berlin Brandenburg Airport (BER) with direct flights worldwide.',
                },
              ].map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={`${BASE}images/hero-berlin.jpg`}
          alt="Berlin"
          className="w-full h-full object-cover"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#82ABE3]/95 to-[#5a8fd4]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          Register, Participate & Make an Impact!
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed">
          Be part of a community that builds impact and creates value.
        </p>
        <p className="text-xl font-semibold text-yellow-300 mb-10">
          Learn. Connect. Collaborate. Grow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#82ABE3] font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Register Now <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-white/70 mt-6 text-sm">More details & registration coming soon.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${BASE}images/logo-dark.png`}
                alt="Manisha Mozumder Business Consulting Services"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="text-white font-bold text-lg">Consulting Ecosystem Summit</div>
                <div className="text-sm text-gray-500">by Manisha Mozumder</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              A one-day summit bringing together consulting firms, startups, investors, students and industry experts to build a stronger consulting ecosystem.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/manisha-mozumder-business-consulting-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#82ABE3] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:manisha.mozumder@gmail.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#82ABE3] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">Who Should Attend</a></li>
              <li><a href="#expect" className="hover:text-white transition-colors">What to Expect</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Highlights</a></li>
              <li><a href="#venue" className="hover:text-white transition-colors">Venue</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Event Details</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Calendar size={14} style={{ color: BRAND_BLUE }} />
                <span>July 18 &ndash; 19, 2026</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} style={{ color: BRAND_BLUE }} />
                <span>Berlin, Germany</span>
              </li>
            </ul>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold mt-6 text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              Register <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; 2026 Manisha Mozumder Business Consulting Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ExpectSection />
      <HighlightsSection />
      <VenueSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
