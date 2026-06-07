import type { Metadata } from "next";
import { FloatingNavDemo } from "@/components/FloatingNav";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About ReWorks | Gen Z Brand Strategy & Digital Marketing Agency — Dubai, UAE",
  description:
    "ReWorks is a Gen Z-led creative and digital marketing agency with roots in Mumbai and operations across Dubai and the UAE. We rework brands into sharp, scroll-stopping digital systems.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <FloatingNavDemo />
      <AboutPageContent />
    </div>
  );
}
