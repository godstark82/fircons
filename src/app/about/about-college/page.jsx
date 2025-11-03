import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="University Profile" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/iilm/iilm_uni_back.webp' />
            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="IILM University Greater, Noida" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left: Text Content */}
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                        <p>
                            IILM University, Greater Noida, established under the Uttar Pradesh Private University (Amendment) Act 2022, is a young and dynamic institution dedicated to fostering academic excellence, innovation, and holistic development. Nestled in the vibrant educational hub of Greater Noida, the university is strategically located to provide students with access to a global learning environment and opportunities for industry exposure. With its foundation rooted in the principles of inclusivity, integrity, and quality, IILM University is committed to creating a transformative educational experience for all its stakeholders.<br /><br />

                            The university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines, including Management, Law, Engineering, Sciences, Liberal Arts, and Social Sciences. Its curriculum is designed to integrate academic rigor with practical relevance, ensuring that students are well-equipped to meet the demands of an ever-evolving world. At IILM, the emphasis is not only on academic learning but also on nurturing critical thinking, creativity, and leadership skills, which are vital for personal and professional growth.<br /><br />

                            Despite its recent establishment, IILM University has already positioned itself as a forward-looking institution, focusing on building robust systems for quality assurance and academic excellence. The university has set up an Internal Quality Assurance Cell (IQAC) to oversee the development of a culture of quality, facilitate the adoption of best practices, and prepare the institution for national and international rankings and accreditations. These efforts are in alignment with the university’s vision of becoming a globally recognized institution that imparts transformative education and contributes to societal progress.<br /><br />

                            The state-of-the-art campus of IILM University is designed to provide a conducive environment for learning, collaboration, and innovation. With modern classrooms, well-equipped laboratories, a comprehensive library, and vibrant recreational spaces, the campus supports a holistic approach to education. The university also promotes research and development by encouraging faculty and students to engage in cutting-edge research, interdisciplinary collaborations, and knowledge creation.<br /><br />

                            IILM University places a strong emphasis on industry engagement and experiential learning. Through partnerships with leading organizations, internships, live projects, and industry-oriented curricula, the university ensures that students gain practical insights and hands-on experience in their chosen fields. The focus on skill development and employability is further enhanced by dedicated career counselling and placement services, which guide students in navigating their professional journeys.<br /><br />

                            In addition to academic pursuits, the university fosters a rich and inclusive campus life, encouraging students to participate in cultural, sports, and community engagement activities. These experiences help students build interpersonal skills, broaden their horizons, and develop a sense of social responsibility.<br /><br />

                            As a young and aspirational institution, IILM University is driven by its mission to inspire and empower the next generation of leaders, innovators, and change-makers. By fostering an environment that values academic excellence, ethical leadership, and societal impact, the university is poised to make significant contributions to the higher education landscape in India and beyond. With a focus on continuous improvement, collaborative growth, and a student-centric approach, IILM University is committed to becoming a beacon of knowledge and innovation in the years to come.
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
