export default function ContactPage() {
  return (
    <main>

      <section className="pageHero">
        <p className="eyebrow">Contact</p>
        <h1>Request booking information.</h1>
        <p>
          Fill out the form below with your event details and Mrs. Diane will
          receive your request by email.
        </p>
      </section>

      <section className="section">
        <form
          className="contactForm"
          action="YOUR_N8N_WEBHOOK_URL_HERE"
          method="POST"
        >
          <input type="hidden" name="source" value="Hard Bean Event Center Website" />

          <label>
            Your Name
            <input name="name" type="text" required />
          </label>

          <label>
            Email
            <input name="email" type="email" required />
          </label>

          <label>
            Phone Number
            <input name="phone" type="tel" />
          </label>

          <label>
            Event Date
            <input name="eventDate" type="date" />
          </label>

          <label>
            Event Type
            <input
              name="eventType"
              type="text"
              placeholder="Baby shower, birthday, meeting, etc."
            />
          </label>

          <label>
            Estimated Guest Count
            <input name="guestCount" type="number" min="1" />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your event, preferred time, and any setup needs."
              required
            />
          </label>

          <button type="submit" className="primaryButton">
            Send Booking Request
          </button>
        </form>
      </section>
    </main>
  );
}
