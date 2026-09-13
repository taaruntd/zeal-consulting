const Spark=({points='0,34 16,30 28,31 42,20 54,23 68,13 84,17 100,5'})=><svg className="spark" viewBox="0 0 100 40" preserveAspectRatio="none"><polyline points={points}/></svg>
export default function Dashboard(){
  return <div className="dashWrap">
    <div className="dashTop"><div><span className="tinyLogo">Z</span> Executive Control Tower</div><span>×</span></div>
    <div className="metricGrid">
      <Metric l="Revenue (YTD)" v="₹ 186 Cr" d="+32.4% vs LY"/><Metric l="EBITDA %" v="24.6%" d="+2.2% vs LY"/><Metric l="Cash Runway" v="18.4 mo" d="+2.1 mo"/><Metric l="Projects" v="23" d="3 need attention" warn/>
    </div>
    <div className="dashLower">
      <div className="chartCard"><div className="miniTitle"><span>Performance Overview</span><small>FY26</small></div><div className="bars">{[35,49,44,62,56,76,68,91].map((h,i)=><i key={i} style={{height:`${h}%`}}/> )}</div></div>
      <div className="health"><span>Business Health</span><div className="ring"><b>8.6</b><small>/10</small></div><div className="healthRows"><em>Growth <i/></em><em>Profitability <i/></em><em>Cash & Liquidity <i/></em><em>Operations <i className="amber"/></em></div></div>
    </div>
    <div className="dashFooter">Illustrative data · Purpose-built decision systems</div>
  </div>
}
function Metric({l,v,d,warn}) { return <div className="metric"><small>{l}</small><strong>{v}</strong><em className={warn?'warn':''}>{d}</em><Spark points={warn?'0,31 17,25 30,27 44,17 58,23 72,12 86,19 100,9':undefined}/></div> }
