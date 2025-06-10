'use client'
import React, { useState } from "react";

const whyAttend = [
    "Interact with eminent international speakers",
    "Participate in Brainstorming technical sessions",
    "Join special interest groups",
    "Get inspired towards undertaking professional studies",
    "Network with likeminded peers",
    "Share your knowledge to enhance the growth of your field",
    "Connect with top industry experts at the Conference",
    "Avail opportunities to network and exchange ideas",
    "Gain recognition & earn a Reputation",
    "Publish your research in International SCOPUS Indexed Journals",
    "Make your presence felt at an epoch-defining making conference",
    "Access new and profound research ideas",
    "Showcase your latest research findings through either the means of an oral or poster or Video presentation",
    "Commune with industry experts at the Conference"
];

const whoAttend = [
    "Researchers",
    "Academicians",
    "Scientists",
    "Industrial Experts",
    "Social Workers",
    "Associations",
    "Students",
    "Research Scholars"
];

const downloads = [
    { label: "Conference Brochure", href: "#" },
    { label: "Conference Poster", href: "#" },
    { label: "Registration Form", href: "#" },
    { label: "Sample Abstract", href: "#" },
    { label: "Sample Full Paper", href: "#" },
    { label: "Conference PPT", href: "#" }
];

const partners = [
    { src: "partners/ar.jpg", alt: "AR Infotech" },
    { src: "partners/p2.jpg", alt: "Partner 2" }
];

const Objective = () => {
    const [open, setOpen] = useState([true, false]);

    const toggle = (idx) => {
        setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
    };

    return (
        <div className="bg-[#f6f9fa] py-16">
            <div className="max-w-7xl mx-auto flex flex-wrap gap-10">
                {/* Left: Accordion */}
                <div className="flex-1 min-w-[340px]">
                    <h2 className="text-primary text-xl font-semibold mb-4">Overview of Conference</h2>
                    <div className="rounded-md overflow-hidden border border-gray-200 bg-white">
                        {/* Accordion Item 1 */}
                        <div>
                            <button
                                className={`w-full flex justify-between items-center px-6 py-3 bg-[#073b5c] text-white font-semibold text-base focus:outline-none`}
                                onClick={() => toggle(0)}
                            >
                                Why to Attend Conference?
                                <span>{open[0] ? "▲" : "▼"}</span>
                            </button>
                            {open[0] && (
                                <ul className="px-6 py-4 list-none">
                                    {whyAttend.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 mb-3">
                                            <span className="text-primary text-xl mt-0.5">✔️</span>
                                            <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {/* Accordion Item 2 */}
                        <div>
                            <button
                                className={`w-full flex justify-between items-center px-6 py-3 bg-[#073b5c] text-white font-semibold text-base focus:outline-none border-t border-gray-200`}
                                onClick={() => toggle(1)}
                            >
                                Who Can attend Conference?
                                <span>{open[1] ? "▲" : "▼"}</span>
                            </button>
                            {open[1] && (
                                <ul className="px-6 py-4 list-none">
                                    {whoAttend.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 mb-3">
                                            <span className="text-primary text-xl mt-0.5">✔️</span>
                                            <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                {/* Right: Downloads and Image */}
                <div className="flex-1 min-w-[340px]">
                    <h2 className="text-primary text-xl font-semibold mb-4">Downloads</h2>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {downloads.map((d, i) => (
                            <a
                                key={d.label}
                                href={d.href}
                                className="flex items-center gap-2 bg-[#073b5c] text-white px-4 py-3 rounded-md font-medium text-base hover:bg-[#05243a] transition-colors"
                            >
                                <span className="text-lg">📄</span> {d.label}
                            </a>
                        ))}
                    </div>
                    <div className="w-full mt-4">
                        <video
                            src="overview-video.m4v"
                            alt="Conference Venue"
                            className="w-full rounded-md object-cover max-h-64"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
            {/* Partners */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
                <h3 className="text-primary text-xl font-semibold mb-6">Our Partners</h3>
                <div className="flex justify-center gap-8 flex-wrap">
                    {partners.map((p, i) => (
                        <div key={i} className="bg-white p-4 rounded shadow inline-block">
                            <img src={p.src} alt={p.alt} className="h-16 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Objective;
