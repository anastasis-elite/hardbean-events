const rates = [
  {
    title: "Saturday Daytime Events",
    time: "Saturday, 9:00am – 5:00pm",
    prices: ["$90 / hour", "$720 full day", "+ $150 cleanup fee if needed"],
  },
  {
    title: "Sunday Daytime Events",
    time: "Sunday, 1:00pm – 6:00pm",
    prices: ["$100 / hour", "$750 full day", "+ $150 cleanup fee if needed"],
  },
  {
    title: "Evening Events",
    time: "Friday or Saturday evening",
    prices: ["Custom pricing based on event needs"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logoOval">HARD BEAN</div>

        <div className="navLinks">
          <a href="#rates">Rates</a>
          <a href="#details">Details</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Event Center • Gatherings • Celebrations</p>
        <h1>Hard Bean Event Center</h1>
        <p className="heroText">
          A warm, welcoming event space for showers, birthdays, family gatherings,
          meetings, and meaningful celebrations.
        </p>

        <div className="heroButtons">
          <a href="#contact" className="primaryButton">Request Booking Info</a>
          <a href="#rates" className="secondaryButton">View Rates</a>
        </div>
      </section>

      <section id="rates" className="section">
        <p className="eyebrow">Rental Rates</p>
        <h2>Simple pricing for your next event.</h2>

        <div className="rateGrid">
          {rates.map((rate) => (
            <div className="card" key={rate.title}>
              <h3>{rate.title}</h3>
              <p className="time">{rate.time}</p>
              <ul>
                {rate.prices.map((price) => (
                  <li key={price}>{price}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="details" className="section split">
        <div>
          <p className="eyebrow">The Space</p>
          <h2>Designed for easy, beautiful gatherings.</h2>
        </div>

        <div className="detailsBox">
          <p>
            Hard Bean Event Center is ideal for small to medium gatherings,
            private celebrations, meetings, showers, and community events.
          </p>
          <p>
            Additional setup, cleanup, and event-specific needs can be discussed
            when booking.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Ready to plan?</p>
        <h2>Contact us to check availability.</h2>
        <p>
          Send your preferred date, event type, estimated guest count, and rental
          time needed.
        </p>
        <a className="primaryButton" href="mailto:">
          Email to Book
        </a>
      </section>
    </main>
  );
}
