export default function GalleryPage() {
  return (
    <main>

      <section className="pageHero">
        <p className="eyebrow">Gallery</p>
        <h1>See the space.</h1>
        <p>
          A look inside Hard Bean Event Center and the warm atmosphere
          created for your gatherings and celebrations.
        </p>
      </section>

      <section className="galleryGrid">
        <img src="/inside.jpg" alt="Hard Bean Event Center" />
        <img src="/events.jpg" alt="Hard Bean Event Center Event Space" />
        <img src="/hero.jpg" alt="Hard Bean Event Center Exterior" />
      </section>
    </main>
  );
}
