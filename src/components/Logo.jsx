export default function Logo({ compact = false }) {
  return (
    <div className={`logo ${compact ? 'compact' : ''}`}>
      <img
        src="/zeal-logo.png"
        alt="Zeal Consulting"
        className="realLogo"
      />
    </div>
  )
}
