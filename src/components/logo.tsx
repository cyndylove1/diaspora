import logo from "../assets/logodiasopra.jpeg";

export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-9 h-9 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 bg-white">
        <img
          src={logo}
          alt="Diaspora International Platform Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-bold text-white text-base tracking-tight inline-block">
        DIP Africa
      </span>
    </div>
  );
}
