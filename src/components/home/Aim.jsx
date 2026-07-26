import SectionHeader from "../common/SectionHeader";
import { CONSTANTS } from "@/lib/constants";

export default function Aim() {
    return (
        <section className="bg-[#f5f7fa] py-12">
            <div className="container mx-auto px-4">
                <SectionHeader title="Conference Aim" />
                <div className="text-black text-lg text-justify space-y-4">
                    <p>
                        The aim of the “{CONSTANTS.CONFERENCE_FULL_TITLE} ({CONSTANTS.CONFERENCE_ABBR})”
                        is to unite experts from diverse mathematical disciplines worldwide to discuss and advance
                        both pure and applied mathematics. The conference seeks to foster research, encourage
                        innovative ideas, and establish collaborative research groups that facilitate knowledge
                        exchange and in-depth discussions on recent findings. It also aims to provide a platform
                        for mathematicians and researchers to present original work, novel approaches, and
                        contributions that blend theoretical advancements with practical applications, promoting
                        interdisciplinary collaboration and the exploration of emerging trends in mathematics.
                    </p>
                </div>
            </div>
        </section>
    );
}
