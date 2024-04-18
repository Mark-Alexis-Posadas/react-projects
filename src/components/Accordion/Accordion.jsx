import { useState } from "react";
import AccordionItem from "./AccordionItem";
import accordionItems from "./data";

export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(accordionItems[0].id);

  const toggleAccordion = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <div className="max-w-[900px] m-auto mt-5">
      <h2 className="font-bold">FAQ/Accordion</h2>

      {accordionItems.map((accordion) => (
        <AccordionItem
          title={accordion.title}
          description={accordion.content}
          key={accordion.id}
          id={accordion.id}
          toggleAccordion={toggleAccordion}
          isActive={accordion.id === activeAccordion}
        />
      ))}
    </div>
  );
}
