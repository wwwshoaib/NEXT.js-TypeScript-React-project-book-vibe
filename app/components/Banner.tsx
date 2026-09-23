
import Image from 'next/image';


const Banner = () => {
    return (
        <section className=''>
            <div className="container bg-gray-50 mx-auto">
                <div className=" blok lg:flex justify-between p-10 lg:p-20
                gap-30 ">
                    
                    <div className='my-10 lg:my-0'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className=''>
                       <Image src ="/book-for-hero-section.jpg"
                       width={500}
                       height={500}
                       alt='hero image'
                       >

                       </Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;