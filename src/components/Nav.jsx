export default function Nav({ sections }) {
    return (
        <nav>
          <ul>
            {sections.map(section => (
              <button className="nav-item" key={section.id} onClick={() => section.ref.current.scrollIntoView({ behavior: 'smooth'})}>
                {section.title}
              </button>
            ))}
          </ul>
        </nav>
      );
}