export default function TabItem({ tabItems, handleChangeTab, activeTab }) {
  return (
    <>
      <ul className="flex items-center">
        {tabItems.map((item, idx) => (
          <li
            className={`w-[9rem] h-16  flex items-center justify-center cursor-pointer ${
              activeTab === idx
                ? idx === 0
                  ? "bg-green-400 text-white"
                  : idx === 1
                  ? "bg-purple-400 text-white"
                  : idx === 2
                  ? "bg-red-400 text-white"
                  : "bg-orange-400 text-white"
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
          className={`${activeTab === idx ? "block" : "hidden"} ${
            idx === 0
              ? "bg-green-400"
              : idx === 1
              ? "bg-purple-400"
              : idx === 2
              ? "bg-red-400"
              : idx === 3
              ? "bg-orange-400"
              : ""
          } p-10 max-w-[900px] text-white`}
        >
          {item.content}
        </div>
      ))}
    </>
  );
}
