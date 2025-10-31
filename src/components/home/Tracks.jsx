import SectionHeader from "../common/SectionHeader";

const TRACKS = [
    "Materials Science & Sustainability",
    "Energy & Environmental Engineering",
    "Sustainable Engineering",
    "Electronics, AI & Computing in Material",
    "Interdisciplinary & Policy Topics",
    "Sustainability in Digital Engineering",
    "Mathematical Modelling and weather forecasting",
    "Forensic Science"
];

export default function Tracks() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Themes" />
                {/* Tracks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-24">
                    {TRACKS.map((track, idx) => (
                        <div
                            key={track}
                            className="bg-[#232335] text-white rounded-md px-6 py-6 w-full min-w-[250px] max-w-xs flex items-center text-lg font-medium shadow-md text-left"
                            style={{ minHeight: '90px' }}
                        >
                            {track}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
