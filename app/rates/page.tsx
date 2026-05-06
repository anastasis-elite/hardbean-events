const rates = [
  {
    title: "Weekday Daytime Rental",
    time: "Monday – Friday, 9:00am – 5:00pm",
    details: [
      "Ideal for meetings, trainings, classes, showers, and daytime gatherings.",
      "Hourly or full-day availability may be discussed based on event needs.",
    ],
  },
  {
    title: "Weeknight Rental",
    time: "Monday – Thursday, 5:00pm – 9:00pm",
    details: [
      "Perfect for evening meetings, small celebrations, classes, and community events.",
      "Great option for shorter after-work gatherings.",
    ],
  },
  {
    title: "Friday & Saturday Night Rental",
    time: "Friday & Saturday, after 5:00pm",
    details: [
      "Best for evening celebrations, parties, receptions, and private events.",
      "Custom pricing based on event type, length, setup, and cleanup needs.",
    ],
  },
  {
    title: "Saturday Daytime Rental",
    time: "Saturday, 9:00am – 5:00pm",
    details: [
      "$90 / hour",
      "$720 full day",
      "+ $150 cleanup fee if needed",
    ],
  },
  {
    title: "Sunday Daytime Rental",
    time: "Sunday, 1:00pm – 6:00pm",
    details: [
      "$100 / hour",
      "$750 full day",
      "+ $150 cleanup fee if needed",
    ],
  },
];

export default function RatesPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Rental Rates</p>
        <h1>Rental options for every kind of gathering.</h1>
        <p>
          Choose the rental window that fits your event best. Some events may
          require custom pricing depending on setup, timing, and cleanup needs.
        </p>
      </section>

      <section className="section">
        <div className="ratesList">
          {rates.map((rate) => (
            <div className="rateDetailCard" key={rate.title}>
              <div>
                <h3>{rate.title}</h3>
                <p className="time">{rate.time}</p>
              </div>

              <ul>
                {rate.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <p className="eyebrow">Questions?</p>
        <h2>Need help choosing the right rental window?</h2>
        <p>
          Send your event date, event type, guest count, and preferred time, and
          Mrs. Diane can help confirm the best option.
        </p>
        <a href="/contact" className="primaryButton">
          Request Booking Info
        </a>
      </section>
    </main>
  );
}
