import { FloatingNavDemo } from "@/components/FloatingNav";

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <FloatingNavDemo />
      <main className="flex flex-1 flex-col items-center justify-center pt-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight mb-4 uppercase">
          Services
        </h1>
        <p className="text-xl md:text-2xl text-[#6c24d6] italic font-medium">
          Coming Soon
        </p>
        <p className="text-black/60 mt-4 max-w-md">
          We are currently crafting our detailed service offerings. Stay tuned to see how we can rework your brand.
        </p>
      </main>
    </div>
  );
}
