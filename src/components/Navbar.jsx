const Navbar = ({ brandName, pageLinks }) => {
    return (
        <>
            <nav>
                <h1>{brandName}</h1>

                {/* <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </a> */}

                <ul>
                    {pageLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
