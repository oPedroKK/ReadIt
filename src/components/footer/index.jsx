function Footer() {
    return (
        <section className="grid py-4 w-screen text-black bg-[#e8ecef] place-items-center">
            <div className="text-center py-4">
                <p>Copyright© ReadIt - 2025</p>
                <p>Developed by Pedro Barboza</p>
            </div>
            <p>Minhas redes</p>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/opedrokk/" target="_blank">
                    <img className="w-8" src="./icons/instagram.svg"/>
                </a>
                <a href="https://github.com/oPedroKK" target="_blank">
                    <img className="w-8" src="./icons/github.svg"/>
                </a>
            </div>
        </section>
    )
}

export default Footer;