// src/components/Work.jsx
import React, { useEffect } from "react";
import Img1 from "../assets/portfolio/1.webp";
import Img2 from "../assets/portfolio/2.webp";
import Img3 from "../assets/portfolio/3.webp";
import Img4 from "../assets/portfolio/4.webp";
import Img5 from "../assets/portfolio/5.webp";
import Img6 from "../assets/portfolio/6.webp";

const certificates = [
  {
    id: 1,
    title: "Saytin",
    image: Img1,
    siteUrl: "https://www.saytin.az/en",
  },
  { id: 2, title: "Emeraft", image: Img2, siteUrl: "https://emeraft.com/" },
  {
    id: 3,
    title: "Luxrentacar",
    image: Img3,
    siteUrl: "https://luxrentacar.az/en",
  },
  {
    id: 4,
    title: "XudaferinLepka",
    image: Img4,
    siteUrl: "https://xudaferin-lepka.az/",
  },
  { id: 5, title: "Lalisa", image: Img5, siteUrl: "https://lalisa.co.ua/en/" },
  {
    id: 6,
    title: "TuvAustriaAcademy",
    image: Img6,
    siteUrl: "https://tuvaustriaacademy.az/",
  },
];

export default function Work() {
  // helper to handle imported images (string or object)
  const getSrc = (img) => (typeof img === "string" ? img : img?.src ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    let FancyboxRef = null;
    // create & inject custom styles for Fancybox behavior
    const STYLE_ID = "fancybox-custom-styles";
    const styleEl = document.createElement("style");
    styleEl.id = STYLE_ID;
    styleEl.innerHTML = `
      /* push content a bit down so image isn't glued to very top */
      .fancybox__container .fancybox__content {
        padding-top: 22px;
      }

      /* ensure stage aligns items at flex-start so padding-top takes effect */
      .fancybox__stage {
        align-items: flex-start !important;
      }

      /* round image corners */
      .fancybox__slide img,
      .fancybox__content img {
        border-radius: 5px;
      }

      /* optional: slightly reduce max height so image has breathing room on small screens */
      .fancybox__content img {
        max-height: calc(100vh - 120px);
        object-fit: contain;
      }
    `;
    document.head.appendChild(styleEl);

    (async () => {
      try {
        // Import package entry (ESM) to avoid UMD/window setter issues
        const mod = await import("@fancyapps/ui");

        const Fancybox =
          mod.Fancybox ||
          mod.default?.Fancybox ||
          mod.default ||
          window?.Fancybox;

        FancyboxRef = Fancybox;

        if (!FancyboxRef) {
          console.warn("Fancybox not found after import('@fancyapps/ui').");
          return;
        }

        // Bind anchors with data-fancybox="gallery" into one gallery
        FancyboxRef.bind('[data-fancybox="gallery"]', {
          Carousel: {
            Dots: false,
            Navigation: true,
            infinite: true,
          },
          Thumbs: {
            autoStart: false,
          },
          Toolbar: {
            display: ["close", "slideshow", "fullscreen"],
          },
        });
      } catch (err) {
        console.error("Fancybox init error:", err);
      }
    })();

    return () => {
      try {
        // remove injected style
        const old = document.getElementById(STYLE_ID);
        if (old) old.remove();

        // try to close any open Fancybox instances on unmount
        if (FancyboxRef?.close) {
          FancyboxRef.close();
        } else if (window?.Fancybox?.close) {
          window.Fancybox.close();
        }
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return (
    <section className="container mx-auto mt-12 px-4" id="portfolio">
      <h2 className="text-3xl font-bold text-center text-accent mb-2">
        My Portfolio
      </h2>
      <p className="text-center text-muted mb-8">Last websites I created</p>

      {/* Grid: 1 col mobile, 2 tablet, 3 desktop => 3x2 for 6 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((c) => {
          const src = getSrc(c.image);
          return (
            <article
              key={c.id}
              className="bg-[#576de7]  rounded-xl shadow-md overflow-hidden"
            >
              {/* Wrap the image in anchor with data-fancybox so clicking opens gallery */}
              <a
                data-fancybox="gallery"
                href={src}
                data-caption={c.title}
                className="block"
                aria-label={`Open ${c.title}`}
              >
                <div className="w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={src}
                    alt={c.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </a>

              <div className="p-4 flex items-center justify-between">
                {/* "View SiteName" link opens new tab */}
                <a
                  href={c.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-white-800 "
                >
                  View {c.title}
                </a>

                {/* optional small label or icon could go here; kept minimal */}
                <span className="text-sm">WebSite</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
