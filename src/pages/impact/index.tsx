import { useState } from "react";
import { X, ZoomIn, ArrowUpRight } from "lucide-react";
import Banner from "../../components/banner";
import { IMPACT_IMAGES, type ImpactImage } from "../../galleryConstant";

export default function Impact() {
  const [selectedImage, setSelectedImage] = useState<ImpactImage | null>(null);

  const getSizeClasses = (size: ImpactImage["size"]) => {
    switch (size) {
      case "featured":
        return "col-span-2 md:col-span-2 row-span-3";

      case "tall":
        return "col-span-1 row-span-2";

      case "wide":
        return "col-span-1 md:col-span-2 row-span-3";

      case "standard":
      default:
        return "col-span-1 row-span-";
    }
  };

  return (
    <div className="bg-[#FAF9F6]">
      {/* Page Banner */}
      <Banner
        eyebrow="Our Impact"
        title="Creating Change That"
        highlightedText="Lasts"
        description="Discover how our programs, partnerships, and community initiatives are creating meaningful opportunities, empowering people, and driving sustainable change across Africa."
    />

      {/* Gallery */}
      <section className="min-h-screen px-4 py-16 md:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Heading */}
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Our Work In Action
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Moments That Tell Our{" "}
              <span className="text-emerald-700">Story</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Every image represents a moment of connection, partnership,
              service, and community impact.
            </p>
          </div>

          {/* Asymmetric Gallery */}
          <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {IMPACT_IMAGES.map((image) => (
              <article
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${getSizeClasses(
                  image.size,
                )}`}
              >
                {/* Image */}
                {/* Image */}
<img
  src={image.src}
  alt={image.alt || "Impact gallery image"}
  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
/>
                
                

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Zoom Icon */}
                <div className="absolute right-4 top-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-emerald-700">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Description */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Impact {String(image.id).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-medium leading-6 text-white sm:text-base">
                      {image.desc}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      View Image
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-all hover:bg-black"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="flex max-h-[65vh] w-full items-center justify-center overflow-hidden bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || "Impact gallery image"}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Description */}
            <div className="bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                    Impact {String(selectedImage.id).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 font-serif text-xl font-bold text-gray-900 sm:text-2xl">
                    {selectedImage.alt}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
                    {selectedImage.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}