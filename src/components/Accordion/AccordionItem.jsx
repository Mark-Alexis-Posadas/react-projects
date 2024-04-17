export default function AccordionItem({ title, description }) {
  return (
    <ul>
      <li>
        {title}
        <span></span>
      </li>
      <ul>
        <li>{description}</li>
      </ul>
    </ul>
  );
}
