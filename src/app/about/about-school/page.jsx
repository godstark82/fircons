import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="School Profile" date="5 - 7 September" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/utb-images/gallery/gallery-1.jpg' />
            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="Organising schools Profiles" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                        <p>
                            The School of Engineering at IILM University aims to produce graduates with personal, academic and professional maturity to thrive in today’s competitive global job market and to create innovative, sustainable solutions to complex engineering problems. We are in a digital age and to compete with evolving skills the school offers a variety of specializations in emerging technologies. School offers program in B. Tech Biotechnology, Bioinformatics, Food Technology, Electronics & Communication Engineering (ECE) in Collaboration with L&T, Civil and Sustainable Infrastructure Engineering, Electrical and Computer Engineering, Electronics and Computer Engineering, Robotics & Artificial Intelligence etc.
                        </p>
                        <p>
                            The School of Sciences (SoS) at IILM University is a premier institution for students seeking a strong foundation in the fields of sciences. Its purpose is to provide a strong educational base in various scientific disciplines to students pursuing degrees in science-related fields.
                            The school comprises of domains, namely Physics, Chemistry and Mathematics, Forensic Science, and Environmental Science.
                            <br></br>
                            The school offers a comprehensive range of programs in various fields sciences including Physics, Chemistry, Mathematics, Environmental Sciences and Forensic Sciences. The undergraduate and postgraduate programs are designed and implemented as per NEP 2020 (UGC) with multiple entry and exit options.
                        </p>
                    </div>
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="https://iilm.ac.in/uploads/all/40/conversions/Group-20050-(1)-full.webp"
                            alt="Arya College, Jaipur"
                            className="shadow-lg w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
