import "./index.css";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      <ul className="toolbar-list">
        {filters.map((item) => (
          <li
            className={`toolbar-item ${selected === item ? "selected" : ""}`}
            onClick={() => onSelectFilter(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
