import { MessageCircle } from "lucide-react";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/917718036089"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsappButton;