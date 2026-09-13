export default function WorkVisual({kind}){
 if(kind==='dashboard') return <div className="miniBoard"><div className="miniMetrics"><b>₹ 5.6 Cr<small>MRR</small></b><b>2,458<small>Active customers</small></b><b>₹ 22.8K<small>ARPU</small></b></div><svg viewBox="0 0 220 85"><polyline points="0,70 22,62 37,67 55,48 76,51 94,37 112,43 132,24 150,31 174,16 190,20 220,7"/></svg></div>
 if(kind==='rhythm') return <div className="rhythm"><i/><i/><i/><i/><i/><div className="rhythmLine"/></div>
 return <div className="workflow"><span>Request</span><b>→</b><span>Review</span><b>→</b><span>Approve</span><b>→</b><span>Track</span></div>
}