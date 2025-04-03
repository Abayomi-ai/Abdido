import Book from "./Ebook";


function Nav() {
    return (

        <>

            <div>
                <header className="header">
                    <div className="logo">📖 E-BOOK</div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About e-book</a></li>
                            <li><a href="#">What will you learn?</a></li>
                            <li><a href="#">Fragments</a></li>
                            <li><a href="#">Benefits</a></li>
                            <li><a href="#">Opinions</a></li>
                            <li><a href="#">About the Author</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
        
    );

}

export default Nav;