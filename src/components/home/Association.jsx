import SectionHeader from "../common/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ASSOCIATION_IMAGE = "/images/ghrce/ghrce.webp";

export default function Association() {
    return (
        <section className="bg-gradient-to-r from-primary/5 via-white to-secondary/5 py-14">
            <div className="container mx-auto px-4">
                <SectionHeader title="In Association With" />
                <Card className="max-w-6xl mx-auto overflow-hidden border-none shadow-2xl bg-white/95 backdrop-blur">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative h-full min-h-[280px] bg-white flex items-center justify-center p-8">
                            <img
                                src={ASSOCIATION_IMAGE}
                                alt="G H Raisoni College of Engineering, Nagpur"
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                        <CardContent className="p-8 space-y-6">
                            <Badge variant="secondary" className="w-fit">Partner Institution</Badge>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-primary">
                                    G H Raisoni College of Engineering
                                </h3>
                                <p className="text-lg font-semibold text-muted-foreground">
                                    GHRCE, Nagpur
                                </p>
                            </div>
                            <p className="text-base leading-relaxed text-justify text-muted-foreground">
                                Established in 1996, G H Raisoni College of Engineering [GHRCE] is an Empowered
                                Autonomous Institution in central India imparting a holistic technical education to
                                students from India and abroad. The institution is accredited “A++” by NAAC in its
                                3rd cycle, with almost all programs Tier-I accredited by NBA, and is ranked under the
                                Platinum category for Best Industry Linked Institution by AICTE-CII Survey. GHRCE is
                                positioned in the Band of 11-50 in the Innovation Category by NIRF Ranking 2024.
                            </p>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </section>
    );
}
