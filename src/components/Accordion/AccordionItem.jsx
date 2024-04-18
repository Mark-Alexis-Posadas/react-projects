import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function AccordionItem({
  title,
  description,
  id,
  toggleAccordion,
  isActive,
}) {
  return (
    <ul className="my-3">
      <li
        className="flex items-center justify-between cursor-pointer bg-slate-50 shadow-md p-2 rounded"
        onClick={() => toggleAccordion(id)}
      >
        {title}
        <span>
          <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
        </span>
      </li>
      {isActive && (
        <div className="p-2 bg-white shadow-md">
          <p>{description}</p>
        </div>
      )}
    </ul>
  );
}
