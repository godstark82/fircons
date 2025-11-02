import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const internationalAdvisoryBoard = [
  {
    name: "Prof. Jay Narayan",
    role: "[translate:John C. Fan Family Distinguished Chair Professor of Materials Science, North Caroline State University]",
  },
  {
    name: "Dr. Pankay Attri",
    role: "[translate:National University Corporation Kyushu University, Japan]",
  },
  { name: "Prof. Imran Ali", role: "[translate:Jamia Milia Islamia (Central University), India]" },
  { name: "Prof. (Retd.) Anil Kumar", role: "[translate:IIT Roorkee]" },
  { name: "Prof. Dinesh Mohan", role: "[translate:JNU, India]" },
  { name: "Prof. Sameer Sapra", role: "[translate:IIT Delhi, India]" },
  { name: "Prof. L.P. Singh", role: "[translate:Director General, National Council for NCCBM, India]" },
  { name: "Dr. Soo Choi", role: "[translate:Nexmos, South Korea]" },
  {
    name: "Dr. Millie Pant",
    role: "[translate:Professor & Head, Department of Applied Mathematics and Scientific Computing, IIT Roorkee]",
  },
  { name: "Dr. Joydeep Dutta", role: "[translate:KTH Royal Institute of Technology, Sweden]" },
  {
    name: "Dr. Neelam Bharti",
    role: "[translate:Technology & Technical Services, Carnegie Mellon University USA]",
  },
  { name: "Dr. Antony George", role: "[translate:Germany]" },
  { name: "Dr. M.V.R Reddy", role: "[translate:Canada]" },
  {
    name: "Dr. Lilliana Guran",
    role: "[translate:Babes-Bolyai University, Cluj-Napoca, Romania]",
  },
  {
    name: "Dr. Dorota Jelonek",
    role: "[translate:Czestochowa University of Technology, Poland]",
  },
  {
    name: "Dr. Monika Bota",
    role: "[translate:Babes-Bolyai University, Cluj-Napoca, Romania]",
  },
  { name: "Mr. Himanshu Jain", role: "[translate:Analog Devices]" },
  { name: "Prof. (Dr.) Biswajit Sarkar", role: "[translate:Yonesai University, South Korea]" },
  { name: "Prof. (Dr.) Rahul Singal", role: "[translate:C USA]" },
  { name: "Prof. (Dr.) Shailendra Jain", role: "[translate:(MNIT, Bhopal)]" },
  { name: "Prof. (Dr.) Kanjilal", role: "[translate:IUAC, New Delhi]" },
  { name: "Dr. Shabir Hasan", role: "[translate:Khalifa University, UAE]" },
  { name: "Dr. Santanu Basu", role: "[translate:Sweden Agriculture University, Sweden]" },
  { name: "Dr. Pawan Singh", role: "[translate:University of Missouri, USA]" },
  { name: "Prof. (Dr.) Arun Kumar Choudhary", role: "[translate:MNRE]" },
  { name: "Prof. (Dr.) Vinod Kr. Yadav", role: "[translate:DTU]" },
  { name: "Prof. (Dr.) Anil Kumar", role: "[translate:DTU]" },
  { name: "Prof. (Dr.) JS Lather", role: "[translate:NIT, Kurukshetra]" },
  { name: "Prof. (Dr.) Sanjay Jain", role: "[translate:TIET]" },
  { name: "Dr. Indivar Gupta", role: "[translate:DRDO, SAG Lab, New Delhi]" },
  { name: "Dr. Dhananjoy Dey", role: "[translate:IIIT, Lucknow]" },
  { name: "Prof. (Dr.) Neeraj Atrai", role: "[translate:IIP, Dehradun]" },
  { name: "Dr. Neeraj Jain", role: "[translate:CBRI-CSIR, Roorkee]" },
  { name: "Dr. Bhupinder Singh", role: "[translate:IIT, Roorkee]" },
  { name: "Dr. Ashok Panwar", role: "[translate:(Industry)]" },
  { name: "Dr. Amit Panwar", role: "[translate:Global Technology Manager, DuPont, India]" },
  { name: "Prof. (Dr.) S. Chandra Sekhara Rao", role: "[translate:IIT Delhi]" },
  { name: "Prof. (Dr.) Jitendra Mohan", role: "[translate:JIIT, Noida]" },
  { name: "Dr. Rajesh Ghangal", role: "[translate:Scientist, DST]" },
  { name: "Dr. Sandeep Shiromani", role: "[translate:Associate Director, BioCon]" },
  { name: "Dr. Rupak Raja", role: "[translate:(Industry)]" },
  { name: "Prof. (Dr.) Pritish Varadwaj", role: "[translate:IIIT Allahabad]" },
  { name: "Prof. (Dr.) Anita Yadav", role: "[translate:Kurukshetra University]" },
  { name: "Prof. (Dr.) Suresh Chandra", role: "[translate:(Indore)]" },
];

const nationalAdvisoryBoard = [
  { name: "Dr. A.K Jaiswal", role: "AIIMS" },
  { name: "Dr. Amardeep Singh", role: "IOCI, India" },
  { name: "Prof. (Dr.) Sonal Singhal", role: "Punjab University, Chandigarh" },
  { name: "Dr. Sudhir Kumar", role: "Deputy Director, FSL, Moradabad" },
  { name: "Prof. A. Dutta", role: "GGSIP University, India" },
  { name: "Dr. Tripti Bhatnagar", role: "Codon Biotech Pvt. Ltd., Noida, India" },
  { name: "Dr. Yatendra S Chaudhary", role: "[translate:CSIR-Institute OF Minerals and Materials Technology, Bhubaneswar]" },
  { name: "Prof. Sandeep Kumar", role: "C.V. Raman Avenue, Bangalore, India" },
  { name: "Prof. Pabitra Nayak", role: "TIFR, Hyderabad" },
  { name: "Dr. Bhaskar Chauhan", role: "Puniska Healthcare Pvt. Ltd., Aahmadabad, India" },
  { name: "Mr. Pradeep Kumar Jain", role: "VP, Glenmark Pharma" },
  { name: "Dr. S. Mahapatra", role: "Professor, GGSIP University, New Delhi" },
  { name: "Dr. Adarsh Kumar", role: "Director, Forensic Science Laboratory, Lucknow" },
  { name: "Dr. Amit Goel", role: "Professor & Dean, SPSU, Udaipur" },
  { name: "Dr. Sanjeev Sharma", role: "Pro Vice Chancellor, Shushant University, Haryana" },
  { name: "Dr. Pradeep Kumar", role: "Pro Vice Chancellor, MRIIRS, Faridabad, Haryana" },
  { name: "Dr. Tokeer Ahmed", role: "JMI, New Delhi" },
  { name: "Prof. (Dr.) O.P. Sharma", role: "IIT-Patna" },
  { name: "Prof. (Dr.) Piyush Tiwari", role: "Director, Bits, Jaipur" },
  { name: "Prof. (Dr.) Piyush Kant", role: "BHU" },
  { name: "Prof. (Dr.) Adrijit Goswami", role: "IIT – Khargpur" },
  { name: "Prof. (Dr.) Rajesh", role: "CSIR-NPL, Delhi" },
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
