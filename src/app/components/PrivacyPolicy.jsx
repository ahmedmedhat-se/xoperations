import { useState, useEffect } from 'react';
import '../styles/privacy-policy.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collection', title: 'Data Collection' },
    { id: 'usage', title: 'How We Use Data' },
    { id: 'sharing', title: 'Information Sharing' },
    { id: 'security', title: 'Security Measures' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'updates', title: 'Policy Updates' }
  ];

  return (
    <div className="privacy-container">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="privacy-grid">
        <aside className="privacy-sidebar">
          <div className="sidebar-sticky">
            <div className="sidebar-header">
              <span className="company-badge">XOperations</span>
              <h2 className='text-light'>Privacy Policy</h2>
              <p className="last-updated">Last Updated: February 2025</p>
            </div>
            
            <nav className="section-nav">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  className={`nav-item ${activeSection === index ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection(index);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-title">{section.title}</span>
                </button>
              ))}
            </nav>
            
            <div className="sidebar-footer">
              <div className="contact-support">
                <span className="support-icon">🔒</span>
                <p>Questions about privacy?</p>
                <a href="mailto:xoperations.contact@gmail.com">xoperations.contact@gmail.com</a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="privacy-main">
          <div className="content-wrapper">
            <section id="introduction" className="policy-section">
              <div className="section-header">
                <h1>Your Digital Trust Partner</h1>
                <div className="header-underline"></div>
              </div>
              
              <div className="section-content">
                <p className="lead-text">
                  At XOperations, we believe that digital transformation must be built on a foundation of trust and transparency. 
                  This Privacy Policy demonstrates our commitment to protecting your data while delivering innovative solutions 
                  that empower Egyptian organizations.
                </p>
                
                <div className="trust-badges">
                  <div className="badge">
                    <span className="badge-icon">🛡️</span>
                    <span>Cybersecurity First</span>
                  </div>
                  <div className="badge">
                    <span className="badge-icon">🇪🇬</span>
                    <span>Egyptian Built</span>
                  </div>
                  <div className="badge">
                    <span className="badge-icon">📋</span>
                    <span>GDPR Compliant</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-collection" className="policy-section">
              <h2>Information We Collect</h2>
              <div className="section-content">
                <p>We collect information to provide and improve our digital transformation services while maintaining the highest security standards.</p>
                
                <div className="cards-grid">
                  <div className="info-card">
                    <div className="card-header">
                      <span className="card-icon">👤</span>
                      <h3>Business Information</h3>
                    </div>
                    <ul>
                      <li>Company name and registration details</li>
                      <li>Business contact information</li>
                      <li>Professional roles and permissions</li>
                    </ul>
                  </div>
                  
                  <div className="info-card">
                    <div className="card-header">
                      <span className="card-icon">💻</span>
                      <h3>Technical Data</h3>
                    </div>
                    <ul>
                      <li>System usage and performance metrics</li>
                      <li>Integration requirements</li>
                      <li>Security audit logs</li>
                    </ul>
                  </div>
                  
                  <div className="info-card">
                    <div className="card-header">
                      <span className="card-icon">🎓</span>
                      <h3>Educational Data</h3>
                    </div>
                    <ul>
                      <li>Workshop participation records</li>
                      <li>Training progress metrics</li>
                      <li>Certification achievements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="usage" className="policy-section">
              <h2>How We Use Your Information</h2>
              <div className="section-content">
                <div className="usage-timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>Service Delivery</h3>
                      <p>To provide and maintain our software solutions, automation systems, and digital platforms</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>Security Enhancement</h3>
                      <p>To implement our cybersecurity-by-design philosophy and protect against threats</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>Innovation & Development</h3>
                      <p>To improve our ERP systems, automation tools, and youth empowerment programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="sharing" className="policy-section">
              <h2>Information Sharing</h2>
              <div className="section-content">
                <p className="commitment-text">
                  We never sell your personal information. Period.
                </p>
                
                <div className="sharing-grid">
                  <div className="sharing-item allowed">
                    <span className="sharing-icon">✓</span>
                    <div>
                      <h4>With Your Consent</h4>
                      <p>When you explicitly authorize us to share information with partners</p>
                    </div>
                  </div>
                  
                  <div className="sharing-item allowed">
                    <span className="sharing-icon">✓</span>
                    <div>
                      <h4>Legal Compliance</h4>
                      <p>When required by Egyptian law or regulatory authorities</p>
                    </div>
                  </div>
                  
                  <div className="sharing-item denied">
                    <span className="sharing-icon">✗</span>
                    <div>
                      <h4>Never: Advertising Networks</h4>
                      <p>We do not share data with third-party advertisers</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="security" className="policy-section">
              <h2>Security-by-Design</h2>
              <div className="section-content">
                <div className="security-showcase">
                  <div className="security-feature">
                    <span className="feature-icon">🔐</span>
                    <h3>End-to-End Encryption</h3>
                    <p>All data encrypted in transit and at rest using industry standards</p>
                  </div>
                  
                  <div className="security-feature">
                    <span className="feature-icon">🔄</span>
                    <h3>Regular Audits</h3>
                    <p>Continuous security assessments and penetration testing</p>
                  </div>
                  
                  <div className="security-feature">
                    <span className="feature-icon">📊</span>
                    <h3>Access Control</h3>
                    <p>Strict role-based access controls and authentication requirements</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="rights" className="policy-section">
              <h2>Your Privacy Rights</h2>
              <div className="section-content">
                <div className="rights-accordion">
                  <div className="right-item">
                    <h3>Access & Portability</h3>
                    <p>Request a copy of your data in a portable format</p>
                  </div>
                  
                  <div className="right-item">
                    <h3>Correction & Updates</h3>
                    <p>Update inaccurate or incomplete information</p>
                  </div>
                  
                  <div className="right-item">
                    <h3>Deletion</h3>
                    <p>Request deletion of your personal information</p>
                  </div>
                  
                  <div className="right-item">
                    <h3>Opt-Out</h3>
                    <p>Withdraw consent for specific data processing</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="updates" className="policy-section">
              <h2>Policy Updates</h2>
              <div className="section-content">
                <div className="updates-container">
                  <p>We may update this Privacy Policy to reflect changes in our practices or regulatory requirements. We will notify you of material changes through:</p>
                  
                  <ul className="updates-list">
                    <li>Email notifications to registered contacts</li>
                    <li>Prominent notice on our platform dashboard</li>
                    <li>In-app notifications for active users</li>
                  </ul>
                  
                  <div className="policy-commitment">
                    <span>⚡</span>
                    <p>Continued use of our services after updates constitutes acceptance of revised terms</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;