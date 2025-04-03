function Book() {
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

    
            <section className="hero">
                <div className="content">
                    <h1>Solve the problem of <br /> everyday life in <span>1 minute</span></h1> <br />
                    <p>Lorem Ipsum is simply dummy text of <br />the printing  and typesetting industry. <br />It has been the  industry standard <br />since the 1500s.</p> <br />
                    <a href="#" className="cta-button">📥 Order this eBook for $49</a> <br /> <br />
                    <div className="link">
                    <p className="free-chapter">Interested in a free chapter? <a href="#">Download it now →</a></p>
                    </div>
                </div>
                <div className="image">
                    <img src="ebook.jpg" alt="" />
                </div>
            </section>
        </>
        
    );

}

export default Book;