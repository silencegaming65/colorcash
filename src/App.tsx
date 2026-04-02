import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  List, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Star,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Gift,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { APPS, BLOG_POSTS, FAQS } from './constants';
import { EarningApp, BlogPost } from './types';

type Page = 'home' | 'apps' | 'blog' | 'faq' | 'contact' | 'how-to-earn' | 'privacy' | 'terms' | 'disclaimer' | 'article';

const NavItem = ({ page, label, icon: Icon, currentPage, onClick }: { page: Page, label: string, icon: any, currentPage: Page, onClick: (page: Page) => void }) => (
  <button
    onClick={() => onClick(page)}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
      currentPage === page 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
        : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
    }`}
  >
    <Icon size={18} />
    <span className="font-medium">{label}</span>
  </button>
);

const AppCard = ({ app }: { app: EarningApp, key?: string }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative group"
  >
    {app.isHot && (
      <div className="absolute top-4 right-4 z-20 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg animate-pulse">
        <Zap size={12} fill="currentColor" />
        HOT APP
      </div>
    )}
    
    <div className="relative h-48 md:h-56 overflow-hidden">
      <img 
        src={app.image} 
        alt={`${app.name} - Best Color Trading App 2026`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    
    <div className="p-6 md:p-8 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl md:text-2xl font-black text-indigo-950">{app.name}</h2>
        <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-2 py-1 rounded-lg">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-black">{app.rating}</span>
        </div>
      </div>
      
      <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl text-sm font-bold inline-block mb-6 self-start">
        🎁 {app.bonus}
      </div>
      
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 flex-grow">
        {app.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 mb-8">
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Pros</h3>
          <ul className="space-y-2">
            {app.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-emerald-700 font-bold">
                <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Cons</h3>
          <ul className="space-y-2">
            {app.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-rose-700 font-bold">
                <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a 
        href={app.referralLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-100 group/btn"
      >
        Register Now
        <ExternalLink size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
      </a>
    </div>
  </motion.div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Adsterra Popunder Logic
    if (!sessionStorage.getItem('ad_triggered')) {
      const triggerPopunder = () => {
        // In a real scenario, you'd use the Adsterra script or a direct link
        // window.open('https://your-adsterra-url.com', '_blank');
        console.log('Adsterra Popunder Triggered');
        sessionStorage.setItem('ad_triggered', 'true');
        window.removeEventListener('click', triggerPopunder);
      };
      window.addEventListener('click', triggerPopunder);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (page: Page, article: BlogPost | null = null) => {
    setCurrentPage(page);
    setSelectedArticle(article);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-indigo-600 p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <TrendingUp className="text-white" size={20} md:size={24} />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-indigo-950">COLORCASH</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavItem page="home" label="Home" icon={Home} currentPage={currentPage} onClick={navigateTo} />
            <NavItem page="apps" label="Apps List" icon={List} currentPage={currentPage} onClick={navigateTo} />
            <NavItem page="blog" label="Blog" icon={BookOpen} currentPage={currentPage} onClick={navigateTo} />
            <NavItem page="faq" label="FAQ" icon={HelpCircle} currentPage={currentPage} onClick={navigateTo} />
            <NavItem page="contact" label="Contact" icon={Mail} currentPage={currentPage} onClick={navigateTo} />
            <button 
              onClick={() => navigateTo('how-to-earn')}
              className={`ml-4 px-6 py-2 rounded-full font-black text-sm transition-all ${
                currentPage === 'how-to-earn' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'bg-indigo-950 text-white hover:bg-indigo-800'
              }`}
            >
              How to Earn
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-indigo-950 bg-white rounded-xl shadow-sm border border-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-8 flex flex-col gap-4">
                <NavItem page="home" label="Home" icon={Home} currentPage={currentPage} onClick={navigateTo} />
                <NavItem page="apps" label="Apps List" icon={List} currentPage={currentPage} onClick={navigateTo} />
                <NavItem page="blog" label="Blog" icon={BookOpen} currentPage={currentPage} onClick={navigateTo} />
                <NavItem page="faq" label="FAQ" icon={HelpCircle} currentPage={currentPage} onClick={navigateTo} />
                <NavItem page="contact" label="Contact" icon={Mail} currentPage={currentPage} onClick={navigateTo} />
                <button 
                  onClick={() => navigateTo('how-to-earn')}
                  className="w-full bg-indigo-600 text-white px-6 py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg"
                >
                  How to Earn <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-32 pb-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Hero Section */}
              <section className="py-12 md:py-24 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest">
                      <Zap size={14} fill="currentColor" />
                      Verified for 2026
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-indigo-950 leading-[1.1] mb-8">
                      Turn Your Phone into a <span className="text-indigo-600">Money-Making Machine</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      Discover the top earning apps with verified payouts, high referral bonuses, and daily rewards. Join thousands of users who are already earning passive income, right from their smartphones.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                      <button 
                        onClick={() => navigateTo('apps')}
                        className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 flex items-center justify-center gap-3 group"
                      >
                        Start Earning Now <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => navigateTo('how-to-earn')}
                        className="bg-white text-indigo-950 border-2 border-indigo-100 px-10 py-5 rounded-2xl font-black text-lg hover:border-indigo-600 transition-all flex items-center justify-center gap-3"
                      >
                        Learn How It Works
                      </button>
                    </div>
                    
                    <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                      <div className="flex items-center gap-2 font-black text-indigo-950">
                        <ShieldCheck size={20} /> Verified Payouts
                      </div>
                      <div className="flex items-center gap-2 font-black text-indigo-950">
                        <Gift size={20} /> Daily Rewards
                      </div>
                      <div className="flex items-center gap-2 font-black text-indigo-950">
                        <TrendingUp size={20} /> High Bonuses
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex-1 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <img 
                      src="https://th.bing.com/th/id/OIP.GQSstDiHPPPilIOhipCjtwHaEJ?w=267&h=185&c=7&r=0&o=7&pid=1.7&rm=3" 
                      alt="Color Trading App 2026 - Earn Money Online" 
                      className="rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(79,70,229,0.3)] border-8 border-white"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-indigo-50 flex items-center gap-3 md:gap-6 animate-bounce-slow">
                      <div className="bg-emerald-100 p-2 md:p-4 rounded-xl md:rounded-2xl">
                        <TrendingUp className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-widest mb-1">Total Payouts</p>
                        <p className="text-xl md:text-3xl font-black text-indigo-950">₹10K+</p>
                      </div>
                    </div>
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-indigo-100 rounded-full blur-[120px] opacity-40 -z-10"></div>
                </div>
              </section>

              {/* Quick Join Section */}
              <section className="pb-20 md:-mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {APPS.filter(app => ['91-club', 'bdg-win'].includes(app.id)).map(app => (
                    <motion.div 
                      key={`quick-${app.id}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-indigo-50 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="relative flex-shrink-0">
                          <img 
                            src={app.image} 
                            alt={app.name} 
                            className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover shadow-md" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-black px-2 py-1 rounded-full shadow-lg">
                            HOT
                          </div>
                        </div>
                        <div>
                          <h3 className="font-black text-indigo-950 text-base md:text-lg group-hover:text-indigo-600 transition-colors">{app.name}</h3>
                          <div className="flex items-center gap-1 text-emerald-600 text-[10px] md:text-xs font-bold">
                            <Gift size={12} />
                            {app.bonus}
                          </div>
                        </div>
                      </div>
                      <a 
                        href={app.referralLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                      >
                        Join Now <ArrowRight size={16} />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Stats Section */}
              <section className="py-12 md:py-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[
                  { label: 'Active Users', value: '50K+', icon: TrendingUp },
                  { label: 'Total Payouts', value: '₹10K+', icon: Gift },
                  { label: 'Verified Apps', value: '100+', icon: ShieldCheck },
                  { label: 'Daily Rewards', value: 'Unlimited', icon: Star },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="bg-indigo-50 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <stat.icon className="text-indigo-600" size={24} />
                    </div>
                    <p className="text-2xl md:text-4xl font-black text-indigo-950 mb-1 md:mb-2">{stat.value}</p>
                    <p className="text-[10px] md:text-sm text-gray-500 font-black uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </section>

              {/* Trust Section */}
              <section className="py-16 md:py-24 border-t border-gray-100">
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-black text-indigo-950 mb-4 md:mb-6 max-w-4xl mx-auto px-4">
                    The most trusted platform for finding high-paying earning apps and referral programs in India.
                  </h2>
                  <p className="text-lg md:text-xl text-indigo-600 font-black">
                    We verify every app so you don't have to.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {[
                    { title: '99% Verified', desc: 'Every app is manually tested for payouts and security.', icon: ShieldCheck },
                    { title: 'Top Commissions', desc: 'Access the highest referral rates in the market.', icon: TrendingUp },
                    { title: 'Daily Rewards', desc: 'New bonus codes and daily login rewards added daily.', icon: Gift },
                    { title: 'Fast Payouts', desc: 'Focus on apps with instant UPI or bank withdrawals.', icon: CheckCircle2 },
                  ].map((feature, i) => (
                    <div key={i} className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                      <div className="bg-indigo-50 w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-indigo-600 transition-colors duration-500">
                        <feature.icon className="text-indigo-600 group-hover:text-white transition-colors duration-500" size={28} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">{feature.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Featured Apps Section */}
              <section className="py-24 border-t border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                  <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
                      <Zap size={14} fill="currentColor" />
                      Featured Apps
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-indigo-950 leading-tight">
                      Start with our <span className="text-indigo-600">Top Recommendations</span>
                    </h2>
                  </div>
                  <button 
                    onClick={() => navigateTo('apps')}
                    className="text-indigo-600 font-black flex items-center gap-2 hover:gap-4 transition-all group text-lg"
                  >
                    View All 10 Apps <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {APPS.filter(app => ['91-club', 'bdg-win'].includes(app.id)).map(app => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {currentPage === 'apps' && (
            <motion.div
              key="apps"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-20">
                <h1 className="text-6xl font-black text-indigo-950 mb-6">Top 10 Color Trading Apps 2026</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                  Compare the best earning apps in India. We've analyzed their referral programs, withdrawal limits, and payout reliability.
                </p>
                <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-100 px-8 py-4 rounded-2xl text-amber-800 text-sm font-bold max-w-2xl mx-auto">
                  <ShieldCheck size={24} className="text-amber-600 flex-shrink-0" />
                  <p>Disclaimer: Earning apps involve financial risk. Please play responsibly and only invest what you can afford to lose.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {APPS.map(app => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === 'blog' && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-20">
                <h1 className="text-6xl font-black text-indigo-950 mb-6">Expert Earning Tips</h1>
                <p className="text-xl text-gray-600">Master the art of color trading and maximize your daily earnings with these actionable strategies.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {BLOG_POSTS.map(post => (
                  <article key={post.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group">
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                        <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-black text-indigo-950 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{post.title}</h2>
                      <p className="text-gray-600 leading-relaxed mb-8 flex-grow line-clamp-3">{post.excerpt}</p>
                      <button 
                        onClick={() => navigateTo('article', post)}
                        className="text-indigo-600 font-black flex items-center gap-2 hover:gap-4 transition-all group/btn"
                      >
                        Read Full Article <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === 'article' && selectedArticle && (
            <motion.div
              key="article"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <button 
                onClick={() => navigateTo('blog')}
                className="flex items-center gap-2 text-indigo-600 font-black mb-12 hover:gap-4 transition-all"
              >
                <ChevronRight size={24} className="rotate-180" /> Back to Blog
              </button>

              <article className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">{selectedArticle.date}</span>
                  <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{selectedArticle.readTime}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-indigo-950 mb-8 leading-tight">{selectedArticle.title}</h2>
                
                <div className="prose prose-indigo max-w-none text-gray-600 space-y-10">
                  <p className="text-xl leading-relaxed font-medium text-indigo-950/70">{selectedArticle.intro}</p>
                  
                  <div className="space-y-12">
                    {selectedArticle.tips.map((tip, i) => (
                      <section key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                        <h3 className="text-2xl font-black text-indigo-950 mb-4 flex items-center gap-3">
                          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">{i + 1}</span>
                          {tip.title}
                        </h3>
                        <p className="text-lg leading-relaxed">{tip.content}</p>
                      </section>
                    ))}
                  </div>

                  <div className="pt-12 border-t border-gray-100">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Share this article</p>
                    <div className="flex gap-4">
                      {['WhatsApp', 'Telegram', 'Twitter'].map(platform => (
                        <button key={platform} className="bg-indigo-50 text-indigo-600 px-6 py-3 rounded-xl font-black text-sm hover:bg-indigo-600 hover:text-white transition-all">
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          )}

          {currentPage === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-20">
                <h1 className="text-6xl font-black text-indigo-950 mb-6">Frequently Asked Questions</h1>
                <p className="text-xl text-gray-600">Everything you need to know about using color trading apps safely and earning efficiently.</p>
              </div>

              <div className="space-y-6">
                {FAQS.map((faq, i) => (
                  <div key={i} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none">
                        <span className="text-lg md:text-xl font-black text-indigo-950">{faq.question}</span>
                        <span className="transition-transform group-open:rotate-180 bg-indigo-50 p-2 rounded-full text-indigo-600">
                          <ChevronRight size={20} md:size={24} />
                        </span>
                      </summary>
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-base md:text-lg text-gray-600 leading-relaxed border-t border-gray-50 pt-4 md:pt-6">
                        {faq.answer}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <section id="contact" className="text-center py-10 px-5 bg-[#f9f9f9] rounded-[10px] my-5 mx-auto max-w-[600px] font-sans shadow-sm border border-gray-100">
                <h2 className="text-[28px] font-bold mb-[15px] text-[#333]">Contact Us</h2>
                <p className="text-[16px] my-[10px] text-[#555]">For any queries or support, email us directly at:</p>
                <a 
                  href="mailto:supportwork1@gmail.com" 
                  className="text-[#ff6600] font-bold no-underline hover:underline text-lg md:text-xl"
                >
                  supportwork1@gmail.com
                </a>
                <p className="text-[16px] my-[10px] text-[#555]">We are here to help you 24/7.</p>
              </section>
            </motion.div>
          )}

          {currentPage === 'how-to-earn' && (
            <motion.div
              key="how-to-earn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-12 md:mb-24 px-4">
                <h1 className="text-4xl md:text-7xl font-black text-indigo-950 mb-6 md:mb-8 leading-tight">
                  The Ultimate <span className="text-indigo-600">Earning Strategy</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Don't just play games. Build a system that earns for you while you sleep. Follow these 4 steps to maximize your income in 2026.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24">
                {[
                  {
                    step: '01',
                    title: 'Pick High-Bonus Apps',
                    desc: 'Start with apps like 91 Club or BDG Win that offer high sign-up bonuses to build your initial capital.',
                    icon: Gift
                  },
                  {
                    step: '02',
                    title: 'Build Your Network',
                    desc: 'Share your referral links in WhatsApp groups and Telegram channels to earn massive commissions.',
                    icon: TrendingUp
                  },
                  {
                    step: '03',
                    title: 'Daily Check-ins',
                    desc: 'Most apps reward consistency. Log in daily to collect free rewards and bonus points without any risk.',
                    icon: CheckCircle2
                  },
                  {
                    step: '04',
                    title: 'Withdraw Regularly',
                    desc: 'Once you hit the minimum threshold, withdraw to your UPI or Bank to keep your earnings safe.',
                    icon: ShieldCheck
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm relative group hover:shadow-2xl transition-all duration-500">
                    <span className="text-5xl md:text-7xl font-black text-indigo-50 absolute -top-4 md:-top-6 -right-2 group-hover:text-indigo-100 transition-colors">{item.step}</span>
                    <div className="bg-indigo-600 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 shadow-xl shadow-indigo-100">
                      <item.icon className="text-white" size={24} md:size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-900 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-10 leading-tight px-4">Ready to Start Your Journey?</h2>
                  <p className="text-lg md:text-2xl text-indigo-200 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4">Join our Telegram community for daily tips, new app alerts, and exclusive referral codes.</p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center px-4">
                    <a 
                      href="https://t.me/groupforstudentneed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-indigo-950 px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 md:gap-4 shadow-2xl"
                    >
                      Join Telegram <ChevronRight size={24} md:size={28} />
                    </a>
                    <button 
                      onClick={() => navigateTo('apps')}
                      className="bg-indigo-800 text-white border-2 border-indigo-700 px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-indigo-700 transition-all"
                    >
                      Browse All Apps
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-800 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-800 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 opacity-40"></div>
              </div>
            </motion.div>
          )}

          {currentPage === 'privacy' && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 border border-gray-100 shadow-sm">
                <h1 className="text-3xl md:text-5xl font-black text-indigo-950 mb-4 md:mb-6 px-4">Privacy Policy</h1>
                <p className="text-gray-500 mb-8 md:mb-12 text-base md:text-lg px-4">Effective Date: April 2026</p>
                
                <div className="prose prose-indigo max-w-none text-gray-600 space-y-8 md:space-y-10 px-4">
                  <p className="text-lg md:text-xl leading-relaxed">We value your privacy and are committed to protecting your personal information.</p>
                  
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 md:pl-8 space-y-3 md:space-y-4 text-base md:text-lg">
                      <li>Personal information you provide (name, email, message from contact form)</li>
                      <li>Usage data such as pages visited, clicks, and interactions on our website</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-black text-indigo-950 mb-4">2. How We Use Information</h2>
                    <ul className="list-disc pl-8 space-y-4 text-lg">
                      <li>To improve our website and content</li>
                      <li>To respond to your inquiries and messages</li>
                      <li>To provide information about apps and promotions</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-black text-indigo-950 mb-4">3. Cookies and Tracking</h2>
                    <p className="text-lg leading-relaxed">We may use cookies or similar technologies to enhance your browsing experience. This helps us show relevant content and track website performance.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-black text-indigo-950 mb-4">4. Third-Party Services</h2>
                    <p className="text-lg leading-relaxed">Our website may include referral links to apps and advertising scripts (like Adsterra). We are not responsible for the privacy practices of these third-party services.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-black text-indigo-950 mb-4">5. Data Security</h2>
                    <p className="text-lg leading-relaxed">We implement standard security measures to protect your data. However, no online transmission is 99% secure, so we cannot guarantee absolute security.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-black text-indigo-950 mb-4">6. Children's Privacy</h2>
                    <p className="text-lg leading-relaxed">This website is not intended for children under 13. We do not knowingly collect personal information from children.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-black text-indigo-950 mb-4">7. Changes to Privacy Policy</h2>
                    <p className="text-lg leading-relaxed">We may update this policy from time to time. Changes will be reflected on this page with an updated effective date.</p>
                  </section>
                  
                  <div className="mt-16 p-10 bg-indigo-50 rounded-[2rem]">
                    <p className="font-black text-indigo-950 text-xl mb-2">Contact Us:</p>
                    <p className="text-lg">For questions about privacy, email: supportwork1@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'terms' && (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 border border-gray-100 shadow-sm">
                <h1 className="text-3xl md:text-5xl font-black text-indigo-950 mb-4 md:mb-6 px-4">Terms of Service</h1>
                <p className="text-gray-500 mb-8 md:mb-12 text-base md:text-lg px-4">Effective Date: April 2026</p>
                
                <div className="prose prose-indigo max-w-none text-gray-600 space-y-8 md:space-y-10 px-4">
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">1. Acceptance of Terms</h2>
                    <p className="text-base md:text-lg leading-relaxed">By using this website, you agree to comply with these terms and conditions. If you do not agree, please do not use the site.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">2. Use of Website</h2>
                    <ul className="list-disc pl-6 md:pl-8 space-y-3 md:space-y-4 text-base md:text-lg">
                      <li>You may use the website for personal, informational purposes only</li>
                      <li>You agree not to misuse or interfere with the site, apps, or scripts</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">3. Referral Links & Earnings</h2>
                    <ul className="list-disc pl-6 md:pl-8 space-y-3 md:space-y-4 text-base md:text-lg">
                      <li>Some links on the site are referral links</li>
                      <li>Earnings and rewards are provided by the apps themselves</li>
                      <li>We are not responsible for app failures, delays, or account issues</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">4. Intellectual Property</h2>
                    <p className="text-base md:text-lg leading-relaxed">All content on this site (text, images, logos) is owned or licensed to us. You may not copy or redistribute content without permission.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">5. Limitation of Liability</h2>
                    <p className="text-base md:text-lg leading-relaxed">The website is provided “as-is”. We are not liable for any losses, damages, or issues arising from the use of the apps or referral links.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">6. Changes to Terms</h2>
                    <p className="text-base md:text-lg leading-relaxed">We may update these terms at any time. Continued use of the website constitutes acceptance of the updated terms.</p>
                  </section>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'disclaimer' && (
            <motion.div
              key="disclaimer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 border border-gray-100 shadow-sm">
                <h1 className="text-3xl md:text-5xl font-black text-indigo-950 mb-4 md:mb-6 px-4">Disclaimer</h1>
                <p className="text-gray-500 mb-8 md:mb-12 text-base md:text-lg px-4">Effective Date: April 2026</p>
                
                <div className="prose prose-indigo max-w-none text-gray-600 space-y-8 md:space-y-10 px-4">
                  <section>
                    <p className="text-base md:text-lg leading-relaxed">
                      The content provided on this website, including articles, guides, tutorials, and reviews of color trading apps or other related applications, is for <strong>educational and informational purposes only</strong>. The website owner does <strong>not develop, own, or operate</strong> any of the apps mentioned. All trademarks, logos, and brand names are the property of their respective owners.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">App Ownership</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      We are <strong>not affiliated</strong> with, endorsed by, or sponsored by any of the apps listed on this website. The apps featured are third-party products, and we have no control over their features, services, or updates. Use of any app is at your own risk.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">Earnings and Financial Disclaimer</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      This website may provide information about potential earnings, tips, or strategies for color trading apps. These examples are <strong>not guaranteed</strong> and do not represent guaranteed income. Results may vary depending on individual usage, skill, luck, or market conditions. Users are solely responsible for their actions and decisions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">Advertising and Affiliate Links</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      Some links on this website may be advertisements or affiliate links. We may receive a commission for purchases or sign-ups made through these links at <strong>no extra cost to you</strong>. We only recommend apps that we believe may be useful or interesting to our visitors.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">Legal Compliance</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      Color trading apps may be subject to legal restrictions in your country or region. Users must ensure that their participation is <strong>legal in their jurisdiction</strong>. We are not responsible for any legal consequences, losses, or damages resulting from the use of these apps.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">Accuracy of Information</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      We make every effort to provide accurate and up-to-date information. However, the website owner <strong>cannot guarantee the completeness, accuracy, or reliability</strong> of any content. Users should verify information independently before taking any action.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl md:text-2xl font-black text-indigo-950 mb-3 md:mb-4">Limitation of Liability</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                      By using this website, you agree that the website owner and affiliates are <strong>not liable for any direct, indirect, or incidental damages</strong> arising from the use of the content, apps, or linked websites.
                    </p>
                  </section>

                  <p className="text-base md:text-lg leading-relaxed">
                    For any questions or concerns, please visit the <button onClick={() => navigateTo('contact')} className="text-indigo-600 font-bold hover:underline">Contact</button> page.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-950 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="bg-indigo-600 p-2 rounded-xl">
                  <TrendingUp className="text-white" size={24} md:size={28} />
                </div>
                <span className="text-2xl md:text-3xl font-black tracking-tighter">COLORCASH</span>
              </div>
              <p className="text-indigo-200 text-lg md:text-xl max-w-md mb-8 md:mb-10 leading-relaxed">
                The most trusted platform for finding high-paying earning apps and referral programs in India. We verify every app so you don't have to.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10 max-w-md">
                {[
                  { label: '99% Verified', icon: ShieldCheck },
                  { label: 'Fast Payouts', icon: CheckCircle2 },
                  { label: 'Top Bonuses', icon: Gift },
                  { label: 'Daily Updates', icon: TrendingUp },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 md:gap-3 text-indigo-300 text-[10px] md:text-sm bg-indigo-900/50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-indigo-800">
                    <item.icon size={16} md:size={18} className="text-indigo-500 flex-shrink-0" />
                    <span className="font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg md:text-xl font-black mb-6 md:mb-8 uppercase tracking-widest text-indigo-400">Quick Links</h4>
              <ul className="space-y-4 md:space-y-5 text-indigo-200 font-bold text-sm md:text-base">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('apps')} className="hover:text-white transition-colors">Apps List</button></li>
                <li><button onClick={() => navigateTo('blog')} className="hover:text-white transition-colors">Earning Tips</button></li>
                <li><button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-black mb-6 md:mb-8 uppercase tracking-widest text-indigo-400">Legal</h4>
              <ul className="space-y-4 md:space-y-5 text-indigo-200 font-bold text-sm md:text-base">
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button onClick={() => navigateTo('disclaimer')} className="hover:text-white transition-colors">Disclaimer</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-black mb-6 md:mb-8 uppercase tracking-widest text-indigo-400">Community</h4>
              <ul className="space-y-4 md:space-y-5 text-indigo-200 font-bold text-sm md:text-base">
                <li>
                  <a 
                    href="https://t.me/groupforstudentneed" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    Telegram Group <ExternalLink size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 md:pt-12 border-t border-indigo-900 text-center text-indigo-400 text-xs md:text-sm font-bold">
            <p>© {new Date().getFullYear()} Top 10 Color Trading Apps 2026. All rights reserved. Play responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
