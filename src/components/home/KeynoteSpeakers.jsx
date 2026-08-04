import SectionImageHeader from "../common/SectionImageHeader";

const KEYNOTE_SPEAKERS = [
    {
        name: "Dr. Liliana Guran",
        affiliation: "Babes-Bolyai University, Cluj-Napoca",
        country: "Romania",
        img: "/images/speakers/liliana.jpg",
    },
    {
        name: "Dr. Monika Bota",
        affiliation: "Babes-Bolyai University, Cluj-Napoca",
        country: "Romania",
        img: "/images/speakers/monalika_bota.jpg",
    },
    {
        name: "Dr. Devendra Kumar",
        affiliation: "",
        country: "Oman",
        img: "",
    },
    {
        name: "Rakesh M Patel",
        affiliation: "",
        country: "Gujarat, India",
        img: "/images/speakers/rakesh-m-patel.jpg",
    },
    {
        name: "Prof. (Dr.) Saibal Ray",
        affiliation: "Centre for Cosmology, Astrophysics and Space Science, GLA University, Mathura ",
        country: "Uttar Pradesh, India",
        img: "/images/speakers/saibal-ray.jpeg",
    },
    {
        name: "Dr. Hemant Nashine",
        affiliation: "",
        country: "India",
        img: "images/speakers/hemant-nashine.jpeg",
    },
    {
        name: "Dr. Rahul Shukla",
        affiliation: "",
        country: "India",
        img: "/images/speakers/rahul-shukla.jpeg",
    },
    {
        name: "Dr. G. P. Singh",
        affiliation: "Ph.D., FRAS, FMASc Dean (FW) Professor(HAG) of Mathematics",
        country: "India",
        img: "/images/speakers/gp-singh.jpeg",
    },
    {
        name: "Prof. J K Singh",
        affiliation: "Dept. of Mathematics Netaji Subhas University of Technology Sector-3, Dwarka",
        country: "New Delhi,India",
        img: "/images/speakers/jk-singh.jpeg",
    },
];

const SPEAKERS = [
    {
        name: "Dr. Niveen",
        affiliation: "",
        country: "Kuwait",
        img: "",
    },
    {
        name: "Dr. Rakesh M Patel",
        affiliation: "",
        country: "Gujarat, India",
        img: "/images/speakers/rakesh-m-patel.jpg",
    },
    {
        name: "Dr. Jimit R Patel",
        affiliation: "",
        country: "Gujarat, India",
        img: "",
    },
    {
        name: "Dr. Akhil Mittal",
        affiliation: "",
        country: "Gujarat, India",
        img: "",
    },
    {
        name: "Dr. Vinod Kumar",
        affiliation: "",
        country: "Himachal Pradesh, India",
        img: "",
    },
    {
        name: "Dr. Yogendra Rajoria",
        affiliation: "",
        country: "Haryana, India",
        img: "",
    },
    {
        name: "Dr. Pankaj",
        affiliation: "",
        country: "Noida, India",
        img: "",
    },
    {
        name: "Dr. Amrendra",
        affiliation: "",
        country: "Agra, India",
        img: "",
    },
    {
        name: "Dr. U S Rana",
        affiliation: "DAV (PG) College",
        country: "Dehradun, India",
        img: "",
    },
    {
        name: "Dr. Rahul Singh ",
        affiliation: "IILM University, Greater Noida,",
        country: "India",
        img: "",
    },
    {
        name: "Dr. Jitendra Beniwal",
        affiliation: "Mody University",
        country: "Rajasthan, India",
        img: "",
    },
];

function SpeakerCard({ speaker }) {
    return (
        <div className="bg-[#232335] rounded-md overflow-hidden shadow-md flex flex-col w-full max-w-[275px] p-4 text-white hover:scale-105 transition-transform duration-300">
            <div className="h-[240px] w-full overflow-hidden mb-4 rounded-md bg-[#1a1a2e] flex items-center justify-center relative group">
                <img
                    src={speaker.img || "/images/user.jpg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-md object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
            </div>
            <div>
                <div className="h-1.5 w-12 bg-primary my-1.5 rounded-full"></div>
                <div className="font-semibold text-sm md:text-base leading-tight mb-1">{speaker.name}</div>
                {speaker.affiliation && (
                    <div className="text-xs opacity-90 leading-tight whitespace-normal mb-1">{speaker.affiliation}</div>
                )}
                {speaker.country && (
                    <div className="text-xs opacity-70 leading-tight whitespace-normal">{speaker.country}</div>
                )}
            </div>
        </div>
    );
}

export default function KeynoteSpeakers() {
    return (
        <section className="bg-white">
            <SectionImageHeader title="Keynote Speakers" image="/images/speakers-bg.jpg" />
            <div className="container mx-auto px-4 py-8 md:py-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#232335]">Keynote Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center mb-12">
                    {KEYNOTE_SPEAKERS.map((speaker) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#232335]">Speakers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
                    {SPEAKERS.map((speaker) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
}
