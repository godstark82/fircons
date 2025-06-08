import SectionHeader from "../common/SectionHeader";

export default function Overview() {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <SectionHeader title="About Conference & Publication Ethics" />
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3 text-gray-800 text-justify space-y-4">
                        <p>
                            The International Conference on Advances in Science, Technology and Management (ICOSTEM 2023) is a prestigious academic gathering that brings together researchers, scholars and professionals from around the world. All submitted papers undergo a rigorous double-blind review process by three reviewers. After successful review, papers will be submitted for proceedings publication by Taylor and Francis. High-quality research papers may be recommended for publication in SCI/SCOPUS-indexed journals.
                        </p>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Publication Terms</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Accepted manuscripts will be published in the conference proceedings, provided that the corresponding author has registered as per schedule. The corresponding (registered) author is not necessarily the first author.</li>
                                <li>Papers will be presented either orally or in poster format, with oral presentations allocated to highest-ranking manuscripts.</li>
                                <li>The publication fee of 100€ has been waived. No fees required at manuscript submission. For accepted papers, the corresponding author must register for conference presentation and proceedings inclusion.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Publication Ethics</h3>
                            <h4 className="font-semibold mt-2">Authors' Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Authorship limited to significant contributors</li>
                                <li>Original, high-quality scholarly work with proper references</li>
                                <li>Data must follow ethical research practices</li>
                                <li>Promptly report any significant errors</li>
                                <li>Maintain communication with editors</li>
                            </ul>
                            
                            <h4 className="font-semibold mt-2">Reviewers' Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Review within expertise only</li>
                                <li>Provide constructive criticism</li>
                                <li>Maintain confidentiality</li>
                                <li>Timely reviews</li>
                                <li>Report ethical concerns</li>
                            </ul>

                            <h4 className="font-semibold mt-2">Editors' Responsibilities:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Ensure highest quality publications</li>
                                <li>Conduct thorough peer review</li>
                                <li>Maintain transparency</li>
                                <li>Treat submissions fairly</li>
                                <li>Provide guidance when needed</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-bold text-xl mb-4">Conference Committee</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-3">Editorial Board</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>Prof. (Dr.) Dorota Jelonek</li>
                                        <li>Prof. (Dr.) Narendra Kumar</li>
                                        <li>Prof. (Dr.) Lilla Knop</li>
                                        <li>Prof. (Dr.) Sanjeev Kumar</li>
                                        <li>Prof. (Dr.) Ilona Paweloszek</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-3">Associate Editors</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li>Prof. (Dr.) Alok Aggarwal</li>
                                        <li>Prof. (Dr.) Dalia Younis</li>
                                        <li>Prof. (Dr.) Leszek Ziora</li>
                                        <li>Prof. (Dr.) Mamta Chahar</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-3">Reviewer Board</h4>
                                    <ul className="space-y-2 text-sm h-[300px] overflow-y-auto">
                                        <li>Prof. (Dr.) Abdelmonaim Fakhry Kamel Mohammed</li>
                                        <li>Prof. (Dr.) Aleksandra Ptak</li>
                                        <li>Prof. (Dr.) Andrii Galkin</li>
                                        <li>Prof. (Dr.) Csaba Bálint Illés</li>
                                        <li>Prof. (Dr.) Dejan Mircetic</li>
                                        <li>Prof. (Dr.) Dorota Jelonek</li>
                                        <li>Prof. (Dr.) Helena Fidlerova</li>
                                        <li>Prof. (Dr.) Ike Umejesi</li>
                                        <li>Prof. (Dr.) Ilona Paweloszek</li>
                                        <li>Prof. (Dr.) Ismail Naci Cangul</li>
                                        <li>Prof. (Dr.) Jelena Franjkovic</li>
                                        <li>Prof. (Dr.) Leszek Ziora</li>
                                        <li>Prof. (Dr.) Liviu Rosca</li>
                                        <li>Prof. (Dr.) Mahesh Joshi</li>
                                        <li>Prof. (Dr.) Marta Starostka-Patyk</li>
                                        <li>Prof. (Dr.) Mihaela Lupeanu</li>
                                        <li>Prof. (Dr.) Naveen Kumar Sharma</li>
                                        <li>Prof. (Dr.) Preeti Narooka</li>
                                        <li>Prof. (Dr.) Rakesh M Patel</li>
                                        <li>Prof. (Dr.) Raya Karlibaeva</li>
                                        <li>Prof. (Dr.) Verezubova Tatsiana</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="bg-light p-4">
                            <img
                                src="/overview.png"
                                alt="Conference"
                                className="w-full h-full object-cover rounded-md mb-2"
                            />
                            <div className="w-12 h-2 bg-primary mb-2"></div>
                            <div className="text-secondary font-bold text-sm leading-tight mb-2">Submit Papers At:</div>
                            <div className="text-xs text-gray-700 space-y-1">
                                <p><strong>Abstract Submission:</strong><br/><a href="https://forms.gle/UGMg5UHr2p7kEHGf6" target="_blank" rel="noopener noreferrer">https://forms.gle/UGMg5UHr2p7kEHGf6</a></p>
                                <p><strong>Paper Submission:</strong><br/><a href="https://www.fircons.com/register" target="_blank" rel="noopener noreferrer">https://www.fircons.com/register</a></p>
                            </div>
                            
                            <div className="mt-4 space-y-4">
                                <div>
                                    <h3 className="text-sm font-bold mb-2">Conference Chairs:</h3>
                                    <p className="text-xs text-gray-700">Prof. (Dr.) Sanjeev Kumar<br/>Department of Mathematics<br/>Dr Bhimrao Ambedkar University, Agra, India</p>
                                    <p className="text-xs text-gray-700 mt-2">Prof. (Dr.) Ilona Paweloszek<br/>Czestochowa University of Technology<br/>Czestochowa, Poland</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold mb-2">Conveners:</h3>
                                    <p className="text-xs text-gray-700">Prof. (Dr.) Paula Bajdor<br/>Czestochowa University of Technology, Poland</p>
                                    <p className="text-xs text-gray-700 mt-1">Prof. (Dr.) Liliana Guran<br/>Romania</p>
                                    <p className="text-xs text-gray-700 mt-1">Prof. (Dr.) Dalia Younis<br/>Egypt</p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold mb-2">For More Details:</h3>
                                    <p className="text-xs text-gray-700">
                                        Prof. (Dr.) Ajay K Singh, India<br/>
                                        WhatsApp: +918302904370<br/>
                                        Email: serfjaipur@gmail.com
                                    </p>
                                    <p className="text-xs text-gray-700 mt-2 italic">
                                        Your participation as a speaker is important to us. Kindly submit your title/abstract along with initial registration. In case of cancellation, a refund will be given by the event manager after deducting service charges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
