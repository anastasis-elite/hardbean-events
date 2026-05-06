export default function EventsPage() {
  return (
    <main>

      <section className="pageHero imageEvents">
        <p className="eyebrow">Events</p>
        <h1>Celebrate beautifully.</h1>
        <p>
          Hard Bean Event Center is a warm, welcoming space for showers,
          birthdays, family gatherings, meetings, celebrations, and community events.
        </p>
      </section>

      <section className="section">
        <h2>Perfect for meaningful gatherings.</h2>

        <div className="rateGrid">
          <div className="card">
            <h3>Showers</h3>
            <p>Baby showers, bridal showers, and intimate celebrations.</p>
          </div>

          <div className="card">
            <h3>Birthdays</h3>
            <p>Simple, cozy space for birthdays and family milestones.</p>
          </div>

          <div className="card">
            <h3>Meetings</h3>
            <p>Community meetings, small business events, and private gatherings.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
