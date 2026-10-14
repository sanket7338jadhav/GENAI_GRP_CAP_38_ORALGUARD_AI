import { motion } from "framer-motion";
import { BookOpen, Database, Cpu, BarChart3, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Research = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-28 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Research Summary</h1>
          </div>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-xl font-semibold leading-relaxed mb-4 text-foreground">
              AI-Assisted Dental Image Screening for Early Detection of Oral Conditions: A Comparative Evaluation of Lightweight CNN Architectures for Low-Resource Settings
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">Research Monograph</span>
              <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">Oral Lesion Classification</span>
              <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium">OralGuard AI Technical Evaluation</span>
            </div>
          </div>

          <div className="glass-card p-8 mb-8">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Abstract</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dental health remains a critical yet underserved aspect of healthcare in low-resource settings. This study presents OralGuard AI, an AI-assisted oral image screening prototype that evaluates the feasibility of lightweight convolutional neural network (CNN) architectures for classifying oral health conditions from patient-uploaded images. Three models were trained and compared on a publicly available oral lesions dataset (n=261): a custom baseline CNN, MobileNetV2, and ResNet50. MobileNetV2 achieved the highest macro F1-score of 0.63, demonstrating its superior trade-off between accuracy and computational efficiency for low-resource deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Database, label: "Dataset", value: "261 samples", desc: "Oral lesions dataset" },
              { icon: Cpu, label: "Selected Model", value: "MobileNetV2", desc: "Highest F1-score" },
              { icon: BarChart3, label: "F1-Score", value: "0.63 macro", desc: "On held-out test set" },
            ].map((s) => (
              <div key={s.label} className="glass-card p-5 text-center">
                <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="font-bold text-lg text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-[11px] text-muted-foreground/80 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Methodology & Inference Architecture</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The evaluation selected MobileNetV2 as the primary inference backbone due to its parameter efficiency and generalization on the 3-class lesion identification task. The OralGuard AI pipeline pairs image-based predictions with preliminary visual indicators to provide clear, actionable awareness for early professional consultation.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Research;
