"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle } from "lucide-react";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    service: "Branding & Design",
    requirements: "",
  });

  // Emerge popup 2.8 seconds after mounting (once preloader lifts)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // Expose global triggers on window mount
  useEffect(() => {
    const handleOpenPopup = () => {
      setIsOpen(true);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("open-lead-popup", handleOpenPopup);
      (window as any).triggerLeadPopup = handleOpenPopup;
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("open-lead-popup", handleOpenPopup);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.email) return;

    // Simulate neobrutalist successful transmission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm pointer-events-auto cursor-pointer"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="w-full max-w-lg bg-[#f4f4f0] border-4 border-black shadow-[12px_12px_0_0_#000] relative overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 bg-[#ff3366] text-white border-2 border-black p-1.5 hover:bg-black hover:text-white transition-all active:translate-y-0.5 active:shadow-none shadow-[2px_2px_0_0_#000]"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content viewports */}
            <div className="p-6 md:p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 leading-none">
                      Let&apos;s Build <span className="bg-[#e1e61b] px-1 border-2 border-black inline-block transform -rotate-1 shadow-[2px_2px_0_0_#000]">What&apos;s Next</span>
                    </h3>
                    <p className="text-neutral-600 text-xs font-bold uppercase tracking-wider">
                      Tell us what needs a rework. We respond within 1 business day.
                    </p>
                  </div>

                  {/* Inputs */}
                  <div className="flex flex-col gap-4">
                    {/* Brand Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black">
                        Brand / Creator Name <span className="text-[#ff3366]">*</span>
                      </label>
                      <input
                        type="text"
                        name="brandName"
                        required
                        placeholder="e.g. Acme Corp"
                        value={formData.brandName}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-black text-black placeholder:text-black/30 rounded-none px-4 py-2.5 outline-none font-bold text-sm focus:border-[#6c24d6] focus:shadow-[4px_4px_0_0_#6c24d6] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black">
                        Contact Email <span className="text-[#ff3366]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@brand.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-black text-black placeholder:text-black/30 rounded-none px-4 py-2.5 outline-none font-bold text-sm focus:border-[#6c24d6] focus:shadow-[4px_4px_0_0_#6c24d6] transition-all"
                      />
                    </div>

                    {/* Service Category */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black">
                        Primary Requirement
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-black text-black rounded-none px-4 py-2.5 outline-none font-bold text-sm cursor-pointer focus:border-[#6c24d6] focus:shadow-[4px_4px_0_0_#6c24d6] transition-all"
                      >
                        <option>Branding &amp; Design</option>
                        <option>Video, Animation &amp; Motion</option>
                        <option>Social Media Marketing</option>
                        <option>Digital Development</option>
                      </select>
                    </div>

                    {/* Short brief */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black">
                        Brief Description of requirements
                      </label>
                      <textarea
                        name="requirements"
                        rows={3}
                        placeholder="Tell us what needs a rework or a rebuild..."
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full bg-white border-2 border-black text-black placeholder:text-black/30 rounded-none px-4 py-3 outline-none font-bold text-sm resize-none focus:border-[#6c24d6] focus:shadow-[4px_4px_0_0_#6c24d6] transition-all"
                      />
                    </div>
                  </div>

                  {/* Bottom buttons */}
                  <div className="flex items-center justify-between gap-4 mt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="text-xs font-black uppercase tracking-widest text-black/60 hover:text-black transition-colors"
                    >
                      Maybe later
                    </button>

                    <button
                      type="submit"
                      className="group flex items-center gap-2 bg-[#e1e61b] hover:bg-black hover:text-[#e1e61b] text-black px-6 py-3 border-4 border-black text-xs font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all"
                    >
                      Send Brief
                      <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#6c24d6] mb-4 animate-bounce" strokeWidth={2.5} />
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black mb-2">
                    TRANSMISSION SENT!
                  </h4>
                  <p className="text-sm font-bold uppercase text-neutral-600 tracking-wider max-w-xs">
                    We have received your brand brief and will contact you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
