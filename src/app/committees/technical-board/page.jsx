import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  {
    image: "/images/user.jpg",
    name: "Dr. Manuel Malaver de la Fuente",
    role: "Department of Basic Sciences, Maritime University of the Caribbean, Venezuela",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Nelson Falcón",
    role: "Laboratory of Physics of the Atmosphere and Outer Space, Department of Physics, Experimental Faculty of Science and Technology, University of Carabobo, Venezuela",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Ertan Gudekli",
    role: "Faculty of Science, Department of Physics, Istanbul University, Istanbul, Turkey",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Gabriel Abellán",
    role: "School of Physics, Faculty of Science, Central University of Venezuela, Caracas, Venezuela",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Andreas Gimsa",
    role: "Faculty of Mechanical Engineering, Dresden University of Technology, Dresden, Germany",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Hanan Majid Saleh",
    role: "Department of Physics, College of Education for Women, University of Kirkuk, Kirkuk, Iraq",
  },
];

const nationalCooperation = [
  {
    image: "/images/user.jpg",
    name: "Dr. Debasis Kundu",
    role: "Department of Mathematics and Statistics, I.I.T. Kanpur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Rajesh Pandey",
    role: "Department of Mathematical Sciences, Indian Institute of Technology (BHU) Varanasi",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Shiv Prasad Yadav",
    role: "Professor, Dept. of Mathematics, IIT Roorkee, India",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Arvind Kumar Sinha",
    role: "Professor, NIT Raipur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. G. P. Singh",
    role: "Professor, VNIT Nagpur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. G. S. Khadekar",
    role: "Retd Prof, RTMNU, Nagpur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Jainendra Kumar Singh",
    role: "Professor and HoD of Mathematics, Netaji Subhas University of Technology, New Delhi",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Dheeraj Kulkarni",
    role: "Professor, IISER Bhopal",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. D. D. Pawar",
    role: "Director and Professor, Swami Ramanand Tirth Marathwada University",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Abhay Khamborkar",
    role: "Head, Department of Statistics, Institute of Science, Nagpur",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Hemant Kumar Nashine",
    role: "Professor & Dean SASL, VIT Bhopal University, Bhopal & Visiting Professor at University of Johannesburg, South Africa",
  },
  {
    image: "/images/speakers/saibal-ray.jpg",
    name: "Dr. Saibal Ray",
    role: "Associate Director, Centre for Cosmology, Astrophysics and Space Science (CCASS), GLA University, Mathura",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Sudhaker Upadhyay",
    role: "Department of Physics, K.L.S.College, Nawada, Bihar-805 110, India",
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
