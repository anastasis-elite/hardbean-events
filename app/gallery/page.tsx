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

      <section className="galleryCarousel">
        {[
          "/1137.jpeg",
          "/1138.jpeg",
          "/1139.jpeg",
          "/1363.jpeg",
          "/1364.jpeg",
          "/1365.jpeg",
          "/1366.jpeg",
          "/1423.jpeg",
          "/1424.jpeg",
          "/2154.jpeg",
          "/FullSizeRender.jpeg",
          "/0ac5c2f2-f1a0-4270-820e-f021d45fd843-1_all_15.jpeg",
          "/IMG_20250524_122139122.jpeg",
          "/IMG_20250524_122144091.jpeg",
          "/IMG_20250524_135248942.jpeg",
          "/IMG_20250524_135300029.jpeg",
          "/IMG_20250524_135307724.jpeg",
          "/IMG_20250524_135309975.jpeg",
          "/IMG_20250524_135319131_HDR.jpeg",
        ].map((src, index) => (
          <div className="gallerySlide" key={src}>
            <img
              src={src}
              alt={`Hard Bean Event Center gallery image ${index + 1}`}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
