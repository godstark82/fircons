import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

const SCHOOLS = [
    {
        name: 'School of Engineering, IILM University',
        image: '/images/iilm.avif',
        alt: 'IILM University',
        paragraphs: [
            'The School of Engineering at IILM University prepares students to meet global industry demands by fostering technical expertise, innovation, and sustainable problem-solving. It offers diverse B.Tech programs in areas such as Biotechnology, Bioinformatics, Food Technology, Civil and Sustainable Infrastructure, Robotics & AI, and ECE in collaboration with L&T.',
        ],
    },
    {
        name: 'G H Raisoni College of Engineering, Nagpur',
        image: '/images/ghrce/ghrce.jpeg',
        alt: 'G H Raisoni College of Engineering, Nagpur',
        paragraphs: [
            'The G H Raisoni University in India is a leading higher education institution offering undergraduate, postgraduate, diploma, and doctoral programmes across engineering, management, sciences, commerce, and other disciplines. The university focuses on quality education, innovation, research, entrepreneurship, and industry-oriented learning. It actively promotes skill development, academic excellence, technological advancement, and holistic student development.',
        ],
    },
    {
        name: 'Kirinyaga University (KyU)',
        image: '/images/kyrgyzskiy/kyrgyzskiy.jpg',
        alt: 'Kirinyaga University',
        paragraphs: [
            'The Kirinyaga University (KyU) in Kenya is a leading higher education institution offering diverse Bachelor’s, Master’s, Diploma, Certificate, and PhD programmes. It focuses on quality education, research, innovation, technology, and professional development. The University actively promotes practical skills, academic excellence, research collaboration, and community development.',
        ],
    },
];

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="School Profile" date="25, 26, 27 September, 2026" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/kyrgyzskiy/gallery/gallery-1.jpg' />
            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="Organising Schools Profiles" />
                <div className="space-y-16">
                    {SCHOOLS.map((school) => (
                        <div key={school.name} className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                                <h3 className="text-2xl font-bold text-primary text-left">{school.name}</h3>
                                {school.paragraphs.map((paragraph) => (
                                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                                ))}
                            </div>
                            <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                                <img
                                    src={school.image}
                                    alt={school.alt}
                                    className="shadow-lg w-full max-w-md object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
