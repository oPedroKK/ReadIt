function Hero() {
    return (
        <section className="bg-[url(./images/default-1.jpg)] bg-no-repeat bg-center bg-cover w-screen h-[19.5rem] lg:h-[22rem] overflow-clip">
            <div className="grid p-6 pt-24 bg-gradient-to-b from-gray-700/85 to-gray-900/50 h-full lg:place-items-center lg:text-center">
                <p className="w-[20rem] md:w-[28rem] text-3xl md:text-3xl lg:text-5xl ">
                    Encontre <span className="text-green-500">os melhores livros</span> para os seus estudo <span className="text-green-500">aqui</span>!
                </p>
                <p className="pt-4 w-screen text-[16px] md:text-lg lg:text-xl">
                    São mais de <span className="text-green-500">1000</span> livros só te esperando!
                </p>
            </div>
        </section>
    )
}

export default Hero;