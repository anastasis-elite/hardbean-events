export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Event Center • Gatherings • Celebrations</p>
        <h1>Hard Bean Event Center</h1>
        <p className="heroText">
          A cozy, welcoming space for showers, birthdays, meetings, family
          gatherings, and meaningful celebrations.
        </p>

        <div className="heroButtons">
          <a href="/contact" className="primaryButton">Request Booking Info</a>
          <a href="/rates" className="secondaryButton">View Rates</a>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Welcome</p>
          <h2>A simple space made for special moments.</h2>
        </div>

        <div className="detailsBox">
          <p>
            Hard Bean Event Center offers a warm, comfortable setting that can
            be transformed for celebrations, meetings, showers, and community
            gatherings.
          </p>
          <p>
            Bring your vision, your people, and your plans — we’ll help provide
            the backdrop.
          </p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Services</p>
        <h2>Gather here for almost any occasion.</h2>

        <div className="rateGrid">
          <div className="card">
            <h3>Showers</h3>
            <p>Baby showers, bridal showers, and sweet family celebrations.</p>
          </div>

          <div className="card">
            <h3>Celebrations</h3>
            <p>Birthdays, anniversaries, reunions, and private gatherings.</p>
          </div>

          <div className="card">
            <h3>Meetings</h3>
            <p>Business meetings, classes, vendor events, and community groups.</p>
          </div>
        </div>

        <a href="/events" className="sectionButton">Explore Events</a>
      </section>

      <section className="section galleryFeature">
  <div className="galleryFeatureText">
    <p className="eyebrow">Gallery</p>
    <h2>See the space before you book.</h2>
    <p>
      Take a look inside Hard Bean Event Center and imagine how your shower,
      meeting, birthday, or gathering could come together.
    </p>
    <a href="/gallery" className="primaryButton">View Gallery</a>
  </div>

  <div className="galleryFeatureImage">
    <img src="../public/1137.jpg" alt="Inside Hard Bean Event Center" />
  </div>
</section>

      <section className="contact">
        <p className="eyebrow">Ready to plan?</p>
        <h2>Contact us to check availability.</h2>
        <p>
          Send your preferred date, event type, estimated guest count, and rental
          time needed.
        </p>
        <a className="primaryButton" href="/contact">
          Request Booking Info
        </a>
      </section>
    </main>
  );
}
