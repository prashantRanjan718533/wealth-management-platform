import React, { useState } from 'react';
import { ChevronRight, TrendingUp, Shield, Users, BarChart3, Mail, Phone, MapPin, Eye, EyeOff, LogOut, PieChart, DollarSign, Zap } from 'lucide-react';

export default function WealthManagementPlatform() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [portfolioView, setPortfolioView] = useState('overview');

  // Mock client data
  const clientData = {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    portfolioValue: 8750000,
    yearGain: 1250000,
    yearGainPercent: 16.7,
    holdings: [
      { id: 1, name: 'Bluechip Equity Fund', value: 2500000, percent: 28.6 },
      { id: 2, name: 'Small & Mid Cap', value: 1875000, percent: 21.4 },
      { id: 3, name: 'Fixed Income Portfolio', value: 2100000, percent: 24.0 },
      { id: 4, name: 'Gold & Precious Metals', value: 1275000, percent: 14.6 },
      { id: 5, name: 'Cash & Equivalents', value: 1000000, percent: 11.4 },
    ],
    transactions: [
      { date: '29 Jun 2026', type: 'Dividend', amount: '+₹45,000', fund: 'Bluechip Equity Fund' },
      { date: '25 Jun 2026', type: 'Purchase', amount: '-₹250,000', fund: 'Small & Mid Cap' },
      { date: '20 Jun 2026', type: 'Rebalance', amount: '₹0', fund: 'Portfolio Adjustment' },
    ]
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
      setCurrentPage('portal');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
    setLoginEmail('');
    setLoginPassword('');
  };

  // Marketing Pages
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Right Horizons</span>
            </div>
            <div className="flex items-center gap-8">
              <button onClick={() => setCurrentPage('home')} className={`text-sm font-medium transition ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Home
              </button>
              <button onClick={() => setCurrentPage('services')} className={`text-sm font-medium transition ${currentPage === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Services
              </button>
              <button onClick={() => setCurrentPage('insights')} className={`text-sm font-medium transition ${currentPage === 'insights' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                Insights
              </button>
              <button onClick={() => setCurrentPage('login')} className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                Client Login
              </button>
            </div>
          </div>
        </nav>

        {/* Home Page */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
              <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Wealth managed with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">precision</span>
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Professional investment management tailored for India's high-net-worth individuals. We combine decades of expertise with modern portfolio strategies.
                  </p>
                  <div className="flex gap-4">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                      Start your journey
                    </button>
                    <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition">
                      Learn more
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                        <TrendingUp className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-gray-600 text-sm">Wealth Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-4 gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">₹5,200Cr+</p>
                    <p className="text-gray-600 mt-2">Assets Under Management</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">2,400+</p>
                    <p className="text-gray-600 mt-2">Active Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">18%</p>
                    <p className="text-gray-600 mt-2">Avg. Annual Returns</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600">22+</p>
                    <p className="text-gray-600 mt-2">Years of Experience</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-7xl mx-auto px-6 py-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-16">Why choose Right Horizons?</h2>
              <div className="grid grid-cols-3 gap-8">
                <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
                  <Shield className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
                  <p className="text-gray-600">SEBI registered, AMFI certified. Your wealth is protected by India's strictest regulatory frameworks.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
                  <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Strategy</h3>
                  <p className="text-gray-600">Advanced analytics and AI-powered insights drive every investment decision for optimal results.</p>
                </div>
                <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
                  <Users className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Advisors</h3>
                  <p className="text-gray-600">Personal relationship managers ensure your portfolio aligns with your unique financial goals.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to grow your wealth?</h2>
                <p className="text-blue-100 mb-8 text-lg">Schedule a consultation with our wealth management experts today.</p>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-50 transition">
                  Book a consultation
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Services Page */}
        {currentPage === 'services' && (
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              Comprehensive wealth management solutions designed for India's high-net-worth individuals.
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Portfolio Management</h3>
                <p className="text-gray-600 mb-4">Customized investment strategies across equities, fixed income, and alternative assets.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Multi-asset portfolio construction</li>
                  <li>✓ Regular rebalancing & tax optimization</li>
                  <li>✓ Risk assessment & monitoring</li>
                </ul>
              </div>
              <div className="border-l-4 border-teal-600 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Wealth Planning</h3>
                <p className="text-gray-600 mb-4">Holistic financial planning aligned with your long-term goals and values.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Retirement planning</li>
                  <li>✓ Estate & succession planning</li>
                  <li>✓ Tax-efficient wealth transfer</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-600 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Alternative Investments</h3>
                <p className="text-gray-600 mb-4">Access to exclusive opportunities in real estate, private equity, and structured products.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Private equity access</li>
                  <li>✓ Real estate opportunities</li>
                  <li>✓ Structured investments</li>
                </ul>
              </div>
              <div className="border-l-4 border-teal-600 pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Risk Management</h3>
                <p className="text-gray-600 mb-4">Comprehensive risk assessment and mitigation strategies for wealth protection.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Insurance & protection planning</li>
                  <li>✓ Portfolio stress testing</li>
                  <li>✓ Liability management</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Insights Page */}
        {currentPage === 'insights' && (
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-16">Market Insights</h1>
            
            <div className="space-y-8">
              <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-blue-600 text-sm font-medium mb-2">MARKET ANALYSIS</p>
                    <h3 className="text-2xl font-bold text-gray-900">Indian equities surge on monsoon optimism</h3>
                  </div>
                  <span className="text-gray-400 text-sm">28 Jun 2026</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Nifty50 reaches all-time highs as favorable monsoon forecasts boost agricultural sector confidence. Banks and auto stocks lead the rally on improved growth outlook for H2 FY27.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
                  Read full analysis <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-blue-600 text-sm font-medium mb-2">INVESTMENT STRATEGY</p>
                    <h3 className="text-2xl font-bold text-gray-900">Navigating sector rotation in Q2 FY27</h3>
                  </div>
                  <span className="text-gray-400 text-sm">22 Jun 2026</span>
                </div>
                <p className="text-gray-600 mb-4">
                  As rate expectations stabilize, we see emerging opportunities in domestic-consumption plays. Our latest research highlights defensive sectors offering attractive valuations.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
                  Read full analysis <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-blue-600 text-sm font-medium mb-2">PORTFOLIO ALERT</p>
                    <h3 className="text-2xl font-bold text-gray-900">Global tech valuations stabilize; India tech remains resilient</h3>
                  </div>
                  <span className="text-gray-400 text-sm">15 Jun 2026</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Indian IT services show strong momentum despite global tech slowdown. We maintain positive outlook on select IT names with strong Q1 results and healthy order books.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2">
                  Read full analysis <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Login Page */}
        {currentPage === 'login' && (
          <section className="max-w-md mx-auto px-6 py-20">
            <div className="border border-gray-200 rounded-xl p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Portal</h1>
              <p className="text-gray-600 mb-8">Access your portfolio and account information</p>
              
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Sign in
                </button>
              </form>
              
              <p className="text-center text-gray-600 mt-6 text-sm">
                Demo credentials: any email & any password
              </p>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg"></div>
                  <span className="text-white font-bold">Right Horizons</span>
                </div>
                <p className="text-sm">Professional wealth management for India's high-net-worth individuals.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Services</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition">Compliance</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4">Contact</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 22 4050 0050</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@righthorizons.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-sm">
                Right Horizons Financial Services | SEBI Registered | CIF: IN-PMS-700 | © 2026 All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Client Portal
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Portal Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Right Horizons</span>
            <span className="text-gray-400">/ Client Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{clientData.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg flex items-center gap-2 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Portal Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setPortfolioView('overview')}
              className={`py-4 px-4 font-medium text-sm border-b-2 transition ${
                portfolioView === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Portfolio Overview
            </button>
            <button
              onClick={() => setPortfolioView('holdings')}
              className={`py-4 px-4 font-medium text-sm border-b-2 transition ${
                portfolioView === 'holdings'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Holdings
            </button>
            <button
              onClick={() => setPortfolioView('transactions')}
              className={`py-4 px-4 font-medium text-sm border-b-2 transition ${
                portfolioView === 'transactions'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Transactions
            </button>
          </div>
        </div>
      </div>

      {/* Portal Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {portfolioView === 'overview' && (
          <div className="space-y-8">
            {/* Portfolio Value Cards */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600 font-medium">Total Portfolio Value</p>
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">₹{(clientData.portfolioValue / 1000000).toFixed(2)}M</p>
                <p className="text-gray-500 text-sm mt-2">As of 29 June 2026</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600 font-medium">Year-to-Date Gain</p>
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">₹{(clientData.yearGain / 100000).toFixed(1)}L</p>
                <p className="text-teal-600 text-sm mt-2">+{clientData.yearGainPercent}% return</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600 font-medium">Benchmark Performance</p>
                  <Zap className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">+8.3%</p>
                <p className="text-gray-500 text-sm mt-2">Outperforming by 8.4%</p>
              </div>
            </div>

            {/* Portfolio Composition */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <PieChart className="w-6 h-6 text-blue-600" />
                Portfolio Composition
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="space-y-3">
                    {clientData.holdings.map((holding) => (
                      <div key={holding.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{holding.name}</span>
                        </div>
                        <span className="text-gray-900 font-medium">{holding.percent}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-20 h-20 text-blue-300 mx-auto mb-4" />
                    <p className="text-gray-600 text-sm">Portfolio diversified across 5 asset classes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {portfolioView === 'holdings' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Investment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Value</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Allocation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">YTD Return</th>
                </tr>
              </thead>
              <tbody>
                {clientData.holdings.map((holding) => (
                  <tr key={holding.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-gray-900 font-medium">{holding.name}</td>
                    <td className="px-6 py-4 text-gray-900">₹{(holding.value / 1000000).toFixed(2)}M</td>
                    <td className="px-6 py-4 text-gray-600">{holding.percent}%</td>
                    <td className="px-6 py-4">
                      <span className="text-teal-600 font-medium">+14.2%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {portfolioView === 'transactions' && (
          <div className="space-y-4">
            {clientData.transactions.map((tx, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 flex items-center justify-between hover:shadow-lg transition">
                <div>
                  <p className="text-gray-900 font-medium">{tx.fund}</p>
                  <p className="text-gray-600 text-sm">{tx.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.amount.includes('-') ? 'text-red-600' : 'text-teal-600'}`}>
                    {tx.amount}
                  </p>
                  <p className="text-gray-600 text-sm">{tx.type}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
