import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Check, Send } from 'lucide-react';

export default function RsvpSection({ data }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    adultsCount: 1,
    childrenCount: 0,
    attendingEvents: ['Nikah', 'Dawat-e-Walima'],
    isDeclined: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEventToggle = (eventName) => {
    if (form.isDeclined) return;
    const exists = form.attendingEvents.includes(eventName);
    const updated = exists
      ? form.attendingEvents.filter((e) => e !== eventName)
      : [...form.attendingEvents, eventName];

    setForm({
      ...form,
      attendingEvents: updated
    });
  };

  const handleDeclineToggle = (e) => {
    const checked = e.target.checked;
    setForm({
      ...form,
      isDeclined: checked,
      attendingEvents: checked ? [] : ['Nikah', 'Dawat-e-Walima']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-12 md:py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto flex flex-col items-center"
      >
        {/* Section Heading */}
        <h2 className="gld-script text-[40px] md:text-[46px] text-center text-[#806b43] mb-1">
          {data.rsvp.title}
        </h2>

        {/* Golden Divider */}
        <div className="flex justify-center mb-6 w-full">
          <img
            src={data.media.divider}
            alt="Divider"
            className="h-[20px] md:h-[24px] object-contain opacity-90 drop-shadow-sm"
          />
        </div>

        <p className="font-sans text-xs md:text-sm text-[#806b43]/80 max-w-[280px] mb-8 leading-relaxed">
          {data.rsvp.subtitle}
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-12 w-full flex flex-col items-center bg-[#F9F0E0] rounded-2xl border border-[#806b43]/25 p-6 shadow-sm"
          >
            <Heart className="h-10 w-10 text-[#806b43] mb-4 animate-pulse fill-[#806b43]/30" />
            <h3 className="gld-cinzel font-bold text-2xl text-[#806b43] mb-2 uppercase tracking-widest">
              Thank You!
            </h3>
            <p className="font-sans text-sm text-[#806b43]/85">
              Your response has been saved. We look forward to celebrating with you!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 w-full text-left">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="font-sans text-[11px] uppercase tracking-widest text-[#806b43] font-semibold opacity-85 pl-1 block">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-[#806b43]/35 py-2 px-2 text-[#806b43] placeholder-[#806b43]/45 focus:outline-none focus:border-[#806b43] font-sans text-sm"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label className="font-sans text-[11px] uppercase tracking-widest text-[#806b43] font-semibold opacity-85 pl-1 block">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-transparent border-b border-[#806b43]/35 py-2 px-2 text-[#806b43] placeholder-[#806b43]/45 focus:outline-none focus:border-[#806b43] font-sans text-sm"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="font-sans text-[11px] uppercase tracking-widest text-[#806b43] font-semibold opacity-85 pl-1 block">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-[#806b43]/35 py-2 px-2 text-[#806b43] placeholder-[#806b43]/45 focus:outline-none focus:border-[#806b43] font-sans text-sm"
              />
            </div>

            {/* Guest Count: Adults & Children */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="space-y-1">
                <label className="font-sans text-[11px] uppercase tracking-widest text-[#806b43] font-semibold opacity-85 pl-1 block">
                  Adults
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={form.adultsCount}
                  onChange={(e) =>
                    setForm({ ...form, adultsCount: parseInt(e.target.value) || 1 })
                  }
                  className="w-full bg-transparent border-b border-[#806b43]/35 py-2 px-2 text-[#806b43] focus:outline-none focus:border-[#806b43] font-sans text-center text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="font-sans text-[11px] uppercase tracking-widest text-[#806b43] font-semibold opacity-85 pl-1 block">
                  Children
                </label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={form.childrenCount}
                  onChange={(e) =>
                    setForm({ ...form, childrenCount: parseInt(e.target.value) || 0 })
                  }
                  className="w-full bg-transparent border-b border-[#806b43]/35 py-2 px-2 text-[#806b43] focus:outline-none focus:border-[#806b43] font-sans text-center text-sm"
                />
              </div>
            </div>

            {/* Event Selection Checkboxes */}
            <div className="space-y-2.5 pt-4">
              <label className="font-sans text-[11px] uppercase tracking-widest text-[#806b43] font-semibold opacity-85 pl-1 block">
                Will you be attending?
              </label>

              {data.rsvp.eventsList.map((evt) => (
                <label
                  key={evt}
                  className={`flex items-center gap-3 p-3 rounded-xl border border-[#806b43]/20 hover:border-[#806b43]/50 cursor-pointer transition-all ${
                    form.attendingEvents.includes(evt) ? 'bg-[#806b43]/10 font-semibold' : ''
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={form.attendingEvents.includes(evt)}
                    onChange={() => handleEventToggle(evt)}
                    disabled={form.isDeclined}
                    className="w-4 h-4 rounded border-[#806b43]/40 text-[#806b43] focus:ring-[#806b43] cursor-pointer"
                  />
                  <span className="text-xs md:text-sm text-[#806b43]">{evt}</span>
                </label>
              ))}

              {/* Decline Option */}
              <label
                className={`flex items-center gap-3 p-3 rounded-xl border border-[#806b43]/20 hover:border-[#806b43]/50 cursor-pointer transition-all ${
                  form.isDeclined ? 'bg-[#806b43]/10 font-semibold' : ''
                }`}
              >
                <input
                  type="checkbox"
                  checked={form.isDeclined}
                  onChange={handleDeclineToggle}
                  className="w-4 h-4 rounded border-[#806b43]/40 text-[#806b43] focus:ring-[#806b43] cursor-pointer"
                />
                <span className="text-xs md:text-sm text-[#806b43]/85">
                  Regretfully decline
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-full max-w-[240px] py-3.5 px-6 border border-[#806b43] text-[#F9F0E0] bg-[#806b43] hover:bg-transparent hover:text-[#806b43] transition-all duration-300 gld-cinzel text-xs font-bold uppercase tracking-widest shadow-md rounded-full active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit RSVP</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}

