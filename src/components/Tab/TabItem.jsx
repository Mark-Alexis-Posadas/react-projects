export default function TabItem({ tabItems, handleChangeTab, activeTab }) {
  return (
    <>
      <ul className="flex items-center">
        {tabItems.map((item, idx) => (
          <li
            className={`w-[9rem] h-16 mx-2 shadow-md flex items-center justify-center cursor-pointer ${
              activeTab === idx
                ? "bg-purple-600 text-white"
                : "bg-slate-50 text-black"
            }`}
            key={idx}
            onClick={() => handleChangeTab(idx)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {tabItems.map((item, idx) => (
        <div
          key={idx}
          className={`${
            activeTab === idx ? "block" : "hidden"
          } p-10 max-w-[900px]`}
        >
          {item.content}
        </div>
      ))}
    </>
  );
}
