import About from "../components/about";
import Container from "../components/container";
import Footer from "../components/footer";
import Form from "../components/form";
import Header from "../components/header";
import Hero from "../components/hero";

function HomePage() {
    return (
        <div>
            <Container>
                <Header />
                <Hero />
                <div className="bg-white xl:flex xl:items-start">
                    <About />
                    <Form />
                </div>
                <Footer />
            </Container>
        </div>
    )
}

export default HomePage;