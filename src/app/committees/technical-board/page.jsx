import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  {
        name: "Prof. Maxim Yu. Khlopov",
        role: "Director of Virtual Institute of Astroparticle Physics, Paris, France",
    },
  {
    name: "Dr Rahul Shukla",
    role: "Walter Sisulu University, Mathatha, South Africa",
  },
  {
    name: "Dr Mahmood Khalid Jasim",
    role: "DMPS College of Arts and Sciences, Nizwa, Sultanate of Oman",
  },
  {
    name: "Dr Manuel Malaver de la Fuente",
    role: "Maritime University of the Caribbean, Venezuela",
  },
  {
    name: "Dr Nelson Falcón",
    role: "University of Carabobo, Venezuela",
  },
  {
    name: "Dr Devendra Kumar",
    role: "University of Technology and Applied Sciences-Shinas, Oman",
  },
  {
    name: "Dr Ertan Gudekli",
    role: "Faculty of Science, Istanbul University, Istanbul, Turkey",
  },
  {
    name: "Dr. Andreas Gimsa",
    role: "Dresden University of Technology, Dresden, Germany",
  },
  {
    name: "Dr Liliana Guran",
    role: "Babeş-Bolyai University, Faculty of Business, Romania",
  },
  {
    name: "Dr. Leszek Ziora",
    role: "Czestochowa University of Technology, Poland",
  },
  {
    name: "Dr Paula Bajdor",
    role: "Czestochowa University of Technology, Czestochowa, Poland",
  },
  {
    name: "Dr Lilla Knop",
    role: "Silesian University of Technology",
  },
  {
    name: "Dr Ikhtiyor Akhmedov",
    role: "Academy of Internal Affairs, Tashkent, Uzbekistan",
  },
  {
    name: "Dr Iwona Chomiak-Orsa",
    role: "Wroclaw University of Economics and Business, Poland",
  },
  {
    name: "Dr Magdalena Rzemieniak",
    role: "Lublin University of Technology, Poland",
  },
  {
    name: "Dr Maria Mach",
    role: "VSB – Technical University of Ostrava, Czech Republic",
  },
  {
    name: "Dr Tomasz Turek",
    role: "Czestochowa University of Technology, Czestochowa, Poland",
  },
];

const nationalCooperation = [
  {
    name: "Dr Debasis Kundu",
    role: "Department of Mathematics and Statistics, I.I.T. Kanpur",
  },
  {
    name: "Dr G. P. Singh",
    role: "VNIT Nagpur",
  },
  {
    name: "Dr Jainendra Kumar Singh",
    role: "Netaji Subhas University of Technology, New Delhi",
  },
  {
    name: "Dr Hemant Kumar Nashine",
    role: "University of Johannesburg, South Africa",
  },
  {
    name: "Dr Saibal Ray",
    role: "GLA University, Mathura",
  },
  {
    name: "Dr Umesh Sharma",
    role: "GLA University, Mathura",
  },
  {
    name: "Dr Sanjeev Kumar",
    role: "SMD University, Azamgarh, India",
  },
  {
    name: "Dr Kalpana Sharma",
    role: "Manipal University Jaipur",
  },
  {
    name: "Dr Narendra Kumar",
    role: "NIET, NIMS University, Jaipur, India",
  },
  {
    name: "Dr Prakash Chand Goyal",
    role: "Shri Bhawani Niketan PG College, Jaipur",
  },
  {
    name: "Dr Sanjeet Kumar",
    role: "Department of Mathematics, LNCT Bhopal",
  },
  {
    name: "Dr Sushil Bhawaria",
    role: "GIT Jaipur, India",
  },
  {
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
