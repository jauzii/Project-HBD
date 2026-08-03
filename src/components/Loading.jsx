function Loading() {
  return (
    <section className="loading-screen" aria-label="Loading birthday surprise">
      <div className="loading-card">
        <p className="loading-kicker">Birthday scrapbook</p>
        <h1 className="loading-title">Preparing your surprise</h1>
        <div className="loading-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}

export default Loading
