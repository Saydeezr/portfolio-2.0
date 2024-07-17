export default function Nav({ sections }) {
    return (
        <nav>
          <ul>
            {sections.map(section => (
              <li key={section.id} onClick={() => section.ref.current.scrollIntoView({ behavior: 'smooth'})}>
                {section.title}
              </li>
            ))}
          </ul>
        </nav>
      );
}