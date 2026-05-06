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
  <div className="footerBrand">
    <h3>Hard Bean Event Center</h3>
    <p>A warm, welcoming space for meaningful gatherings.</p>
  </div>

  <div className="footerContact">
    <a href="tel:(409)-227-4608">LUMBERTON</a>
    <a href="tel:(409)-239-5901">BEAUMONT</a>
    <a href="mailto:hardbeanlumberton@gmail.com">EMAIL HARD BEAN</a>
    <span>LUMBERTON, TEXAS</span>
  </div>

  <div className="socialButtons">
    <a className="socialButton facebook" href="https://www.facebook.com/hardbeanlumberton">
      Facebook
    </a>

    <a className="socialButton instagram" href="INSTAGRAM_URL">
      Instagram
    </a>
</footer>
      </body>
    </html>
  );
}
