import { styles } from "@/app/styles";

export const Hero = () => (
  <section className="relative w-full h-screen mx-auto">
    <div
      className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    ></div>
  </section>
);
