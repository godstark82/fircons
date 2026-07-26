import SectionHeader from "../common/SectionHeader";

export default function Objective() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <SectionHeader title="Objective" />

                <div className="text-black text-lg text-justify space-y-4">
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            To promote the exchange of knowledge and recent advancements in pure and applied
                            mathematics across diverse mathematical disciplines.
                        </li>
                        <li>
                            To provide a collaborative platform for mathematicians, academicians, and researchers
                            to discuss innovative ideas and emerging trends in mathematical sciences.
                        </li>
                        <li>
                            To encourage the formation of collaborative research groups and facilitate in-depth
                            discussions on recent findings and open problems.
                        </li>
                        <li>
                            To offer a forum for presenting original research, novel mathematical approaches, and
                            contributions that connect theory with practical applications.
                        </li>
                        <li>
                            To foster interdisciplinary collaboration and inspire young researchers to advance the
                            frontiers of mathematical discovery and innovation.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
