import SectionHeader from "../common/SectionHeader";

const CHAIRS = [
    {
        name: 'DR HAITHAM ALQAHTANI',
        title: 'Executive Conference Chair',
        img: '/images/haitham.jpg', // Replace with actual image path
    },
    {
        name: 'DR SHABANA FAIZAL',
        title: 'Conference Chair',
        img: '/images/shabana.jpg', // Replace with actual image path
    },
];

export default function Overview() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                {/* Title */}
                <SectionHeader title="Conference Overview" />
                <div className="text-black text-lg text-justify space-y-4">
                    <p>
                        The International Conference on Mathematics 2025 will unite experts from diverse mathematical disciplines worldwide to discuss and advance both pure and applied mathematics.
                    </p>
                    <p>
                        The conference aims to foster research in pure and applied mathematics while encouraging innovative ideas in the field. It seeks to establish collaborative research groups, facilitating knowledge exchange and in-depth discussions on recent findings.
                    </p>
                    <p>
                        Additionally, the conference offers a platform for mathematicians and researchers to present their original work, innovative ideas, and novel mathematical approaches. It encourages contributions that blend theoretical advancements with practical applications, fostering interdisciplinary collaboration and the exploration of emerging trends in mathematics.
                    </p>
                </div>
            </div>
        </section>
    );
}
