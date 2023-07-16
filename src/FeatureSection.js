export default function FeatureSection() {

    return (

        <section className=" md:flex pt-2 pb-2 mx-6 ">
            <div className=" md:w-3/4 mr-12 flex-col items-center mb-20">
                <h3 className=" text-4xl font-bold mb-16">What's different about manage</h3>
                <p className="text-xl font-light">The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles</p>
            </div>
            <div className="flex-col space-y-8">
                <div className='flex items-start'>
                    <div className="h-full">
                        <button className="px-3 mt-1 mr-2 bg-red-500 rounded-full hover:bg-red-400 text-white">01</button>
                    </div>

                    <div className="">
                        <h4 className='text-2xl bg-red-100 md:bg-transparent font-bold mb-4 inline'>Heading for test purpose</h4>
                        <p className = 'font-light'>Just some random text to test out the bla bla bla Just some random text to test out the bla bla bla Just some random text to test out the bla bla bla</p>
                    </div>
                </div>
                <div className='flex items-start '>
                    <div className="h-full">
                        <button className="px-3 mt-1 mr-2 bg-red-500 rounded-full hover:bg-red-400 text-white">02</button>
                    </div>
                    <div>
                        <h4 className='text-2xl bg-red-100 md:bg-transparent font-bold mb-4 inline'>Heading for test purpose</h4>
                        <p className = 'font-light'>Just some random text to test out the bla bla bla Just some random text to test out the bla bla bla Just some random text to test out the bla bla bla</p>
                    </div>
                </div>
                <div className='flex items-start'>
                    <div className="h-full">
                        <button className="px-3 mt-1 mr-2 bg-red-500 rounded-full hover:bg-red-400 text-white">03</button>
                    </div>
                    <div>
                        <h4 className='text-2xl bg-red-100 md:bg-transparent font-bold mb-4 inline'>Heading for test purpose</h4>
                        <p className = 'font-light'>Just some random text to test out the bla bla bla Just some random text to test out the bla bla bla Just some random text to test out the bla bla bla</p>
                    </div>
                </div>

            </div>

        </section>
    )
}