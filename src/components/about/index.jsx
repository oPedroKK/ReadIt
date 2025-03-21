function About() {
    return (
        <section className="grid py-4 w-screen xl:w-[55%] text-black bg-white place-items-center">
            <div className="text-center py-4">
                <h1 className="text-3xl lg:text-4xl">COMO FUNCIONA?</h1>
                <p className="lg:text-lg">conheça a <span className="text-green-500 font-bold">ReadIt</span></p>
            </div>
            <div className="grid w-[85%] xl:w-[65%] gap-5 text-lg lg:text-2xl text-center">
                <p>
                    A ReadIt simplifica o acesso a livros de estudo, ajudando você a encontrar os melhores materiais para aprender e crescer.<br/><br/>
                    Nosso processo é <span className="text-green-500 font-bold">simples e eficiente</span>:
                </p>

                <div>
                    <h3 className="text-xl lg:text-3xl"><span className="text-green-500 font-bold">Explore nossa coleção</span></h3>
                    <p>Navegue por categorias ou utilize a busca para encontrar livros recomendados para diferentes áreas de conhecimento.</p>
                </div>

                <div>
                <h3 className="text-xl lg:text-3xl"><span className="text-green-500 font-bold">Escolha seu material</span></h3>
                    <p>Selecione os livros que mais combinam com seu estilo de aprendizado.</p>
                </div>

                <div>
                <h3 className="text-xl lg:text-3xl"><span className="text-green-500 font-bold">Acesse facilmente</span></h3>
                    <p>Dependendo do modelo da ReadIt, você pode baixar, comprar ou acessar os livros online com apenas alguns cliques.</p>
                </div>
            </div>
        </section>
    )
}

export default About;