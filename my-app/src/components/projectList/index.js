import "./index.css";

export default function ProjectList({ data }) {
  return (
    <div className="projects">
      <ul className="projects-list">
        {data.map((item, index) => (
          <li className="projects-item" key={index}>
            <img src={item.img} alt={"Portfolio " + item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}
