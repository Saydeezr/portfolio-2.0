import Image from 'react-bootstrap/Image'

export default function Nav({ sections }) {
  return (
    <nav className="container-fluid navContainer">
      <div className="row align-items-center">
        <div className="col-3 mt-2">
        {/* <Image className="logo" src='images/S.png'></Image> */}
        <p className='myName'>Portfolio</p>
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