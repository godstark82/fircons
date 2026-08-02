import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const patron = [
    {
        image: "https://ghrce.raisoni.net/icetme/assets/images/petrons/sunil-raisoni.jpg",
        name: "Shri Sunilji Raisoni",
        role: "Chairman",
        affiliation: "Raisoni Group of Institutions",
    },
    {
        image: "https://ghrce.raisoni.net/ices/assets/images/shobha-raisoni.jpg",
        name: "Smt. Shobhaji Raisoni",
        role: "Patron",
        affiliation: "Raisoni Group of Institutions",
    },
    {
        image: "https://ghrce.raisoni.net/icraiwc/assets/images/shreyas-raisoni.jpg",
        name: "Mr. Shreyas Raison",
        role: "Executive Director",
        affiliation: "Raisoni Group of Institutions",
    }
];

const coPatron = [
    {
        image: "https://iilm.edu/greater-noida/wp-content/uploads/sites/3/2026/06/vc-jay.png",
        name: "Dr Jaykant Varier",
        role: "Vice Chancellor",
        affiliation: "IILM University, Greater Noida, India",
    },
    {
        image: "https://iilm.edu/greater-noida/wp-content/uploads/sites/3/2026/02/Nihar-Amoncar-updated-350x240-full.webp",
        name: "Dr Nihar Amonkar ",
        role: "Pro Vice Chancellor",
        affiliation: "IILM University, Greater Noida, India",
    },

];

const honoraryChair = [
    {
        image: "https://ghrce.raisoni.net/icpam-25/assets/images/patrons/dr-sachin-untawale.webp",
        name: "Dr. Sachin Untawale",
        role: "Director, Raisoni Group of Institutions",
        affiliation: "",
    }
];

const internationalCooperation = [
    {
        image: "https://www.gla.ac.in/Uploads/faculty/781largefrt_781largefrt_Aroon-kumar-Beesham-lg.webp",
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
        image: "https://rgicdn.s3.ap-south-1.amazonaws.com/ghrcenagpur/images/faculties/dr-jaju.webp",
        name: "Dr. Santosh B Jaju",
        role: "Dy-Director & Dean R&D",
        affiliation: "GHRCE",
    }
];

const conveners = [
    {
        image: "https://media.licdn.com/dms/image/v2/D5603AQGY6ERqo_jkxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637646542179?e=2147483647&v=beta&t=5SvkmRSEeOiNhUVAL2NEuS-BrinA4SMEju9svZKUQzM",
        name: "Dr. Rupali J. Thete",
        role: "Convenor",
        affiliation: "GHRCE",
    },
    {
        image: "https://iilm.edu/greater-noida/wp-content/uploads/sites/3/2026/03/IILMGN006892025-full.webp",
        name: "Dr Narendra Kumar",
        role: "Convenor",
        affiliation: "IILM University, Greater Noida, India",
    },
    {
        image: "https://iilm.edu/greater-noida/wp-content/uploads/sites/3/2026/03/Pankaj-350x240-full.webp",
        name: "Dr. Pankaj",
        role: "Co-Convenor",
        affiliation: "IILM University, Greater Noida, India",
    },
    {
        image: "/images/rajeev-kumar.jpeg",
        name: "Dr. Rajev Kumar",
        role: "Co-Convenor",
        affiliation: "IILM University, Greater Noida, India",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6D8tiSiWKh3MYcQyycoGHgPo3RDJ7cITjXgFQyj73w&s=10",
        name: "Dr. Nalini Vaidya",
        role: "Organising Secretary",
        affiliation: ""
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHgIe7Pztu0ASYeY5ZfnNoWK5dUayz-QEHlPNmKglow&s=10",
        name: "Smita Pidurkar",
        role: "Organising Secretary",
        affiliation: ""
    },

];

const organizingSecretaries = [
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
        image: "https://apex-assets-exl.pages.dev/image/maam.jpeg",
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
    },
    {
        image: "/images/aditya-saini.jpeg",
        name: "Prof. Aditya Saini",
        role: "Organising Committee",
        affiliation: "IILM University, Greater Noida, India"
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Co-Patron</h2>
                <CommitteeMemberGrid members={coPatron.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

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

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conveners & co-conveners</h2>
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
