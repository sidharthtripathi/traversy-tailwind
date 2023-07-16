export default function Section(){


    return (
        <section className=" flex md:flex-row flex-col-reverse justify-start items-start  pt-2 pb-2 mx-6">
            <div className=" flex flex-col md:items-start items-center mb-32 space-y-12 md:w-2/3 ">
                <h1 className="text-4xl font-bold  w-2/3">Bring everyone together to build better products</h1>
                <p className="font-light w-2/3  "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className=" p-2 px-6 bg-red-500 rounded-full hover:bg-red-400 text-white">Get started</button>
            </div>
            <div className="flex flex-col md:items-start items-center">
                <img src = 'https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/illustration-intro.svg' alt = 'statsLogo'></img>
            </div>
        </section>
    )
}