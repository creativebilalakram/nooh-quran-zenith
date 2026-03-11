const WA_NUMBER = "18255954870";

export const scrollToPricing = () => {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToForm = () => {
  document.getElementById("book-trial")?.scrollIntoView({ behavior: "smooth" });
};

export const generateUserId = () => {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `QURAN-${num}`;
};

export const openWhatsAppGeneral = () => {
  const msg = encodeURIComponent(
    `Assalamu Alaikum,\n\nI am interested in online Quran classes at Nooh's Quran Learning Centre.\nPlease share more details about your courses and schedule.\n\nJazakAllah Khair`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
};

export const openWhatsAppWithBooking = (userId: string, name: string, plan: string) => {
  const msg = encodeURIComponent(
    `Assalamu Alaikum,

My name is *${name}*.

I have just booked a **Free Quran Trial Class** from your website and I would like to begin learning with the *${plan} Plan*.

My *User ID* is: *${userId}*

Please guide me about the next steps and available class timings.

JazakAllah Khair`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
};
