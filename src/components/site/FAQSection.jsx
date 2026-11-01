import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FAQS } from "../../data/content";
import { PillButton } from "./shared";
import { SnailMark } from "./SnailLogo";

export const FAQSection = ({ onContact }) => (
  <section id="faq" className="bg-ly-ivory" data-testid="faq-section">
    <div className="flex flex-col lg:flex-row px-4 pt-10 pb-12 md:px-16 md:pt-[116px] md:pb-[120px]">
      <div className="lg:min-w-[50%] lg:pr-6 lg:flex-1">
        <h2 className="font-gilroy font-light text-[40px] md:text-[56px] leading-[1.2] text-ly-black">Frequently<br />Asked<br />Questions</h2>
        <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center mt-1.5 lg:pr-24">
          <p className="font-inter text-ly-gray text-sm md:text-base whitespace-nowrap">Don't worry, we have answers</p>
          <span className="h-px w-full bg-ly-grey opacity-60" />
        </div>
        <div className="hidden lg:flex mt-[200px]">
          <PillButton onClick={onContact} testId="faq-ask-btn" className="gap-[68px]">Ask Us Anything</PillButton>
        </div>
      </div>
      <Accordion type="single" collapsible defaultValue="item-0" className="lg:min-w-[50%] mt-10 lg:mt-0 lg:flex-1" data-testid="faq-accordion">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="bg-white mb-2 border-none">
            <AccordionTrigger className="px-4 md:px-6 py-5 md:py-6 hover:no-underline text-left" data-testid={`faq-question-${i}`}>
              <span className="flex flex-col-reverse xl:flex-row xl:items-center gap-2 xl:gap-4 font-gilroy font-medium text-lg md:text-2xl text-ly-black">
                {f.q}
                {f.fav && (
                  <span className="self-start xl:self-auto inline-flex items-center gap-1.5 bg-ly-black text-white text-sm font-gilroy font-normal rounded-full pl-3 pr-1.5 py-1 whitespace-nowrap">
                    Our Favourite <SnailMark className="h-4 w-4" />
                  </span>
                )}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 md:px-6 pb-6 font-inter text-base md:text-lg leading-relaxed text-ly-gray">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex lg:hidden mt-10">
        <PillButton onClick={onContact} testId="faq-ask-btn-mobile">Ask Us Anything</PillButton>
      </div>
    </div>
  </section>
);

export default FAQSection;

