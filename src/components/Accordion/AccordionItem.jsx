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
        <h2 className="font-bold text-green-600">{title}</h2>
        <span>
          <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
        </span>
      </li>
      {isActive && (
        <div className="p-2 bg-white shadow-md">
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      )}
    </ul>
  );
}
