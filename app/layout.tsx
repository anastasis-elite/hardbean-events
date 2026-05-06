import "./globals.css";

export const metadata = {
  title: "Hard Bean Event Center",
  description:
    "Warm and welcoming event space for gatherings and celebrations.",
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
      </body>
    </html>
  );
}
