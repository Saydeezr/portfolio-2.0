
function Intro() {
    return (
      <section className="contentContainer flex justify-between items-center h-screen relative ">
        <div className="flex items-center mx-auto max-w-screen-xl lg:py-16 ">
          <div className="text-left z-30">
            <div className="absolute left-24 top-60">
              <h1 className="mb-2 font-bold text-gray-900 xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl relative z-20">
              Saydeez Reyes
              </h1>
              <p className="mb-8 pt-6 text-lg font-normal text-gray-500 lg:text-xl">
              | Full-Stack Web Developer
              </p>
              <div className="flex-initial space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/About" className="inline-flex items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-900 hover:bg-gray-700">
                Get started
                </a>
              </div>
            </div>
          </div>
          <img className="absolute inset-y-60 right-32 w-[450px] h-auto sm:w-[350px] md:w-[300px]lg:w-[350px] xl:w-[450px] z-10" src="/images/introBackground.png" alt="Intro Background"/>
        </div>
      </section>
    );
  }
  
  export default Intro;
