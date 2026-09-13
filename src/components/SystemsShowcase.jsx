import { useState } from 'react'

const systems = [
  {
    id:'control',
    label:'Executive Control Tower',
    role:'Founder / CEO',
    decision:'Where do I need to intervene this week?',
    inputs:'Projects · Finance · Sales · Operations'
  },
  {
    id:'projects',
    label:'Project Command Centre',
    role:'COO / Projects Head',
    decision:'Which milestones, cashflows and dependencies are at risk?',
    inputs:'Project plans · Billing · Procurement · Receivables'
  },
  {
    id:'kra',
    label:'KRA Performance System',
    role:'Leadership / HR',
    decision:'Are teams executing against measurable outcomes?',
    inputs:'KRAs · Reviews · Owners · Scorecards'
  },
  {
    id:'governance',
    label:'Governance Calendar',
    role:'Founder’s Office',
    decision:'Are decisions turning into actions and closures?',
    inputs:'Reviews · MOMs · Action items · Compliance'
  },
  {
    id:'workflow',
    label:'Approval Workflow',
    role:'Finance / SCM / Projects',
    decision:'Where is the approval stuck and what is breaching SLA?',
    inputs:'Requests · Approvals · SLAs · Audit trail'
  }
]

export default function SystemsShowcase() {
  const [active, setActive] = useState('control')
  const meta = systems.find(s => s.id === active)

  return (
    <div className="systemsShowcase">
      <div className="systemTabs">
        {systems.map(s => <button key={s.id} className={active===s.id?'active':''} onClick={()=>setActive(s.id)}>{s.label}</button>)}
      </div>

      <div className="systemFrame">
        <div className="systemBrowser">
          <div className="browserDots"><i/><i/><i/></div>
          <div className="browserTitle">zealconsulting.in / systems / {active}</div>
          <div className="browserLive">ILLUSTRATIVE</div>
        </div>

        {active==='control' && <ControlTower/>}
        {active==='projects' && <ProjectCommand/>}
        {active==='kra' && <KraSystem/>}
        {active==='governance' && <Governance/>}
        {active==='workflow' && <Workflow/>}
      </div>

      <div className="systemMeta">
        <div><small>BUILT FOR</small><strong>{meta.role}</strong></div>
        <div><small>DECISION ENABLED</small><strong>{meta.decision}</strong></div>
        <div><small>TYPICAL INPUTS</small><strong>{meta.inputs}</strong></div>
      </div>
    </div>
  )
}

const Kpi=({label,value,delta,tone='green'})=><div className="sysKpi"><small>{label}</small><b>{value}</b><em className={tone}>{delta}</em></div>

function LineChart() {
  return <svg className="lineChart" viewBox="0 0 500 160" preserveAspectRatio="none">
    <g className="gridLines"><line x1="0" y1="35" x2="500" y2="35"/><line x1="0" y1="80" x2="500" y2="80"/><line x1="0" y1="125" x2="500" y2="125"/></g>
    <polyline className="lineMuted" points="0,137 45,128 90,121 135,109 180,100 225,90 270,74 315,68 360,57 405,50 455,39 500,30"/>
    <polyline className="lineGold" points="0,142 45,132 90,136 135,111 180,117 225,88 270,99 315,67 360,75 405,47 455,55 500,24"/>
  </svg>
}

function ControlTower() {
  return <div className="sysDash">
    <div className="sysHead"><div><small>EXECUTIVE CONTROL TOWER</small><h3>Business Performance · September 2026</h3></div><div className="sysPill">Updated 8 mins ago</div></div>
    <div className="sysKpis"><Kpi label="Revenue YTD" value="₹186 Cr" delta="+32.4% YoY"/><Kpi label="EBITDA" value="24.6%" delta="+220 bps"/><Kpi label="Cash Runway" value="18.4 mo" delta="Healthy"/><Kpi label="Active Projects" value="23" delta="3 need attention" tone="amber"/></div>
    <div className="sysGridTwo">
      <div className="sysCard"><div className="cardHead"><b>Revenue vs Plan</b><span>FY26</span></div><LineChart/><div className="chartLegend"><span><i className="gold"/>Actual</span><span><i/>Plan</span></div></div>
      <div className="sysCard"><div className="cardHead"><b>Project Health</b><span>23 Active</span></div><div className="donutWrap"><div className="donut"><div>61%<small>On Track</small></div></div><div className="legendStack"><span><i className="greenDot"/>14 On Track</span><span><i className="amberDot"/>6 Watch</span><span><i className="redDot"/>3 At Risk</span></div></div></div>
    </div>
    <div className="sysGridThree">
      <div className="sysCard compact"><div className="cardHead"><b>Cashflow Forecast</b><span>Next 90 days</span></div><div className="cashBars">{[54,70,64,86,74,95].map((h,i)=><i key={i} style={{height:h}}/> )}</div></div>
      <div className="sysCard compact"><div className="cardHead"><b>Leadership Exceptions</b><span>7 open</span></div><ul className="exceptionList"><li><i className="redDot"/>3 milestones slipped <b>→</b></li><li><i className="amberDot"/>7 approvals overdue <b>→</b></li><li><i className="amberDot"/>₹2.4 Cr receivables due <b>→</b></li></ul></div>
      <div className="sysCard compact"><div className="cardHead"><b>Business Health</b><span>Score</span></div><div className="healthScore"><strong>8.6</strong><small>/10</small><div>Growth · Profitability · Cash · Ops</div></div></div>
    </div>
  </div>
}

function ProjectCommand() {
  const rows=[['Project X','₹18.4 Cr','82%','21.3%','On Track'],['Project Y','₹13.2 Cr','67%','18.7%','Watch'],['Project Z','₹9.8 Cr','54%','24.1%','At Risk'],['Project A','₹7.6 Cr','91%','19.8%','On Track']]
  return <div className="sysDash">
    <div className="sysHead"><div><small>PROJECT COMMAND CENTRE</small><h3>Portfolio Delivery · 23 Active Projects</h3></div><div className="sysPill">3 exceptions need leadership</div></div>
    <div className="sysKpis"><Kpi label="Portfolio Value" value="₹186 Cr" delta="+14% vs plan"/><Kpi label="Billing This Month" value="₹12.8 Cr" delta="87% achieved"/><Kpi label="Receivables Due" value="₹6.2 Cr" delta="₹2.4 Cr overdue" tone="amber"/><Kpi label="Milestones" value="46" delta="5 at risk" tone="amber"/></div>
    <div className="sysGridTwo projectTop">
      <div className="sysCard"><div className="cardHead"><b>Milestone Delivery Trend</b><span>12 weeks</span></div><LineChart/></div>
      <div className="sysCard"><div className="cardHead"><b>Portfolio Risk</b><span>By exception type</span></div><div className="riskBars">{[['Land / permits',72],['Procurement',48],['Billing',61],['Execution',34]].map(([l,v])=><div key={l}><span>{l}</span><div><i style={{width:`${v}%`}}/></div><b>{v}</b></div>)}</div></div>
    </div>
    <div className="sysCard projectTable"><div className="cardHead"><b>Project Portfolio</b><span>Illustrative project labels</span></div><div className="tableRow header"><span>Project</span><span>Revenue</span><span>Progress</span><span>Margin</span><span>Status</span></div>{rows.map(r=><div className="tableRow" key={r[0]}>{r.map((c,i)=><span key={c} className={i===4?c.replace(' ','').toLowerCase():''}>{i===2?<><b className="progressText">{c}</b><i className="tinyProgress"><u style={{width:c}}/></i></>:c}</span>)}</div>)}</div>
  </div>
}

function KraSystem() {
  const rows=[['BD','82%','8.2','4/5'],['Finance','71%','7.4','5/7'],['Projects','89%','8.8','7/8'],['HR','65%','6.9','3/5'],['SCM','78%','7.9','5/6'],['Green H2','85%','8.5','6/7']]
  return <div className="sysDash">
    <div className="sysHead"><div><small>KRA PERFORMANCE SYSTEM</small><h3>Leadership Scorecard · Q2</h3></div><div className="sysPill">100+ KRAs mapped</div></div>
    <div className="sysKpis"><Kpi label="Overall Achievement" value="79%" delta="+6 pts QoQ"/><Kpi label="KRAs On Track" value="73" delta="81%"/><Kpi label="Needs Intervention" value="11" delta="Leadership review" tone="amber"/><Kpi label="Review Completion" value="94%" delta="On cadence"/></div>
    <div className="sysGridTwo">
      <div className="sysCard"><div className="cardHead"><b>Function Performance</b><span>Weighted achievement</span></div><div className="kraBars">{rows.map(r=><div key={r[0]}><span>{r[0]}</span><div><i style={{width:r[1]}}/></div><b>{r[1]}</b></div>)}</div></div>
      <div className="sysCard"><div className="cardHead"><b>Leadership Review Matrix</b><span>Current quarter</span></div><div className="matrix">{rows.map(r=><div key={r[0]}><span>{r[0]}</span><b>{r[2]}</b><small>{r[3]} outcomes closed</small></div>)}</div></div>
    </div>
  </div>
}

function Governance() {
  const days=[['MON',['Founder Office','Payments']],['TUE',['Project Review']],['WED',['BD Pipeline','SCM Review']],['THU',['Finance MIS','HR Sync']],['FRI',['MD Review']]]
  return <div className="sysDash">
    <div className="sysHead"><div><small>GOVERNANCE CALENDAR</small><h3>Operating Rhythm · September 2026</h3></div><div className="sysPill">47 actions tracked this week</div></div>
    <div className="sysKpis"><Kpi label="Weekly Cadences" value="12" delta="100% scheduled"/><Kpi label="Actions Raised" value="47" delta="38 closed"/><Kpi label="Open Actions" value="9" delta="3 overdue" tone="amber"/><Kpi label="Decision TAT" value="1.8 d" delta="-0.6 d vs Aug"/></div>
    <div className="calendarWeek">{days.map(([d,items])=><div key={d}><b>{d}</b>{items.map((x,i)=><span key={x} className={i%2?'blue':'gold'}>{x}</span>)}</div>)}</div>
    <div className="sysGridTwo governanceBottom">
      <div className="sysCard"><div className="cardHead"><b>Open Leadership Actions</b><span>Oldest first</span></div><div className="actionRows"><div><span>Projects Head</span><b>Close approval dependency</b><em>4 days</em></div><div><span>Finance</span><b>Release vendor payment</b><em>2 days</em></div><div><span>SCM</span><b>Close PO exception</b><em>6 days</em></div></div></div>
      <div className="sysCard"><div className="cardHead"><b>Closure Trend</b><span>Last 6 weeks</span></div><div className="closureBars">{[52,61,59,72,78,83].map((v,i)=><i key={i} style={{height:`${v}%`}}><small>{v}%</small></i>)}</div></div>
    </div>
  </div>
}

function Workflow() {
  return <div className="sysDash">
    <div className="sysHead"><div><small>APPROVAL WORKFLOW ENGINE</small><h3>PO Approval · Request #1845</h3></div><div className="sysPill">SLA: 2h 14m remaining</div></div>
    <div className="workflowSummary"><div><small>Vendor</small><b>Vendor A</b></div><div><small>Value</small><b>₹42.8 L</b></div><div><small>Project</small><b>Project X</b></div><div><small>Category</small><b>Electrical BOS</b></div></div>
    <div className="approvalFlow">
      {[
        ['REQUEST','Submitted','12 Sep · 10:31','done'],
        ['TECHNICAL REVIEW','Approved','12 Sep · 15:42','done'],
        ['COMMERCIAL REVIEW','Approved','13 Sep · 11:16','done'],
        ['CFO APPROVAL','Pending','SLA running','current']
      ].map(([a,b,c,s],i)=><div className={`approvalStep ${s}`} key={a}><div className="approvalIcon">{s==='done'?'✓':i+1}</div><small>{a}</small><b>{b}</b><em>{c}</em></div>)}
    </div>
    <div className="sysGridThree workflowBottom">
      <div className="sysCard compact"><div className="cardHead"><b>This Month</b><span>Requests</span></div><div className="bigStat">164<small>Total requests</small></div></div>
      <div className="sysCard compact"><div className="cardHead"><b>SLA Performance</b><span>Monthly</span></div><div className="bigStat greenText">74%<small>Completed within SLA</small></div></div>
      <div className="sysCard compact"><div className="cardHead"><b>Current Queue</b><span>Live</span></div><ul className="exceptionList"><li>143 Approved <b>✓</b></li><li>10 Pending <b>→</b></li><li>11 Rejected <b>×</b></li></ul></div>
    </div>
  </div>
}
