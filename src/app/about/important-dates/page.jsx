import AboutHeader from '../../../components/common/AboutHeader';

const importantDates = [
    {
        event: "Conference Date",
        date: "26 - 27 February, 2025",
        rowClass: "bg-white"
    },
    {
        event: "Registration and Abstract Submission Starts",
        date: "15 November, 2025",
        rowClass: "bg-gray-50"
    },
    {
        event: "Last Date of Registration without late payment",
        date: "15 February, 2026",
        rowClass: "bg-white"
    },
    {
        event: "Abstract submission Deadline",
        date: "15 December, 2025",
        rowClass: "bg-grey-50"
    },
    {
        event: "Abstract Acceptance Notification",
        date: "20 December, 2025",
        rowClass: "bg-grey-50"
    },
    {
        event: "Full length paper submission Deadline",
        date: "11 January, 2026",
        rowClass: "bg-grey-50"
    }
];

export default function ImportantDates() {
    return (
        <div className="bg-white">
            <AboutHeader title="Important Dates" date="5 -7 September" image='/images/simdte-dark-lg.png' overlayColor='#1f1f33' bgImage='/images/calendar-imp-dates.png' dividerColor='white' />
            <div className="container mx-auto px-4 py-16">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-separate border-spacing-0 rounded-lg overflow-hidden shadow-md">
                        <thead>
                            <tr>
                                <th className="bg-[#d0224a] text-white text-left px-6 py-3 text-lg font-semibold rounded-tl-lg">Event</th>
                                <th className="bg-[#d0224a] text-white text-left px-6 py-3 text-lg font-semibold rounded-tr-lg">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {importantDates.map((item, idx) => (
                                <tr
                                    key={idx}
                                    className={`${item.rowClass} border-t border-[#d0224a]/30`}
                                >
                                    <td className="px-6 py-4">{item.event}</td>
                                    <td className="px-6 py-4">{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
