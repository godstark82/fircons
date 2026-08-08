import SectionHeader from "../common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PARTNERS = [
    {
        name: "Scientific Research University",
        subtitle: "Kyrgyz Economic University named after M. Ryskulbekov",
        location: "Kyrgyz Republic",
        image: "/images/kyrgyzskiy/kyrgyzskiy.jpg",
        description:
            "Scientific Research University “Kyrgyz Economic University named after M. Ryskulbekov” (Kyrgyz Republic) is a partner institution associated with the conference, fostering academic collaboration, research exchange, and international engagement in the field of mathematical and related sciences.",
    },
    {
        name: "IILM University",
        subtitle: "Greater Noida",
        location: "India",
        image: "/images/iilm.avif",
        description:
            "IILM University, Greater Noida is a partner institution associated with the conference, fostering academic collaboration, research exchange, and international engagement in the field of mathematical and related sciences.",
    },
    {
        name: "Shanti Educational Research Foundation",
        subtitle: "Academic & Research Partner",
        location: null,
        website: "https://shantiresearchfoundation.com",
        websiteLabel: "shantiresearchfoundation.com",
        image: "/images/serf/serf.jpeg",
        description:
            "Shanti Educational Research Foundation is associated with the conference as a research partner, supporting scholarly collaboration and the dissemination of research in mathematical and related sciences.",
    },
];

export default function Association() {
    return (
        <section className="bg-gradient-to-r from-primary/5 via-white to-secondary/5 py-14">
            <div className="container mx-auto px-4">
                <SectionHeader title="In Association With" />
                <div className="max-w-6xl mx-auto space-y-8">
                    {PARTNERS.map((partner) => (
                        <Card
                            key={partner.name}
                            className="overflow-hidden border-none shadow-2xl bg-white/95 backdrop-blur"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative h-full min-h-[240px] bg-white flex items-center justify-center p-8">
                                    {partner.image ? (
                                        <img
                                            src={partner.image}
                                            alt={partner.subtitle || partner.name}
                                            className="h-full w-full object-contain"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="text-center space-y-3 px-4">
                                            <p className="text-2xl font-bold text-primary">{partner.name}</p>
                                            {partner.website && (
                                                <a
                                                    href={partner.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block text-secondary hover:text-primary transition-colors font-medium underline underline-offset-4"
                                                >
                                                    {partner.websiteLabel}
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <CardContent className="p-8 space-y-6">
                                    <Badge variant="secondary" className="w-fit">Partner Institution</Badge>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-primary">{partner.name}</h3>
                                        {partner.subtitle && (
                                            <p className="text-lg font-semibold text-muted-foreground">
                                                {partner.subtitle}
                                            </p>
                                        )}
                                        {partner.location && (
                                            <p className="text-base text-muted-foreground">{partner.location}</p>
                                        )}
                                        {partner.website && partner.image && (
                                            <a
                                                href={partner.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block text-primary hover:underline"
                                            >
                                                {partner.websiteLabel}
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-base leading-relaxed text-justify text-muted-foreground">
                                        {partner.description}
                                    </p>
                                    {partner.website && !partner.image && (
                                        <a
                                            href={partner.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-primary hover:underline font-medium"
                                        >
                                            Visit {partner.websiteLabel}
                                        </a>
                                    )}
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
