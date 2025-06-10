'use client'
import React, { useState } from "react";

const tabData = {
    Students: [
        "SERF Conferences shall create a bridge between Industrial professionals and Academic professionals which leads to exchanging of approaches and ideas about technological innovations.",
        "SERF Conferences shall provide a platform to Industrial professionals to exhibit their recent researchers which help to drive the global world.",
        "To further redefine their innovation technologies they can consider the advices and technical suggestions of our high experienced chair persons.",
        "Industrial professionals can publish their articles in reputed journals of International importance. Journals associated with FIRCONS conference are published in UGC, Scopus and Academia.",
        "Articles presented at SERF Conferences shall be available for citation at reputed Scientific repositories."
    ],
    Faculty: [
        "SERF Conferences shall be a perfect platform for Faculties, Professors, academicians to express their innovative thoughts and unique research work at a global platform.",
        "SERF Conferences shall provide scopes to faculties to meet and interact with International Speakers and Scientists of National importance.",
        "Professors can interact with session chairs related and working on relevant fields of their research.",
        "To further redefine their innovations professors can consider the advices and technical suggestions of our chairs.",
        "Faculties can publish their articles in reputed journals of International importance. Journals associated with SERF Conferences conference are published in UGC, Scopus and Academia.",
        "Articles presented at SERF Conferences shall be available for citation at reputed Scientific repositories."
    ],
    "Industrial Professional": [
        "SERF Conferences shall create a bridge between Industrial professionals and Academic professionals which leads to exchanging of approaches and ideas about technological innovations.",
        "SERF Conferences shall provide a platform to Industrial professionals to exhibit their recent researchers which help to drive the global world.",
        "To further redefine their innovation technologies they can consider the advices and technical suggestions of our high experienced chair persons.",
        "Industrial professionals can publish their articles in reputed journals of International importance. Journals associated with FIRCONS conference are published in UGC, Scopus and Academia.",
        "Articles presented at SERF Conferences shall be available for citation at reputed Scientific repositories."
    ]
};

const tabNames = Object.keys(tabData);

const Scope = () => {
    const [activeTab, setActiveTab] = useState("Students");

    return (
        <div className="bg-[#f6f9fa] py-16">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-10 bg-white rounded-lg shadow-sm p-10">
                {/* Left: Tabs and Content */}
                <div className="flex-1 min-w-[320px]">
                    <h2 className="text-primary text-center mb-2">Scope & Benefits</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-primary rounded-sm"></div>
                    </div>
                    <div className="flex gap-4 mb-6">
                        {tabNames.map((tab) => (
                            <button
                                key={tab}
                                className={`${
                                    activeTab === tab 
                                        ? "bg-primary text-white" 
                                        : "bg-transparent text-gray-800"
                                } rounded-md px-4 py-2 font-medium text-lg transition-colors duration-200 hover:bg-primary/90 hover:text-white`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <ul className="list-none p-0 m-0">
                        {tabData[activeTab].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 mb-5">
                                <span className="text-primary text-2xl mt-0.5">✔️</span>
                                <span className="text-gray-600 text-lg leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right: Image */}
                <div className="flex-1 min-w-[320px] flex items-center justify-center">
                    <img
                        src="/scope.jpg"
                        alt="Scope & Benefits"
                        className="w-full max-w-[500px] object-cover shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Scope;
