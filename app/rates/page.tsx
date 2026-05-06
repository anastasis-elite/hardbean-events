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
    prices: ["Custom pricing based on event needs", "Contact to check availability"],
  },
];

export default function RatesPage() {
  return (
    <main>

      <section className="pageHero">
        <p className="eyebrow">Rental Rates</p>
        <h1>Simple pricing for your next event.</h1>
        <p>
          Choose the time that fits your gathering best. Custom needs can be
          discussed when requesting availability.
        </p>
      </section>

      <section className="section">
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
    </main>
  );
}
