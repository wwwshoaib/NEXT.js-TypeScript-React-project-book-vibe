import Image from 'next/image';

const Banner = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100/80 rounded-3xl p-8 sm:p-12 lg:p-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Books to freshen up <br className="inline" />
              your bookshelf
            </h1>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Explore an inspiring collection of top-rated books, curated recommendations, 
              and timeless stories designed to enrich your reading list and bring fresh 
              perspective to your shelf.
            </p>

            <div className="pt-2">
              <button className="bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold text-lg px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 active:scale-95">
                View the List
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="flex-1 flex justify-center items-center w-full max-w-md lg:max-w-none">
            <Image
              src="/book-for-hero-section.jpg"
              width={320}
              height={450}
              alt="Book cover banner image"
              priority
              className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;