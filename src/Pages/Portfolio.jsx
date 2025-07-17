import { useState } from "react";
import CertificatePopup from "../components/CertificatePopup";
import certificates from "../Data/certificates";

const Portfolio = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white p-6">
      <div className="flex flex-wrap justify-center gap-6">
        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer w-[280px] bg-[#111] border-2 border-white rounded-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] flex flex-col items-center"
          >
            <img
              src={cert.img}
              alt={cert.alt}
              className="w-full h-[180px] object-cover border-b border-white"
            />
            <div className="text-center px-4 py-3 border-t border-white font-semibold tracking-wide w-full">
              {cert.name}
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <CertificatePopup
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;