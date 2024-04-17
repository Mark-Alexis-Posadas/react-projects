import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function AccordionItem({
  title,
  description,
  toggleAccordion,
  accordionId,
}) {
  return (
    <ul className="my-3">
      <li
        className="flex items-center justify-between cursor-pointer bg-slate-50 shadow-md p-2 rounded"
        onClick={() => toggleAccordion(accordionId)}
      >
        {title}
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </li>
      <div>
        <p>{description}</p>
      </div>
    </ul>
  );
}
