import { useState } from "react";
import AccordionItem from "./AccordionItem";
import accordionItems from "./data";
export default function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(accordionItems[0].id);

  const toggleAccordion = (id) => {
    setActiveAccordion(id === activeAccordion ? null : id);
  };

  return (
    <>
      <h2>Project 2: FAQ/Accordion</h2>
      {accordionItems.map((accordion) => (
        <AccordionItem
          title={accordion.title}
          description={accordion.content}
          key={accordion.id}
          accordionId={accordion.id}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </>
  );
}
