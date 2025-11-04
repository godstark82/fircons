import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  {
    image: "/images/user.jpg",
    name: "Prof. Jay Narayan",
    role: "John C. Fan Family Distinguished Chair Professor of Materials Science, North Caroline State University",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Pankay Attri",
    role: "National University Corporation Kyushu University, Japan",
  },
  {
    image: "/images/user.jpg",
    name: "Prof. Imran Ali",
    role: "[Jamia Milia Islamia (Central University), India]"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Retd.) Anil Kumar",
    role: "[IIT Roorkee]"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. Dinesh Mohan",
    role: "[JNU, India]"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. Sameer Sapra",
    role: "[IIT Delhi, India]"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. L.P. Singh",
    role: "[Director General, National Council for NCCBM, India]"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Soo Choi",
    role: "[Nexmos, South Korea]"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Millie Pant",
    role: "Professor & Head, Department of Applied Mathematics and Scientific Computing, IIT Roorkee",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Joydeep Dutta",
    role: "[KTH Royal Institute of Technology, Sweden]"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Neelam Bharti",
    role: "Technology & Technical Services, Carnegie Mellon University USA",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Antony George",
    role: "Germany"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. M.V.R Reddy",
    role: "Canada"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Lilliana Guran",
    role: "Babes-Bolyai University, Cluj-Napoca, Romania",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Dorota Jelonek",
    role: "Czestochowa University of Technology, Poland",
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Monika Bota",
    role: "Babes-Bolyai University, Cluj-Napoca, Romania",
  },
  {
    image: "/images/user.jpg",
    name: "Mr. Himanshu Jain",
    role: "Analog Devices"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Biswajit Sarkar",
    role: "Yonesai University, South Korea"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Rahul Singal",
    role: "C USA"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Shailendra Jain",
    role: "(MNIT, Bhopal)"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Kanjilal",
    role: "IUAC, New Delhi"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Shabir Hasan",
    role: "Khalifa University, UAE"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Santanu Basu",
    role: "Sweden Agriculture University, Sweden"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Pawan Singh",
    role: "University of Missouri, USA"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Arun Kumar Choudhary",
    role: "MNRE"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Vinod Kr. Yadav",
    role: "DTU"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Anil Kumar",
    role: "DTU"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Sanjay Jain",
    role: "TIET"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Indivar Gupta",
    role: "DRDO, SAG Lab, New Delhi"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Dhananjoy Dey",
    role: "IIIT, Lucknow"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Neeraj Atrai",
    role: "IIP, Dehradun"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Neeraj Jain",
    role: "CBRI-CSIR, Roorkee"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Bhupinder Singh",
    role: "IIT, Roorkee"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Ashok Panwar",
    role: "(Industry)"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Amit Panwar",
    role: "Global Technology Manager, DuPont, India"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) S. Chandra Sekhara Rao",
    role: "IIT Delhi"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Jitendra Mohan",
    role: "JIIT, Noida"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Rajesh Ghangal",
    role: "Scientist, DST"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Sandeep Shiromani",
    role: "Associate Director, BioCon"
  },
  {
    image: "/images/user.jpg",
    name: "Dr. Rupak Raja",
    role: "(Industry)"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Pritish Varadwaj",
    role: "IIIT Allahabad"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Anita Yadav",
    role: "Kurukshetra University"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Suresh Chandra",
    role: "(Indore)"
  },
];

const nationalAdvisoryBoard = [
  {
    image: "/images/user.jpg",
    name: "Dr. A.K Jaiswal",
    role: "AIIMS"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Amardeep Singh",
    role: "IOCI, India"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Sonal Singhal",
    role: "Punjab University, Chandigarh"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Sudhir Kumar",
    role: "Deputy Director, FSL, Moradabad"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. A. Dutta",
    role: "GGSIP University, India"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Tripti Bhatnagar",
    role: "Codon Biotech Pvt. Ltd., Noida, India"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Yatendra S Chaudhary",
    role: "CSIR-Institute OF Minerals and Materials Technology, Bhubaneswar"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. Sandeep Kumar",
    role: "C.V. Raman Avenue, Bangalore, India"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. Pabitra Nayak",
    role: "TIFR, Hyderabad"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Bhaskar Chauhan",
    role: "Puniska Healthcare Pvt. Ltd., Aahmadabad, India"

  },
  {
    image: "/images/user.jpg",
    name: "Mr. Pradeep Kumar Jain",
    role: "VP, Glenmark Pharma"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. S. Mahapatra",
    role: "Professor, GGSIP University, New Delhi"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Adarsh Kumar",
    role: "Director, Forensic Science Laboratory, Lucknow"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Amit Goel",
    role: "Professor & Dean, SPSU, Udaipur"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Sanjeev Sharma",
    role: "Pro Vice Chancellor, Shushant University, Haryana"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Pradeep Kumar",
    role: "Pro Vice Chancellor, MRIIRS, Faridabad, Haryana"

  },
  {
    image: "/images/user.jpg",
    name: "Dr. Tokeer Ahmed",
    role: "JMI, New Delhi"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) O.P. Sharma",
    role: "IIT-Patna"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Piyush Tiwari",
    role: "Director, Bits, Jaipur"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Piyush Kant",
    role: "BHU"
  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Adrijit Goswami",
    role: "IIT – Khargpur"

  },
  {
    image: "/images/user.jpg",
    name: "Prof. (Dr.) Rajesh",
    role: "CSIR-NPL, Delhi"

  },
];


export default function ReviewCommitteePage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeader
        title="Advisory Boards"
        date="6 - 7 September"
        image="/images/simdte-white-lg.png"
        overlayColor="#1a1a2e"
        bgImage="/images/utb-images/gallery/gallery-2.jpg"
        dividerColor="primary"
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">International Advisory Board</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12" />
        <CommitteeMemberGrid members={internationalAdvisoryBoard} />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-16">National Advisory Board</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-12" />
        <CommitteeMemberGrid members={nationalAdvisoryBoard} />
      </section>
    </div>
  );
}
