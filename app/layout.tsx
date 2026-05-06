import "./globals.css";

export const metadata = {
  title: "Hard Bean Event Center",
  description: "Warm and welcoming event space for gatherings and celebrations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="logoOval">HARD BEAN</div>

          <div className="navLinks">
            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/gallery">Gallery</a>
            <a href="/rates">Rates</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>

        {children}

        <footer className="siteFooter">
          <div>
            <h3>Hard Bean Event Center</h3>
            <p>A warm, welcoming space for meaningful gatherings.</p>
          </div>

          <div className="footerContact">
            <a href="tel:HER_PHONE_NUMBER">HER PHONE NUMBER</a>
            <a href="mailto:HER_EMAIL_ADDRESS">HER EMAIL_ADDRESS</a>
            <span>ADD CITY / ADDRESS HERE</span>
          </div>

          <div className="socialButtons">
            <a className="socialButton facebook" href="FACEBOOK_URL">Facebook</a>
            <a className="socialButton instagram" href="INSTAGRAM_URL">Instagram</a>
            <a className="socialButton tiktok" href="TIKTOK_URL">TikTok</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
