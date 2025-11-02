import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";

const CommitteeMemberGrid = ({ members }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {members.map((member, idx) => (
            <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow">
                <div className="border-l-4 border-primary pl-4 mb-2 font-semibold text-lg">{member.name}</div>
                <div className="text-gray-700">{member.role}</div>
            </div>
        ))}
    </div>
);

const scientificCommittee = [
    { name: "Dr. Pankaj", role: "IILM University" },
    { name: "Dr. A.K. Jain", role: "IILM University" },
    { name: "Dr. Chhavi Pahawa", role: "IILM University" },
    { name: "Dr. Pawan Soni", role: "IILM University" },
    { name: "Dr. Rajeev Kumar", role: "IILM University" },
    { name: "Dr. Anupama Srivastava", role: "IILM University" },
    { name: "Dr. Avdhesh Gupta", role: "IILM University" },
    { name: "Dr. K.M. Bala", role: "IILM University" },
    { name: "Dr. Umesh Sharma", role: "GLA University, Mathura" },
    { name: "Dr. Sansar Singh", role: "GL Bajaj, Gr. Noida" },
    { name: "Dr. Risha Jashmin Nathan", role: "ARU, UK" },
    { name: "Dr. Tokeer Ahmed", role: "JMI, New Delhi" },
    { name: "Dr. Kapil Dev", role: "JD, FSL, Ghaziabad" },
    { name: "Dr. Antony George", role: "Friedrich Schiller University, Jena, Germany" },
    { name: "Dr. Ali Raza", role: "BOWIE University, USA" },
    { name: "Dr. Manoj Kumar", role: "IILM University" },
    { name: "Dr. Vinti Dhaka", role: "IILM University" },
    { name: "Dr. Sanjoy", role: "IILM University" },
    { name: "Dr. Shikha", role: "IILM University" },
    { name: "Dr. Aastha", role: "IILM University" },
    { name: "Dr. Sanjeev Verma", role: "IILM University" },
    { name: "Dr. Vipul Kumar", role: "IILM University" },
    { name: "Dr. Manish Kumar", role: "ARSD College, DU" },
    { name: "Prof. (Dr.) Shubham Tiwari", role: "ABES, Ghaziabad" },
    { name: "Prof. (Dr.) Kedar Singh", role: "JNU" },
    { name: "Prof. (Dr.) OP Thakur", role: "NSUT, Delhi" },
    { name: "Prof. (Dr.) Geeta Singh", role: "DTU" },
    { name: "Dr. Nupur Mathur", role: "Teri" },
    { name: "Dr. Khushboo Gupta", role: "IILM University" },
    { name: "Dr. Mukesh Kumar", role: "IILM University" },
    { name: "Dr. Ashutosh Kumar", role: "TIET" },
    { name: "Dr. Pragya Ranjan Rout", role: "NIT Jalandhar" },
    { name: "Dr. Bikash Koli Dey", role: "SRMU, Chennai" },
    { name: "Dr. Kuldeep Malik", role: "IILM University" },
    { name: "Dr. Selva Bharti", role: "SRMU, Chennai" },
    { name: "Dr. Roopam Singh", role: "VIT, Chennai" },
    { name: "Dr. Roma Chandra", role: "IILM University" },
    { name: "Dr. Garima Gupta", role: "IILM University" },
    { name: "Dr. Muneeb Malik", role: "IILM University" },
    { name: "Dr. Veena", role: "IILM University" },
    { name: "Dr. Monu", role: "IILM University" },
    { name: "Dr. Pankaj Verma", role: "IILM University" },
];

const technicalSessionCommittee = [
    { name: "Dr. Rajeev Kumar", role: "IILM University" },
    { name: "Dr. Vanya Arun", role: "IILM University" },
    { name: "Dr. Himanshu Sharma", role: "IILM University" },
    { name: "Dr. Pankaj", role: "IILM University" },
    { name: "Dr. Chavi Pahwa", role: "IILM University" },
    { name: "Dr. Bharti Choudhary", role: "IILM University" },
    { name: "Prof. (Dr.) Avdhesh Kr. Gupta", role: "IILM University" },
    { name: "Dr. Ankita Awasthi", role: "IILM University" },
    { name: "Dr. Meenu", role: "IILM University" },
    { name: "Dr. Umesh Chandra", role: "IILM University" },
];

const foodCommittee = [
    { name: "Dr. Priyanka Bhatnagar", role: "IILM University" },
    { name: "Dr. Shivani Saini", role: "IILM University" },
    { name: "Dr. Nidhi Singh", role: "IILM University" },
    { name: "Dr. Bisma", role: "IILM University" },
    { name: "Dr. Duraivadivel", role: "IILM University" },
];

const sponsorshipCommittee = [
    { name: "Dr. Kshama Pandey", role: "IILM University" },
    { name: "Dr. Arpit Varshney", role: "IILM University" },
    { name: "Dr. Rakhi Trivedi", role: "IILM University" },
    { name: "Dr. Dimpy Chauhan", role: "IILM University" },
    { name: "Dr. Garima", role: "IILM University" },
    { name: "Dr. Sameer", role: "IILM University" },
    { name: "Dr. Pankaj Sharma", role: "IILM University" },
];

const hospitalityCommittee = [
    { name: "Dr. Vibhav Narayan Singh", role: "IILM University" },
    { name: "Dr. Arpit Varshney", role: "IILM University" },
    { name: "Mr. Satish Jha", role: "IILM University" },
    { name: "Mr. Mayank", role: "IILM University" },
];

const registrationHelpDeskCommittee = [
    { name: "Dr. Ashlesha Bhardwaj", role: "IILM University" },
    { name: "Dr. Sunil Bhardwaj", role: "IILM University" },
    { name: "Dr. Geetika", role: "IILM University" },
    { name: "Dr. Shradha Sharma", role: "IILM University" },
    { name: "Dr. Rakhi Dwivedi", role: "IILM University" },
    { name: "Dr. Manoj Kumar", role: "IILM University" },
    { name: "Dr. Nidhi Rai", role: "IILM University" },
    { name: "Dr. Kushal Mazumder", role: "IILM University" },
    { name: "Dr. Rahul Singh", role: "IILM University" },
    { name: "Dr. Saurabh", role: "IILM University" },
    { name: "Dr. Kuldeep Malik", role: "IILM University" },
    { name: "Dr. Aruna", role: "IILM University" },
    { name: "Dr. Roma Pandey", role: "IILM University" },
];

const printingDesigningCommittee = [
    { name: "Mr. Aditya Saini", role: "IILM University" },
    { name: "Dr. Kriti Nagarkoti", role: "IILM University" },
    { name: "Dr. Naseem", role: "IILM University" },
    { name: "Dr. K.M. Bala", role: "IILM University" },
    { name: "Dr. Gaurav Upadhyay", role: "IILM University" },
    { name: "Dr. Priti", role: "IILM University" },
    { name: "Dr. Jayanta Biswas", role: "IILM University" },
    { name: "Dr. Monu", role: "IILM University" },
];

const publicitySocialMediaCommittee = [
    { name: "Dr. Vinti Dhaka", role: "IILM University" },
    { name: "Dr. Kuldeep Malik", role: "IILM University" },
    { name: "Dr. Prince Solanki", role: "IILM University" },
    { name: "Dr. Heena Khera", role: "IILM University" },
    { name: "Dr. Rahul Singh", role: "IILM University" },
    { name: "Dr. Aastha", role: "IILM University" },
    { name: "Dr. Saurabh", role: "IILM University" },
    { name: "Dr. Neha", role: "IILM University" },
    { name: "Ms. Smriti Sethi", role: "IILM University" },
];

const culturalCommittee = [
    { name: "Dr. Khushboo Gupta", role: "IILM University" },
    { name: "Dr. Pawan Soni", role: "IILM University" },
    { name: "Dr. Mukesh", role: "IILM University" },
    { name: "Dr. Surbhi Rani", role: "IILM University" },
    { name: "Dr. Akansha", role: "IILM University" },
    { name: "Ms. Priyanka Singh", role: "IILM University" },
];

const publicationCommittee = [
    { name: "Prof. Narendra Kumar", role: "" },
    { name: "Dr. Rajeev Kumar", role: "" },
];

const Section = ({ title, members }) => (
    <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary mx-auto mb-8"></div>
        <CommitteeMemberGrid members={members} />
    </section>
);

export default function OtherCommitteesPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Committees"
                date="14 – 15 October"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Section title="Scientific Committee" members={scientificCommittee} />
                <Section title="Technical Session Committee" members={technicalSessionCommittee} />
                <Section title="Food Committee" members={foodCommittee} />
                <Section title="Sponsorship Committee" members={sponsorshipCommittee} />
                <Section title="Transportation, Accommodation & Hospitality Committee" members={hospitalityCommittee} />
                <Section title="Registration Committee & Help Desk" members={registrationHelpDeskCommittee} />
                <Section title="Printing and Designing Committee" members={printingDesigningCommittee} />
                <Section title="Publicity & Social Media Promotion" members={publicitySocialMediaCommittee} />
                <Section title="Cultural Committee" members={culturalCommittee} />
                <Section title="Publication Committee" members={publicationCommittee} />
            </div>
        </div>
    );
}
