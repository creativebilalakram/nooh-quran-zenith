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
    `Assalamu Alaikum,\n\nI have just booked a free Quran trial class.\n\nUser ID: ${userId}\nName: ${name}\nSelected Plan: ${plan}\n\nPlease guide me about the next steps.\n\nJazakAllah Khair`
  );
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
};
