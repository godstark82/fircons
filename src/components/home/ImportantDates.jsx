import SectionHeader from "../common/SectionHeader";
import SectionImageHeader from "../common/SectionImageHeader";

const DATES = [
    { day: "20", month: "September 2023", desc: "Abstract Submission" },
    { day: "05", month: "August 2023", desc: "Abtract Submission" },
    { day: "25", month: "October 2023", desc: "Registration Deadline" },
    { day: "10", month: "October 2023", desc: "Last Date of Paper Submission" }
];

export default function ImportantDates() {
    return (
        <section className="bg-white">
            {/* Top background image with overlay and header */}
            <SectionImageHeader title="Important Dates" image="/images/imp-dates.jpg" />
            {/* Dates Grid */}
            <div className="container mx-auto px-4 py-8 md:py-12 justify-items-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {DATES.map((date, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-primary text-white rounded-t-md rounded-b-none px-4 py-4 text-center relative w-full max-w-[200px]">
                                <div className="text-2xl md:text-3xl font-bold leading-none">{date.day}</div>
                                <div className="text-sm md:text-base font-medium text-center mt-1">{date.month}</div>
                                <div className="absolute left-0 bottom-0 w-full h-1 bg-white" style={{ transform: 'translateY(50%)' }}></div>
                            </div>
                            <div className="h-2 w-full max-w-[200px] bg-primary"></div>
                            <div className="bg-white w-full max-w-[200px] text-center px-2 pt-6 pb-2 text-black font-medium min-h-[56px] shadow-md">
                                <p className="text-sm md:text-base">{date.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
