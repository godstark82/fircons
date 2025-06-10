import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import KeynoteSpeakers from "../components/home/KeynoteSpeakers";
import Overview from "../components/home/Overview";
import Tracks from "../components/home/Tracks";
import ImportantDates from "../components/home/ImportantDates";
import Scope from "../components/home/Scope";
import Objective from "../components/home/Objective";

const Home = () => {
    return (
        <>
            <Hero />
            <Overview />
            <Tracks />
            <ImportantDates />
            <KeynoteSpeakers />
            <Scope />
            {/* <Highlights /> */}
            <Objective />
        </>
    )
}

export default Home;