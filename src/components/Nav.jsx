export default function Nav({ sections }) {
  return (
    <nav className="container-fluid navContainer">
      <div className="row align-items-center">
        <div className="col">
          <h1>[Icon]</h1>
        </div>
        <div className="col text-end">
          <ul className="list-inline mb-0">
            {sections.map(section => (
              <li className="list-inline-item" key={section.id}>
                <button className="btn btn-link" onClick={() => section.ref.current.scrollIntoView({ behavior: 'smooth' })}>
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
  </nav>
  );
}