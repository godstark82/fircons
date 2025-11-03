import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="University Profile" date="5 - 7 September" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/utb-images/gallery/gallery-1.jpg'  />
            <div className="container mx-auto px-4 py-16">
            <SectionHeader title="IILM University Greater, Noida" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg">
                        <p>
                        IILM University, Greater Noida, established under the Uttar Pradesh Private University (Amendment) Act 2022, is a young and dynamic institution dedicated to fostering academic excellence, innovation, and holistic development. Nestled in the vibrant educational hub of Greater Noida, the university is strategically located to provide students with access to a global learning environment and opportunities for industry exposure. With its foundation rooted in the principles of inclusivity, integrity, and quality, IILM University is committed to creating a transformative educational experience for all its stakeholders.
                        </p>
                        <p>
                        The university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines, including Management, Law, Engineering, Sciences, Liberal Arts, and Social Sciences. Its curriculum is designed to integrate academic rigor with practical relevance, ensuring that students are well-equipped to meet the demands of an ever-evolving world. At IILM, the emphasis is not only on academic learning but also on nurturing critical thinking, creativity, and leadership skills.
                        </p>
                    </div>
                    {/* Right: Image */}
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="/images/arya-images/gallery-1.webp"
                            alt="Arya College, Jaipur"
                            className="shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
