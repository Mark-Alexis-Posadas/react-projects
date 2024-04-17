import AccordionItem from "./AccordionItem";
import accordionItems from "./data";
export default function Accordion() {
  return (
    <>
      {accordionItems.map((accordion) => (
        <AccordionItem
          title={accordion.title}
          description={accordion.content}
          key={accordion.id}
        />
      ))}
    </>
  );
}
