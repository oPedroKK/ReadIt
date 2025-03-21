function Header() {
    return (
        <div className="fixed z-1 p-4 w-screen h-22 bg-[#00a63e]/0 transition-all duration-300 header_nav">
            <div>
                <h1 className="text-4xl font-extrabold">ReadIt</h1>
                <p className="-mt-1.5">Livros digitais</p>
            </div>
        </div>
    )
}

export default Header;