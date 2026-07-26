import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const patron = [
    {
        image: "/images/user.jpg",
        name: "Shri Sunilji Raisoni",
        role: "Chairman",
        affiliation: "Raisoni Group of Institutions",
    },
    {
        image: "/images/user.jpg",
        name: "Smt. Shobhaji Raisoni",
        role: "Patron",
        affiliation: "Raisoni Group of Institutions",
    },
    {
        image: "/images/user.jpg",
        name: "Mr. Shreyas Raison",
        role: "Executive Director",
        affiliation: "Raisoni Group of Institutions",
    }
];

const coPatron = [
    {
        image: "https://iilm.ac.in/uploads/all/691/conversions/Dr-Sandeep-Chatterjee-full.webp",
        name: "Dr. Sandeep Chattarjee",
        role: "Pro VC",
        affiliation: "IILM University, Greater Noida",
    }
];

const honoraryChair = [
    {
        image: "/images/user.jpg",
        name: "Dr. Sachin Untawale",
        role: "Director, Raisoni Group of Institutions",
        affiliation: "",
    }
];

const internationalCooperation = [
    {
        image: "/images/user.jpg",
        name: "Prof. Aroon Kumar Beesham",
        role: "Senior Professor",
        affiliation: "University of Zululand",
    },
    {
        image: "/images/user.jpg",
        name: "Prof. Maxim Khlopov",
        role: "",
        affiliation: "Paris, France,Moscow and Rostov/Don, Russia",
    },
    {
        image: "/images/user.jpg",
        name: "Prof. Rajendra Pant",
        role: "Professor & Deputy HoD",
        affiliation: "Department of Mathematics, University of Johannesburg",
    },
    {
        image: "/images/user.jpg",
        name: "Prof. Mahmood Khalid Jasim",
        role: "Professor in Mathematics",
        affiliation: "DMPS College of Arts and Sciences, Nizwa, Sultanate of Oman",
    }
];

const organizingChair = [
    {
        image: "/images/user.jpg",
        name: "Dr. Santosh B Jaju",
        role: "Dy-Director & Dean R&D",
        affiliation: "GHRCE",
    }
];

const conveners = [
    {
        image: "/images/user.jpg",
        name: "Dr. Rupali J. Thete",
        role:"Dr. Rupali J. Thete",
        affiliation: "GHRCE",
    }
];

const organizingSecretaries = [
    {
        image: "/images/user.jpg",
        name: "Smita Pidurkar",
        role: "Organising Secretary",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Dr. Nalini Vaidya",
        role: "Organising Secretary",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Dr. Akilahmad Sheikh",
        role: "Organising Secretary",
        affiliation: ""
    }
];

const organizingCommittee = [
    {
        image: "/images/user.jpg",
        name: "Mr. Bhagwat Thakran",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Ms. Pranali Kamdi",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Ms. Archana Deshpande",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Ms. Rita Mate",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Ms. Shital Tayade",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/user.jpg",
        name: "Ms. Pallavi Bagde",
        role: "Organising Committee",
        affiliation: ""
    }
];

export default function ConferenceChairPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Conference Chairs & Committee"
                date="17 - 19 September"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/kyrgyzskiy/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <section className="max-w-6xl mx-auto px-4 py-12">

                <h2 className="text-3xl md:text-4xl font-bold mb-8">Patrons</h2>
                <CommitteeMemberGrid members={patron.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />
<br />
<br />
                {/* <h2 className="text-3xl md:text-4xl font-bold mb-8">Co-Patron</h2>
                <CommitteeMemberGrid members={coPatron.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} /> */}

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Honorary Chair</h2>
                <CommitteeMemberGrid members={honoraryChair.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">International Cooperation</h2>
                <CommitteeMemberGrid members={internationalCooperation.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organizing Chair</h2>
                <CommitteeMemberGrid members={organizingChair.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conveners</h2>
                <CommitteeMemberGrid members={conveners.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organizing Secretaries</h2>
                <CommitteeMemberGrid members={organizingSecretaries.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organizing Committee</h2>
                <CommitteeMemberGrid members={organizingCommittee.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

            </section>
        </div>
    );
}
