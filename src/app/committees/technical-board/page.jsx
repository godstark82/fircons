import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  {
    image: "/images/speakers/rahul-shukla.jpeg",
    name: "Dr Rahul Shukla",
    role: "Walter Sisulu University, Mathatha, South Africa",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Mahmood Khalid Jasim",
    role: "DMPS College of Arts and Sciences, Nizwa, Sultanate of Oman",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Manuel Malaver de la Fuente",
    role: "Maritime University of the Caribbean, Venezuela",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Nelson Falcón",
    role: "University of Carabobo, Venezuela",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Ertan Gudekli",
    role: "Faculty of Science, Istanbul University, Istanbul, Turkey",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Andreas Gimsa",
    role: "Dresden University of Technology, Dresden, Germany",
  },
  {
    image: "/images/speakers/hemant-nashine.jpeg",
    name: "Dr Hemant Kumar Nashine",
    role: "University of Johannesburg, South Africa",
  },
  {
    image: "/images/speakers/liliana.jpg",
    name: "Dr Liliana Guran",
    role: "Babeş-Bolyai University, Faculty of Business, Romania",
  },
  {
    image: "/images/speakers/prof-leszek-ziora.jpeg",
    name: "Dr. Leszek Ziora",
    role: "Czestochowa University of Technology, Poland",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Paula Bajdor",
    role: "Czestochowa University of Technology, Czestochowa, Poland",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Lilla Knop",
    role: "Silesian University of Technology",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Ikhtiyor Akhmedov",
    role: "Academy of Internal Affairs, Tashkent, Uzbekistan",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Iwona Chomiak-Orsa",
    role: "Wroclaw University of Economics and Business, Poland",
  },
  {
    image: "/images/speakers/prof-magdelena.jpeg",
    name: "Dr Magdalena Rzemieniak",
    role: "Lublin University of Technology, Poland",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Maria Mach",
    role: "VSB – Technical University of Ostrava, Czech Republic",
  },
  {
    image: "/images/speakers/dr-tomasz-turek.jpg",
    name: "Dr Tomasz Turek",
    role: "Czestochowa University of Technology, Czestochowa, Poland",
  },
];

const nationalCooperation = [
  {
    image: "/images/speakers/debasis-kundu.jpeg",
    name: "Dr Debasis Kundu",
    role: "Department of Mathematics and Statistics, I.I.T. Kanpur",
  },
  {
    image: "/images/speakers/gp-singh.jpeg",
    name: "Dr G. P. Singh",
    role: "VNIT Nagpur",
  },
  {
    image: "/images/speakers/jk-singh.jpeg",
    name: "Dr Jainendra Kumar Singh",
    role: "Netaji Subhas University of Technology, New Delhi",
  },
  {
    image: "/images/speakers/hemant-nashine.jpeg",
    name: "Dr Hemant Kumar Nashine",
    role: "University of Johannesburg, South Africa",
  },
  {
    image: "/images/speakers/saibal-ray.jpeg",
    name: "Dr Saibal Ray",
    role: "GLA University, Mathura",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Umesh Sharma",
    role: "GLA University, Mathura",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Sanjeev Kumar",
    role: "SMD University, Azamgarh, India",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Kalpana Sharma",
    role: "Manipal University Jaipur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Devendra Kumar",
    role: "University of Technology and Applied Sciences-Shinas, Oman",
  },
  {
    image: "/images/speakers/prof-leszek-ziora.jpeg",
    name: "Dr Leszek Ziora",
    role: "Czestochowa University of Technology, Poland",
  },
  {
    image: "/images/speakers/dr-narendra.jpeg",
    name: "Dr Narendra Kumar",
    role: "NIET, NIMS University, Jaipur, India",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Prakash Chand Goyal",
    role: "Shri Bhawani Niketan PG College, Jaipur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Sanjeet Kumar",
    role: "Department of Mathematics, LNCT Bhopal",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Sushil Bhawaria",
    role: "GIT Jaipur, India",
  },
  {
    image: "/images/user.jpg",
    name: "Dr Vipin K. Dubey",
    role: "GLA University, Mathura, India",
  },
];

export default function ReviewCommitteePage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeader
        title="Advisory Board"
        date="17 - 19 September"
        image="/images/simdte-white-lg.png"
        overlayColor="#1a1a2e"
        bgImage="/images/kyrgyzskiy/gallery/gallery-2.jpg"
        dividerColor="primary"
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">International Advisory Board</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12" />
        <CommitteeMemberGrid members={internationalAdvisoryBoard} />

        <div className="my-16" />

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">National Advisory Board</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12" />
        <CommitteeMemberGrid members={nationalCooperation} />
      </section>
    </div>
  );
}
