import AboutHeader from '../../../components/common/AboutHeader';
import SectionHeader from '../../../components/common/SectionHeader';

export default function AboutUniversityPage() {
    return (
        <div className="bg-white">
            <AboutHeader title="University Profile" image='/images/simdte-white-lg.png' overlayColor='#d0224a' bgImage='/images/ghrce/iilm_uni_back.webp' />
            <div className="container mx-auto px-4 py-16">
                <SectionHeader title="G H Raisoni College of Engineering, Nagpur" />
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-2/3 text-gray-900 space-y-6 text-lg text-justify">
                        <p>
                            Established in 1996, <b>G H Raisoni College of Engineering [GHRCE]</b> is an Empowered Autonomous Institution in the central India imparting a holistic technical education to the students residing not only in India but also International students. The institution has always been ranked amongst a well performing institution by National Institutional Ranking Framework (NIRF), MHRD, Government of India. The institution has National Board of Accreditation [NBA] and National Assessment & Accreditation Council [NAAC]. The institution is graded Accredited “A++” by NAAC in 3rd cycle and almost all programs are Tier-I accredited by NBA. GHRCE has been ranked under Platinum category for Best Industry linked institution by AICTE-CII Survey. Currently GHRCE Positioned in the Band of 11-50 in Innovation Category by NIRF Ranking 2024.
                        </p>
                        <p>
                            GHRCE’s achievements in the field of space technology are truly commendable. Being part of the Students&apos; Satellite Program: India@75 and having the ability to design, build, and launch their own nanosatellite, GHRCESat, in just 18 months is a remarkable feat. The ability to develop a satellite that can facilitate inter and intra-communication with other nanosatellites, along with tracking their live locations in lower Earth orbit to create a satellite constellation, is a huge technological leap. The successful launch of GHRCESat from Satish Dhawan Space Centre (SDSC) on February 28, 2021, using PSLV-C-51/Amazonia-1, is a testament to the dedication and innovation of GHRCE&apos;s students and faculty. The fact that GHRCE became the first private institute to achieve such a milestone is a significant contribution to India’s growing space sector.
                        </p>
                    </div>
                    <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                        <img
                            src="/images/ghrce/ghrce.jpeg"
                            alt="G H Raisoni College of Engineering, Nagpur"
                            className="shadow-lg w-full max-w-md object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
