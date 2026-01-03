import { useState } from "react";

export default function MapEmbed() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-1/2 w-full p-3 h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg transition">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="w-full h-full relative"
        >
          <img
            src="/optimized/College.webp"
            width="800"
            height="450"
            loading="eager"
            className="w-full h-full object-cover rounded-xl"
          />
          <span className="absolute inset-0 grid place-items-center text-white bg-black/40 text-lg font-semibold">
            View Location
          </span>
        </button>
      ) : (
        <iframe
          title="Saveetha Engineering College Location"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3887.1115985791585!2d80.01422706016135!3d13.02856468723908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssaveetha%20engineering%20college!5e0!3m2!1sen!2sin!4v1767377617964!5m2!1sen!2sin"
          className="w-full h-full border-0 rounded-xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
    </div>
  );
}
