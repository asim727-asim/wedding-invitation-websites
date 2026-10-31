import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function ContactQueries({ data }) {
  return (
    <section className="relative flex flex-col items-center bg-[#F9F0E0] text-[#806b43] w-full py-10 md:py-14 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto flex flex-col items-center space-y-4"
      >
        <p className="gld-cinzel text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-[#806b43]">
          {data.contacts.title}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2">
          {data.contacts.people.map((person, index) => (
            person.tel ? (
              <a
                key={index}
                href={`tel:${person.tel}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#806b43]/40 text-[#806b43] hover:bg-[#806b43] hover:text-[#F9F0E0] transition-all text-xs font-semibold tracking-wide shadow-xs active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{person.name}: {person.phone}</span>
              </a>
            ) : (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#806b43]/30 text-[#806b43] text-xs font-semibold tracking-wide"
              >
                <span>{person.name} — {person.phone}</span>
              </div>
            )
          ))}
        </div>
      </motion.div>
    </section>
  );
}

