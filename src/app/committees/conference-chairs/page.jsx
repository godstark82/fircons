import React from "react";
import AboutHeader from "../../../components/common/AboutHeader";
import CommitteeMemberGrid from "../../../components/common/CommitteeMemberGrid";

const chiefPatron = [
    {
        name: "Vice Chancellor",
        role: "Chief Patron",
        affiliation: "", // You can add actual Vice Chancellor name & details if available
    }
];

const conferenceChair = [
    {
        name: "Prof. Munish Sabharwal",
        role: "Conference Chair",
        affiliation: ""
    }
];

const conveners = [
    {
        name: "Prof. A.K. Jain",
        role:"Convener",
    },
    {
        name: "Prof. Narendra Kumar",
        role: "Co Convener",
        affiliation: ""
    },
];

const organizingSecretaries = [
    {
        name: "Dr. Nidhi Puri",
        role: "Organising Secretary",
        affiliation: ""
    },
    {
        name: "Dr. Arpit Varshney",
        role: "Organising Secretary",
        affiliation: ""
    },
    {
        name: "Dr. KM Bala",
        role: "Organising Secretary",
        affiliation: ""
    }
];

const organizingCommittee = [
    {
        name: "Dr. Rajeev Kumar",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        name: "Dr. Priyanka Bhatnagar",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        name: "Dr. Vanya",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        name: "Dr. Bharti",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        name: "Dr. Pankaj",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        name: "Dr. Lalit",
        role: "Organising Committee",
        affiliation: ""
    },
    {
        name: "Dr. Arpit Varshney",
        role: "Organising Committee",
        affiliation: ""
    }
];

export default function ConferenceChairPage() {
    return (
        <div className="min-h-screen bg-white">
            <AboutHeader
                title="Conference Chairs & Committee"
                date="5 - 7 September"
                image="/images/simdte-white-lg.png"
                overlayColor="#1a1a2e"
                bgImage="/images/utb-images/gallery/gallery-2.jpg"
                dividerColor="primary"
            />
            <section className="max-w-6xl mx-auto px-4 py-12">

                <h2 className="text-3xl md:text-4xl font-bold mb-8">Chief Patrons</h2>
                <CommitteeMemberGrid members={chiefPatron.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conference Chair</h2>
                <CommitteeMemberGrid members={conferenceChair.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Conveners & Co-Conveners</h2>
                <CommitteeMemberGrid members={conveners.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organising Secretaries</h2>
                <CommitteeMemberGrid members={organizingSecretaries.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

                <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16">Organising Committee</h2>
                <CommitteeMemberGrid members={organizingCommittee.map(m => ({
                    name: m.name,
                    role: `${m.role}${m.affiliation ? `, ${m.affiliation}` : ""}`
                }))} />

            </section>
        </div>
    );
}
