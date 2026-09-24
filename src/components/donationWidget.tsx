import { useState } from "react";
import { CheckCircle2, Lock } from "lucide-react";

export default function DonationWidget() {
  const [selectedOption, setSelectedOption] = useState<number>(50);
  const [customValue, setCustomValue] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  const amounts: number[] = [10, 50, 100];

  // Added explicit number type to amt
  const handleSelectAmount = (amt: number) => {
    setIsCustom(false);
    setSelectedOption(amt);
  };

  const handleSelectCustom = () => {
    setIsCustom(true);
  };

  const getDisplayAmount = (): string => {
    if (isCustom) {
      return customValue ? `$${customValue}` : "Custom";
    }
    return `$${selectedOption}`;
  };

  const handleContribute = () => {
    const amt = getDisplayAmount();
    setNotification(
      `Thank you! Redirecting to secure gateway for ${amt} contribution.`,
    );
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <section
      id="donate"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#07130F] via-[#0E221B] to-[#07130F]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#132E24]/50 backdrop-blur-xl p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/40 shadow-2xl text-center">
          <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold">
            Invest In Our Mission
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Support Africa's Future
          </h2>
          <p className="text-gray-300 text-sm mt-3 max-w-xl mx-auto">
            Every contribution directly supports diaspora networking
            infrastructure, local project funding, and strategic advocacy
            initiatives.
          </p>

          <div className="mt-10 max-w-lg mx-auto">
            {/* Amount Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleSelectAmount(amt)}
                  className={`py-3 px-2 rounded-xl border font-bold transition-all text-sm sm:text-base ${
                    !isCustom && selectedOption === amt
                      ? "border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]"
                      : "border-white/10 bg-[#132E24]/40 text-white hover:border-[#D4AF37]"
                  }`}
                >
                  ${amt}
                </button>
              ))}
              <button
                onClick={handleSelectCustom}
                className={`py-3 px-2 rounded-xl border font-bold transition-all text-sm sm:text-base ${
                  isCustom
                    ? "border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37]"
                    : "border-white/10 bg-[#132E24]/40 text-white hover:border-[#D4AF37]"
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Input */}
            {isCustom && (
              <div className="mb-6">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    value={customValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCustomValue(e.target.value)
                    }
                    placeholder="Enter custom amount"
                    className="w-full pl-8 pr-4 py-3 bg-[#07130F]/80 border border-[#D4AF37]/40 rounded-xl text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                  />
                </div>
              </div>
            )}

            {/* Display Selected Amount */}
            <div className="mb-8 p-4 rounded-xl bg-[#07130F]/50 border border-white/5 text-xs text-gray-300">
              Selected Contribution:{" "}
              <span className="font-bold text-[#D4AF37] text-sm">
                {getDisplayAmount()}
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleContribute}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#AA820A] hover:from-[#F3E5AB] hover:to-[#D4AF37] text-[#07130F] font-extrabold py-4 rounded-full text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-[#D4AF37]/20"
            >
              Proceed to Contribute
            </button>

            {/* Guarantee Badges */}
            <div className="flex items-center justify-center gap-6 text-gray-400 text-xs mt-6">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Secure SSL
                Payment
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Tax
                Deductible
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#132E24] p-4 rounded-xl border border-[#D4AF37] text-white text-sm shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}
    </section>
  );
}
