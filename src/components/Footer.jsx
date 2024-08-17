function Footer() {
    return(
        <div className="rounded-lg footer-container">
            <div className="container pb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <a href="https://github.com/Saydeezr/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-2x icon-footer"></i>
                        </a> 
                        <a href="https://www.linkedin.com/in/saydeez-reyes-bb9380314/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-2x icon-footer"></i>
                        </a>
                    </div>
                    <ul className="list-inline mb-0 pt-4">
                        <li className="list-inline-item ">
                            <a href="#" className="btn-link">Home</a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="#" className="btn-link">Top</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-4" />
                <span className="d-block text-center text-muted">© 2024 Portfolio Rights to Author</span>
            </div>
        </div>
    )
}

export default Footer;