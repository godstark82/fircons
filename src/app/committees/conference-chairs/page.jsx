import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const patron = [
    {
        image: "https://ghrce.raisoni.net/icetme/assets/images/petrons/sunil-raisoni.jpg",
        name: "Shri Sunilji Raisoni",
        role: "Chairman",
        affiliation: "Raisoni Education",
    },
    {
        image: "https://ghrce.raisoni.net/ices/assets/images/shobha-raisoni.jpg",
        name: "Smt. Shobhaji Raisoni",
        role: "Patron",
        affiliation: "Raisoni Education",
    },
    {
        image: "https://ghrce.raisoni.net/icraiwc/assets/images/shreyas-raisoni.jpg",
        name: "Mr. Shreyas Raisoni",
        role: "Executive Director",
        affiliation: "Raisoni Education",
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
    {
        image: "/images/dsholdasheva-tamara.jpeg",
        name: "Prof Dsholdasheva Tamara Dholdashevna",
        role: "Vice Rector",
        affiliation: "Kirghiz economic university by name is Risqulbekova, Kyrgyzstan",
    },

];

const honoraryChair = [
    {
        image: "https://ghrce.raisoni.net/icpam-25/assets/images/patrons/dr-sachin-untawale.webp",
        name: "Dr. Sachin Untawale",
        role: "Director",
        affiliation: "Raisoni Education",
    },
    {
        image: "https://iilm.edu/greater-noida/wp-content/uploads/sites/3/2026/02/277b901c-7339-48bc-accd-ce646c93d9ae-1.png",
        name: "Dr. Arvind Kumar Jain",
        role: "Prof and Dean",
        affiliation: "IILM University Greater Noida",
    }
];

const internationalCooperation = [
    {
        image: "/images/maxim-yu-khlopov.jpeg",
        name: "Prof. Maxim Yu. Khlopov",
        role: "Prof and Director",
        affiliation: "Paris, France, Moscow and Rostov/Don, Russia",
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
        image: "/images/narendra-kumar.jpeg",
        name: "Dr Narendra Kumar",
        role: "Convenor",
        affiliation: "IILM University, Greater Noida, India",
    },
    {
        image: "/images/aakansha-vyas.jpeg",
        name: "Dr.Aakansha Vyas",
        role: "Co-Convenor",
        affiliation: "NIET, Greater Noida, India",
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
        role: "Co-Convener",
        affiliation: ""
    },
    {
        image: "/images/smita-pidurkar.jpeg",
        name: "Smita Pidurkar",
        role: "Co-Convener",
        affiliation: ""
    },
    {
        image: "/images/elebesova-gulzat.jpeg",
        name: "Dr ELEBESOVA GULZAT",
        role: "Convener",
        affiliation: "Kirghiz economic university by name is Risqulbekova, Kyrgyzstan"
    },

];

const organizingSecretaries = [
    {
        image: "/images/b-thakaran.jpeg",
        name: "Mr. Bhagwat Thakran",
        role: "Organising Secretary",
        affiliation: ""
    },
    {
        image: "/images/archana-deshpande.jpeg",
        name: "Ms. Archana Deshpande",
        role: "Organising Secretary",
        affiliation: ""
    }
];

const organizingCommittee = [

    {
        image: "/images/avadhesh-gupta.jpeg",
        name: "Prof. (Dr.) Avadhesh Kumar Gupta",
        role: "Organising Committee",
        affiliation: "Greater Noida"
    },
    {
        image: "/images/b-thakaran.jpeg",
        name: "Mr. Bhagwat Thakran",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/pranali-kamdi.jpeg  ",
        name: "Ms. Pranali Kamdi",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/archana-deshpande.jpeg",
        name: "Ms. Archana Deshpande",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/rita-mate.jpeg",
        name: "Ms. Rita Mate",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/shital-tayade.jpeg",
        name: "Ms. Shital Tayade",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/pallavi-bagde.jpeg",
        name: "Ms. Pallavi Bagde",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        image: "/images/manoj-kumar.jpeg",
        name: "Dr. Manoj Kumar",
        role: "Organising Committee",
        affiliation: "IILM University, Greater Noida, India"
    }
];

const publicationCommittee = [
    {
        image: "https://media.licdn.com/dms/image/v2/D5603AQGY6ERqo_jkxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637646542179?e=2147483647&v=beta&t=5SvkmRSEeOiNhUVAL2NEuS-BrinA4SMEju9svZKUQzM",
        name: "Dr. Rupali J. Thete",
        role: "India",
        affiliation: ""
    },
    {
        image: "/images/yogendra-rajoria.jpeg",
        name: "Dr. Yogendra Rajoria",
        role: "India",
        affiliation: ""
    },
    {
        image: "/images/speakers/rakesh-m-patel.jpg",
        name: "Dr. Rakesh M Patel",
        role: "India",
        affiliation: ""
    },
    {
        image: "/images/speakers/liliana.jpg",
        name: "Dr. Liliana Guran",
        role: "Romania",
        affiliation: ""
    },
    {
        image: "/images/narendra-kumar.jpeg",
        name: "Dr Narendra Kumar",
        role: "India",
        affiliation: ""
    },
    {
        image: "/images/elebesova-gulzat.jpeg",
        name: "Dr Elebesova Gulzat",
        role: "Kyrgyzstan",
        affiliation: ""
    },
    {
        image: "/images/aakansha-vyas.jpeg",
        name: "Dr. Aakansha Vyas",
        role: "India",
        affiliation: ""
    },
    {
        image: "/images/smita-pidurkar.jpeg",
        name: "Dr Smita Pidurkar",
        role: "India",
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

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Publication Committee</h2>
                <CommitteeMemberGrid members={publicationCommittee.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`,
                    image: m.image
                }))} />

            </section>
        </div>
    );
}
