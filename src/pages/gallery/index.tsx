import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Banner from "../../components/banner";
import { GALLERY_IMAGES, type GalleryImage } from "../../galleryConstant";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const getSizeClasses = (size: GalleryImage["size"]) => {
    switch (size) {
      case "featured":
        return "col-span-1 md:col-span-2 row-span-3";
      case "tall":
        return "col-span-1 row-span-2";
      case "wide":
        return "col-span-1 md:col-span-2 row-span-3";
      case "standard":
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div>
      <Banner
        eyebrow="Photo Gallery"
        title="Visualizing Our Journey On The"
        highlightedText="Ground"
        description="Explore moments captured from our field programs, diaspora outreach events, and local community partnerships across the continent."
      />

      <div className="max-w-7xl bg-[#FAF9F6] py-16 px-6 sm:px-10 lg:px-16 min-h-screen text-[#111827] mx-auto">
        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[240px]">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${getSizeClasses(
                image.size,
              )}`}
            >
              <img
                src={image.src}
                alt={image.alt || "Gallery image"}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B3A]/90 via-[#0D2B3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2.5 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-[#0D2B3A] transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-black text-white rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || "Gallery image"}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
