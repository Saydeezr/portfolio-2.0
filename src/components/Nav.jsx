export default function Nav({ sections }) {
  return (
    <nav className="grid grid-cols-[auto_1fr] items-start p-2.5">
      <img className="w-[200px] h-auto mt-6" src="/images/signature.png" alt="Signature" />
      <ul className="flex pt-6 justify-end list-none items-center">
        {sections.map(section => (
          <button
            className="border-none cursor-pointer font-sans font-semibold text-[1.125rem] p-4 mr-2.5 hover:bg-[#1e293b] hover:text-white"
            key={section.id}
            onClick={() => section.ref.current.scrollIntoView({ behavior: 'smooth' })}
          >
            {section.title}
          </button>
        ))}
      </ul>
    </nav>
  );
}