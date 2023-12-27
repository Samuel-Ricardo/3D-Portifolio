import { styles } from "@/app/styles";
import { FeedbackCard } from "@/components/card/feedback.component";
import { MotionDiv } from "@/components/motion/div.component";
import { SectionWrapper } from "@/components/wrapper/section.component";
import { testimonials } from "@/utils/constants";
import { textVariant } from "@/utils/motion";

export const Feedbacks = SectionWrapper(
  () => (
    <section className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <MotionDiv variants={textVariant()}>
          <p className={styles.section.sub.text}>What others say</p>
          <h2 className={styles.section.head.text}>Testimonials</h2>
        </MotionDiv>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  ),
  "Feedbacks",
);
