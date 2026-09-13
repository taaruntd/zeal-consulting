export default function Logo({compact=false}){
  return <div className={`logo ${compact?'compact':''}`}>
    <div className="mark"><span>Z</span></div>
    <div className="logoWords"><b>ZEAL</b><small>CONSULTING</small></div>
  </div>
}