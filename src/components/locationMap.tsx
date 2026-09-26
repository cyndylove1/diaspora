export default function LocationMap() {
  return (
    <section className="bg-[#FAF9F6] px-4 py-16 md:px-6 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            Visit Us
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#073B4C] sm:text-5xl">
            Find Us <span className="text-emerald-700">Here</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Visit the Diaspora International Platform for Africa at our office
            in Sterling, Virginia.
          </p>
        </div>

        {/* Map + Address */}
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-12">

          {/* Map */}
          <div className="h-[400px] lg:col-span-8 lg:h-[500px]">
            <iframe
              title="DIP Africa Location"
              src="https://www.google.com/maps?q=22936+Fleet+Terrace,+Sterling,+VA+20166,+United+States&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col justify-center bg-[#073B4C] p-8 text-white sm:p-10 lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Our Location
            </span>

            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
              Diaspora International Platform for Africa
            </h3>

            <div className="mt-6">
              <p className="text-sm leading-7 text-white/80">
                22936 Fleet Terrace
                <br />
                Sterling, VA 20166
                <br />
                United States
              </p>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=22936+Fleet+Terrace,+Sterling,+VA+20166,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#073B4C] transition-all duration-300 hover:bg-emerald-100"
            >
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}