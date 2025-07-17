const CertificatePopup = ({ certificate, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="flex flex-col md:flex-row bg-black rounded-xl max-w-[1000px] w-[95%] overflow-hidden animate-zoomIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side */}
        <div className="md:w-2/3 bg-black">
          <a href={certificate.link} target="_blank" rel="noopener noreferrer">
            <img
              src={certificate.img}
              alt={certificate.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 p-6 flex flex-col justify-center backdrop-blur text-white">
          <h3 className="text-2xl font-semibold mb-3">{certificate.title}</h3>
          <p className="text-base leading-relaxed text-gray-200">
            {certificate.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificatePopup;
