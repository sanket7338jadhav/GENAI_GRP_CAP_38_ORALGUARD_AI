import { motion } from "framer-motion";
import { Shield, Sparkles, Stethoscope, Activity, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const corePillars = [
  {
    icon: Sparkles,
    title: "AI-Assisted Screening",
    description: "Evaluates lightweight convolutional neural networks (CNNs) to provide rapid preliminary screening insights from standard photographic images.",
  },
  {
    icon: Activity,
    title: "Early Awareness",
    description: "Dedicated to the principle 'See early. Seek care sooner.' — highlighting potential lesion markers to encourage timely professional consultation.",
  },
  {
    icon: Shield,
    title: "Accessibility-Driven",
    description: "Designed with low-resource computational constraints in mind, facilitating lightweight deployment without heavy infrastructure requirements.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Complement",
    description: "Serves as an educational and screening support aid, strictly complementing rather than replacing licensed dental examinations.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center md:text-left mb-8">
            <h1 className="text-3xl font-bold mb-2">About <span className="gradient-text">OralGuard AI</span></h1>
            <p className="text-muted-foreground text-sm">See early. Seek care sooner.</p>
          </div>

          {/* Mission Card */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-bold mb-3 text-foreground">Our Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              OralGuard AI is an AI-assisted oral health screening initiative designed to explore how deep learning models can assist in preliminary lesion detection and increase awareness around oral health conditions.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By combining computer vision with lightweight neural architectures, the application provides accessible screening insights and visual indications to help users and practitioners recognize when to seek timely professional care.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-bold mb-6 text-foreground">Technology & Objectives</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {corePillars.map((pillar) => (
                <div key={pillar.title} className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1.5 text-foreground">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Clinical Context */}
          <div className="glass-card p-8 mb-8">
            <h3 className="font-semibold text-lg mb-3 text-foreground">Research Background</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Oral conditions such as leukoplakia often present subtle visual cues that benefit from early detection. The OralGuard AI framework analyzes oral photographs against trained deep learning representations to categorize potential lesions and provide visual indications of regions of interest.
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Important Notice:</span> OralGuard AI is a screening awareness tool and does not provide a definitive medical diagnosis. Users are always encouraged to consult a licensed oral health professional for clinical evaluation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
