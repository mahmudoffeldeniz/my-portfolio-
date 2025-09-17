import React, { useState } from "react";
import Img1 from "../assets/certifcate/1.webp";
import Img2 from "../assets/certifcate/2.webp";
import Img3 from "../assets/certifcate/3.webp";

const certificates = [
  {
    id: 1,
    title: "JOHNS HOPKINS",
    image: Img1,
    description:
      " I completed this course and improved my skills in HTML, CSS," +
      " and JavaScript. I practiced with real projects " +
      "and gained very useful experience!\n",
  },
  {
    id: 2,
    title: "Meta Front end Developer",
    image: Img2,
    description:
      " I finished the Meta Front-End Developer course and learned a lot" +
      " about HTML, CSS, JavaScript and React. I also worked " +
      "on projects and improved my practical skills!\n",
  },
  {
    id: 3,
    title: "Intermediate Frontend Web Developer Path",
    image: Img3,
    description:
      " I completed the Intermediate Frontend Web Developer Path and" +
      " improved my knowledge of HTML, CSS, JavaScript, and React." +
      " I practiced projects and gained real experience!\n",
  },
];

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="container mx-auto mt-24">
      <h2 className="h2 text-accent text-center mb-10">My Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-accent shadow-md h-[100%] p-2 rounded-lg cursor-pointer duration-300 transform hover:scale-105"
            onClick={() => openCertificateModal(certificate)}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center">
          <div className="bg-[#576de7] p-4 shadow-lg rounded-lg">
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-xl text-white font-semibold mb-2">
              {selectedCertificate.title}
            </h2>
            <p className="text-white lg:w-[400px] mb-4">
              {selectedCertificate.description}
            </p>
            <button
              onClick={closeCertificateModal}
              className="btn text-white px-4 py-2 rounded-lg z-50 hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
