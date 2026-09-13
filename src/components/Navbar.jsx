import { useEffect, useState } from 'react'
import Logo from './Logo'
import { content } from '../content'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [solid,setSolid]=useState(false)
  useEffect(()=>{const f=()=>setSolid(scrollY>20); addEventListener('scroll',f); f(); return()=>removeEventListener('scroll',f)},[])
  return <header className={`nav ${solid?'solid':''}`}>
    <a href="#top" aria-label="Zeal Consulting home"><Logo /></a>
    <nav className={open?'open':''}>
      {content.nav.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}
    </nav>
    <div className="navActions">
      <a className="button buttonLine desktopCta" href="#contact">Let's Connect</a>
      <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu"><span/><span/></button>
    </div>
  </header>
}