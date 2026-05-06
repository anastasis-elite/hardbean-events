export default function ContactPage() {
  return (
    <main>
      <section className="pageHero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s plan your event.</h1>
        <p>
          Send Mrs. Diane your event details below, and she’ll receive your
          request directly by email.
        </p>
      </section>

      <section className="section contactLayout">
        <div className="contactIntro">
          <p className="eyebrow">Booking Request</p>
          <h2>Tell us what you’re planning.</h2>
          <p>
            Include your preferred date, event type, guest count, and anything
            special you may need for setup.
          </p>

          <div className="contactNote">
            <strong>Best for:</strong>
            <span>Showers, birthdays, family gatherings, meetings, and celebrations.</span>
          </div>
        </div>

        <form
          className="emailForm"
          action="YOUR_N8N_WEBHOOK_URL_HERE"
          method="POST"
        >
          <div className="emailHeader">
            <p>To: Mrs. Diane</p>
            <p>Subject: New Hard Bean Event Inquiry</p>
          </div>

          <input type="hidden" name="source" value="Hard Bean Event Center Website" />

          <div className="formRow">
            <label>
              Name
              <input name="name" type="text" required />
            </label>

            <label>
              Email
              <input name="email" type="email" required />
            </label>
          </div>

          <div className="formRow">
            <label>
              Phone
              <input name="phone" type="tel" />
            </label>

            <label>
              Event Date
              <input name="eventDate" type="date" />
            </label>
          </div>

          <div className="formRow">
            <label>
              Event Type
              <input
                name="eventType"
                type="text"
                placeholder="Baby shower, birthday, meeting..."
              />
            </label>

            <label>
              Guest Count
              <input name="guestCount" type="number" min="1" />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              rows={8}
              placeholder="Hi Mrs. Diane, I’m interested in booking Hard Bean Event Center for..."
              required
            />
          </label>

          <button type="submit" className="primaryButton">
            Send Inquiry
          </button>
        </form>
      </section>
    </main>
  );
}
