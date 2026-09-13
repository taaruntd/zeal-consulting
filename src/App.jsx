import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Dashboard from './components/Dashboard'
import SectionHeading from './components/SectionHeading'
import WorkVisual from './components/WorkVisual'
import { content } from './content'

export default function App(){
 useEffect(()=>{
   const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12})
   document.querySelectorAll('.reveal').forEach(el=>io.observe(el)); return()=>io.disconnect()
 },[])
 return <>
   <Navbar/>
   <main id="top">
    <section className="hero">
      <div className="heroGlow"/><div className="mesh"/>
      <div className="heroCopy reveal">
        <div className="eyebrow">{content.hero.eyebrow}</div>
        <h1>{content.hero.titleA}<br/><span>{content.hero.titleAccent}</span><br/>{content.hero.titleB}</h1>
        <p>{content.hero.body}</p>
        <div className="heroActions"><a className="button buttonGold" href="#contact">{content.hero.primary}<b>→</b></a><a className="button buttonDark" href="#methodology">{content.hero.secondary}</a></div>
      </div>
      <div className="heroDash reveal"><Dashboard/></div>
      <div className="heroNote">Real-time clarity. Clear ownership. Better decisions.</div>
    </section>

    <section className="band" id="situations"><div className="shell">
      <SectionHeading eyebrow="YOU SHOULD TALK TO US IF..." title="The business has outgrown the way it operates." center/>
      <div className="problemGrid">{content.situations.map((x,i)=><div className="problem reveal" key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}</div>
    </div></section>

    <section className="section shell" id="services">
      <SectionHeading eyebrow="WHAT WE DO" title="Operational infrastructure that becomes your unfair advantage." desc="Four capabilities. One objective: make strategy executable at scale." center/>
      <div className="serviceGrid">{content.services.map(s=><article className="serviceCard reveal" key={s.title}><div className="serviceNo">{s.n}</div><h3>{s.title}</h3><p>{s.subtitle}</p><ul>{s.items.map(i=><li key={i}>{i}</li>)}</ul></article>)}</div>
    </section>

    <section className="section darkPanel" id="methodology"><div className="shell">
      <SectionHeading eyebrow="HOW WE WORK" title="A structured approach. Built for real-world outcomes." center/>
      <div className="methodLine">{content.methodology.map((m,i)=><article className="method reveal" key={m.title}><div className="methodIcon"><span>{m.n}</span></div><h3>{m.title}</h3><p>{m.text}</p>{i<content.methodology.length-1&&<div className="connector"/>}</article>)}</div>
    </div></section>

    <section className="section shell"><SectionHeading eyebrow="HOW WE ENGAGE" title="Choose the level of intervention the situation needs."/>
      <div className="engageGrid">{content.engagementModels.map(([a,b])=><article className="engage reveal" key={a}><span>↗</span><h3>{a}</h3><p>{b}</p></article>)}</div>
    </section>

    <section className="industryBand" id="industries"><div className="shell"><SectionHeading eyebrow="INDUSTRIES" title="Built for scaling companies across complex sectors." center/>
      <div className="industries">{content.industries.map((x,i)=><div className="industry reveal" key={x}><div className="industryIcon">{['◒','⌘','◇','△','□','✦'][i%6]}</div><span>{x}</span></div>)}</div>
    </div></section>

    <section className="section shell" id="work"><SectionHeading eyebrow="SELECTED SYSTEMS" title="We build working infrastructure — not shelfware." desc="Public examples use illustrative data. Detailed case studies are shared selectively after an introduction."/>
      <div className="workGrid">{content.work.map(w=><article className="workCard reveal" key={w.title}><div><small>{w.tag}</small><h3>{w.title}</h3><p>{w.text}</p><a href="#contact">Request case study →</a></div><WorkVisual kind={w.kind}/></article>)}</div>
    </section>

    <section className="proof section"><div className="shell proofGrid"><div><SectionHeading eyebrow="THE PATTERN" title="From fragmented execution to a scalable operating machine."/><p className="lead">{content.proof.narrative}</p></div><div className="proofList">{content.proof.bullets.map(x=><div className="reveal" key={x}><span>✓</span>{x}</div>)}</div></div></section>

    <section className="section shell"><SectionHeading eyebrow="WHAT WE BELIEVE" title="Practical systems. Clear ownership. Less operational drag." center/>
      <div className="principles">{content.principles.map(([a,b],i)=><article className="principle reveal" key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div>
    </section>

    <section className="section about" id="about"><div className="shell aboutGrid"><div className="aboutMark">Z</div><div><div className="eyebrow">ABOUT ZEAL</div><h2>{content.about.title}</h2><p>{content.about.text}</p><blockquote>“{content.about.quote}”</blockquote></div></div></section>

    <section className="closing" id="contact"><div className="closingMesh"/><div className="shell closingInner"><div className="eyebrow">READY TO BUILD YOUR OPERATING ADVANTAGE?</div><h2>Your company has outgrown spreadsheets.<br/><span>Let’s build what comes next.</span></h2><p>We intentionally limit active engagements so the work stays hands-on.</p><div className="heroActions centerActions"><a className="button buttonGold" href={`mailto:${content.contact.email}`}>Let's Connect →</a><a className="button buttonDark" href={`tel:${content.contact.phone.replace(/\s/g,'')}`}>{content.contact.phone}</a></div></div></section>
   </main>
   <footer><div className="shell footerGrid"><div><Logo/><p>Operational infrastructure for companies at inflection points.</p></div><div><b>Explore</b>{content.nav.map(([l,id])=><a key={id} href={`#${id}`}>{l}</a>)}</div><div><b>Contact</b><a href={`mailto:${content.contact.email}`}>{content.contact.email}</a><a href={`tel:${content.contact.phone.replace(/\s/g,'')}`}>{content.contact.phone}</a></div></div><div className="shell copyright">© {new Date().getFullYear()} Zeal Consulting. All rights reserved.<span>Strategy that ships.</span></div></footer>
 </>
}
