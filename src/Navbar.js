export default function Navbar() {
    return (


        <nav className="relative top-0 p-6">
            <div className="flex justify-between items-center ">
                <div className="pt-2">
                    <img src = 'https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/logo.svg' alt = 'mainLogo'></img>
                </div>
                <ul className="hidden md:flex space-x-6">
                    <a className="cursor-pointer hover:text-gray-500">Pricing</a>
                    <a className="cursor-pointer hover:text-gray-500">Product</a>
                    <a className="cursor-pointer hover:text-gray-500">About us</a>
                    <a className="cursor-pointer hover:text-gray-500">Career</a>
                    <a className="cursor-pointer hover:text-gray-500">Community</a>
                </ul>
                <button className=" hidden md:block p-2 px-6 bg-red-500 rounded-full hover:bg-red-400 text-white">Get started</button>
                
            </div>
        </nav>
    )
}