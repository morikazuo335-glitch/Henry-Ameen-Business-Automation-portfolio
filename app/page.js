const portrait =
  "https://i.ibb.co/tp0bc7Z1/Polished-3-D-Portrait-of-a-Young-Man.png";

const services = [
  {
    number: "01",
    title: "Lead capture",
    description:
      "Bring enquiries from different channels into one clear, organised flow so promising opportunities don't get lost.",
    tag: "Capture every opportunity",
    icon: "↗"
  },
  {
    number: "02",
    title: "Instant responses",
    description:
      "Acknowledge new enquiries quickly, even outside business hours, and give every potential customer a clear next step.",
    tag: "Be there when it matters",
    icon: "✳"
  },
  {
    number: "03",
    title: "Follow-up workflows",
    description:
      "Create thoughtful follow-up sequences that keep conversations moving without relying on someone to remember every task.",
    tag: "Stay consistently in touch",
    icon: "⟳"
  },
  {
    number: "04",
    title: "CRM & team workflows",
    description:
      "Connect the tools you already use, organise customer information, and reduce repetitive hand-offs across your team.",
    tag: "Make work flow better",
    icon: "⌘"
  }
];

const steps = [
  ["01", "Understand", "We map the repetitive work and the moments where opportunities slip through."],
  ["02", "Connect", "Your existing tools are joined into a practical workflow with clear rules."],
  ["03", "Automate", "The system handles routine steps while people stay in control of important conversations."],
  ["04", "Improve", "We review the process and refine it as your business grows."]
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        Thoughtful automation for ambitious businesses
        <span className="announcement-arrow">↗</span>
      </div>

      <header className="site-header shell">
        <a className="brand" href="#" aria-label="Henry Ameen Charles home">
          <span className="brand-mark">H<span>.</span></span>
          <span className="brand-name">HENRY AMEEN CHARLES<small>BUSINESS AUTOMATION</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">What I do</a>
          <a href="#process">My approach</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Let's talk <span>↗</span></a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> BUSINESS AUTOMATION SPECIALIST</div>
          <h1>Make busywork<br />a thing of the <span className="highlight-word">past<span className="highlight-spark">✳</span></span></h1>
          <p className="hero-description">
            I help businesses turn repetitive tasks into smarter systems — so you can respond faster, stay organised, and focus on the work that moves you forward.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Build a smarter workflow <span>↗</span></a>
            <a className="text-link" href="#services">Explore what I do <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon">✳</div>
            <div><strong>Less manual work.</strong><span>More time for meaningful work.</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait and automation workflow illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="portrait-backdrop" />
          <div className="portrait-glow" />
          <img className="portrait" src={portrait} alt="3D portrait representing Henry Ameen Charles" />
          <div className="floating-card card-top">
            <span className="mini-icon blue-icon">↗</span>
            <span><strong>New enquiry</strong><small>Captured automatically</small></span>
            <i className="status-check">✓</i>
          </div>
          <div className="floating-card card-bottom">
            <span className="mini-icon orange-icon">⟳</span>
            <span><strong>Follow-up sent</strong><small>Right on schedule</small></span>
            <i className="status-check">✓</i>
          </div>
          <div className="visual-sticker">WORK<br />SMARTER<span>✳</span></div>
          <div className="visual-caption"><span /> SYSTEMS THAT WORK WHILE YOU DO</div>
        </div>
        <div className="hero-side-note">AUTOMATE THE ROUTINE. ELEVATE THE WORK.</div>
      </section>

      <section className="ticker" aria-label="Automation benefits">
        <div className="ticker-track">
          {["LEAD CAPTURE", "INSTANT RESPONSES", "SMART FOLLOW-UPS", "CONNECTED WORKFLOWS", "BETTER CUSTOMER EXPERIENCES", "LEAD CAPTURE", "INSTANT RESPONSES", "SMART FOLLOW-UPS"].map((item, index) => (
            <span key={index}>{item}<b>✳</b></span>
          ))}
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> WHAT I CAN HELP WITH</div>
              <h2>Good systems make<br />great work <span className="serif-accent">easier.</span></h2>
            </div>
            <p className="section-intro">Automation isn't about making business feel robotic. It's about removing the repetitive steps that get in the way of great service.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top"><span>{service.number}</span><b>{service.icon}</b></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tag"><span />{service.tag}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-section section-pad" id="process">
        <div className="shell workflow-layout">
          <div className="workflow-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A CLEARER WAY TO WORK</div>
            <h2>From scattered<br />steps to <span>smooth flow.</span></h2>
            <p>Every business is different. I focus on building practical automations around the way your team already works — not adding complexity for the sake of it.</p>
            <a className="button button-light" href="#contact">Let's map your workflow <span>↗</span></a>
          </div>
          <div className="workflow-visual">
            <div className="workflow-label"><span className="pulse-dot" /> EXAMPLE AUTOMATION FLOW</div>
            <div className="flow-node node-start"><span className="node-symbol">✉</span><div><strong>New enquiry</strong><small>Website / social / email</small></div><span className="node-check">✓</span></div>
            <div className="flow-connector"><i /></div>
            <div className="flow-node node-middle"><span className="node-symbol">✳</span><div><strong>Instant response</strong><small>Personalised acknowledgement</small></div><span className="node-check">✓</span></div>
            <div className="flow-connector"><i /></div>
            <div className="flow-node node-end"><span className="node-symbol">▤</span><div><strong>CRM updated</strong><small>Contact saved and organised</small></div><span className="node-check">✓</span></div>
            <div className="flow-branch"><span>THEN</span><b>Follow-up reminder scheduled</b><i>↗</i></div>
            <div className="flow-spark spark-a">✳</div><div className="flow-spark spark-b">✦</div>
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="shell">
          <div className="eyebrow"><span className="eyebrow-line" /> SIMPLE BY DESIGN</div>
          <div className="process-heading"><h2>Built around your<br /><span className="serif-accent">real workflow.</span></h2><p>No unnecessary layers. Just a clear process, connected tools, and automation that earns its place in your business.</p></div>
          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span><div className="step-rule" /><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="shell about-layout">
          <div className="about-art">
            <div className="about-circle"><span>HAC</span></div>
            <div className="about-sticker">MAKE<br />IT FLOW <b>↗</b></div>
            <div className="about-mini-card"><span className="mini-icon lime-icon">✳</span><span><strong>Human-first</strong><small>Technology with purpose</small></span></div>
          </div>
          <div className="about-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</div>
            <h2>Technology should<br />make work feel <span className="serif-accent">lighter.</span></h2>
            <p className="about-lead">I'm Henry Ameen Charles, a business automation specialist focused on making everyday business processes simpler, faster, and more connected.</p>
            <p>I believe the best systems are the ones that quietly do their job. They give teams more breathing room, help customers get timely responses, and make it easier to deliver a consistently good experience.</p>
            <div className="about-signoff">Henry Ameen Charles <span>— Business Automation</span></div>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="shell contact-card">
          <div className="contact-decoration">✳</div>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> READY FOR A BETTER FLOW?</div>
          <h2>Let's make your<br />next move <span>smarter.</span></h2>
          <p>Tell me what's taking too much time in your business. Let's explore a simpler way to get it done.</p>
          <a className="button button-orange" href="https://github.com/morikazuo335-glitch" target="_blank" rel="noreferrer">Connect with Henry <span>↗</span></a>
          <div className="contact-footnote">PRACTICAL SYSTEMS. HUMAN-CENTRED AUTOMATION.</div>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="brand footer-brand" href="#"><span className="brand-mark">H<span>.</span></span><span className="brand-name">HENRY AMEEN CHARLES<small>BUSINESS AUTOMATION</small></span></a>
        <span>© {new Date().getFullYear()} Henry Ameen Charles. Built with intention.</span>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Back to top ↑</a>
      </footer>
    </main>
  );
}
