export default function AccordionItem({ title, description, key }) {
  return (
    <>
      <li key={key}>
        {title}
        <ul>
          <li>{description}</li>
        </ul>
      </li>
    </>
  );
}
