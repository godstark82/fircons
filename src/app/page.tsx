import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import KeynoteSpeakers from "../components/home/KeynoteSpeakers";
import Overview from "../components/home/Overview";
import Tracks from "../components/home/Tracks";
import ImportantDates from "../components/home/ImportantDates";
import MinisterSection from "../components/home/MinisterSection";
import Patners from "../components/home/Patners";
import Faq from "@/components/home/Faq";
import Aim from "@/components/home/Aim";
import Objective from "@/components/home/Objective";
import Association from "@/components/home/Association";
import NagpurCity from "@/components/home/NagpurCity";

const Home = () => {
    return (
        <>
            <Hero />
            {/* <MinisterSection /> */}
            <Overview />
            <NagpurCity />
            <Association />
            <Aim />
            <Objective />
            <Tracks />
            <ImportantDates />
            <KeynoteSpeakers />
            {/* <Patners /> */}
            {/* <Highlights /> */}
            <Faq />

        </>
    )
}

export default Home;