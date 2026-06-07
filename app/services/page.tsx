import type { Metadata } from "next";
import { FloatingNavDemo } from "@/components/FloatingNav";
import { ServicesPageContent } from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Digital Marketing & Creative Services in Dubai | ReWorks",
  description:
    "ReWorks offers branding, creative design, video & animation, social media marketing, and digital development for brands in Dubai and across the UAE.",
};

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <FloatingNavDemo />
      <ServicesPageContent />
    </div>
  );
}
