import SectionHeader from "../common/SectionHeader";

const TRACKS = [
    {
        "title": "Sub Themes:",
        "sub-tracks": [
            "Entrepreneurship",
            "Operations Research", 
            "Special Functions",
            "Information Technology",
            "Miscellaneous",
        ]
    },
    {
        "title": "Computer Science and Engineering",
        "sub-tracks": [
            "New Market for Entrepreneurship People and organizational management",
            "Cross-border and local venture capital investment", 
            "Social and Green entrepreneurship",
            "Women Entrepreneurship and the digital economy",
            "Entrepreneurship and regional/rural development",
            "Collaboration, association and entrepreneurial knowledge",
            "exchange for sustainable development",
            "Entrepreneurial finance Venture capitalism and Angel investment",
            "Entrepreneurship and its ecosystem",
        ]
    },
    {
        "title": "Electronics. Electrical and applied Engineering ",
        "sub-tracks": [
            "Digitalization in HR",
            "HR Analytics",
            "Technology and Innovations in HR", 
            "Impact of AI on HR",
            "Change Management and Managing human capital",
            "Employee Experience & Engagement",
            "Ethics, Values, Trust and Conflict Resolution",
            "Leadership and the new normal",
            "Boundaryless organization –challenges and opportunities",
            "HRM Policies and Practices for Responding to Disruptive Innovations",
        ]
    },
    {
        "title": "Bussiness Management ",
        "sub-tracks": [
            "Indian Financial System in New Economic Scenario",
            "Financial Markets- Challenges and Opportunities",
            "COVID 19 Impact on Economic Activities",
            "Digital Innovations in Business and Economy",
            "Mutual Funds, Insurance and Other Financial Services",
            "Banking, Micro-financing and Financial Inclusion",
            "Sustainable Finance and Practices",
            "Cryptocurrency and Blockchain Technology",
            "Financial Literacy & Behavioral Financial",
            "Entrepreneurship & Family Business",
        ]
    },
    {
        "title": "Sustainable Management",
        "sub-tracks": [
            "Evolution of Technology in Financial Markets",
            "FinTech: Drivers of the Digital World",
            "Role of FinTech in Financial Inclusion and Financial Integration",
            "Role of FinTech in banking",
            "Fintech and Next-generation business",
            "Entrepreneurship, FinTech and Investing in future business",
            "Robotic process automation and FinTech",
        ]
    },
    {
        "title": "Operations Management",
        "sub-tracks": [
            "Flexibility inclusive and sustainable industrialization",
            "Innovations In Product And Service Design",
            "Foster Innovations In Operations Management",
            "Big Data Analytics To Identify Changes In Customer Preferences For Products And Services",
            "Crisis Leadership, Organisational Resiliency",
            "Adapting To Contactless Manufacturing, Storage, Handling And Delivery",
            "Adapting To Contactless Services- Education, Healthcare, Hospitality, Travel and Tourism",
            "Business Continuity, Its Planning And Professional Practices",
            "Major Disruptions In Agriculture And Supply Chain Of Farm Produce, Aerospace and Satellite Communication Industry",
            "Risk Management",
        ]
    }
];

export default function Tracks() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Theme & Tracks" />
                {/* Tracks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-24">
                    {TRACKS.map((track, idx) => (
                        <div
                            key={idx}
                            className="bg-[#232335] text-white rounded-md px-8 py-8 w-full min-w-[300px] max-w-md flex flex-col text-lg shadow-lg"
                        >
                            <h3 className="font-medium mb-4">{track.title}</h3>
                            <ul className="list-disc pl-4 text-sm space-y-2">
                                {track["sub-tracks"].map((subTrack, subIdx) => (
                                    <li key={subIdx}>{subTrack}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
