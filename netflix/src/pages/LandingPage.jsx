const LandingPage = () => {
  return (
    <section className="landing-section text-white">
      <div className="h-screen w-100 back-bg">
        <div className="w-full h-full bg-[rgba(0,0,0,0.7)] flex flex-col ">
          <header>
            <div className="max-w-screen-xl mx-auto px-3">
              <div className="grid grid-cols-2  items-center py-5">
                <div>
                  <figure className="w-[150px]">
                    <img
                      src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
                      alt=""
                      className=""
                    />
                  </figure>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-[#e50914] rounded text-white px-4 py-1 font-medium text-sm inline-flex justify-center items-center"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="max-w-screen-xl mx-auto px-3 text-center flex-grow">
            <div className="flex  justify-center flex-col h-full">
              <h1 className="sm:text-5xl text-5xl font-extrabold">
                Unlimited movies, TV shows and more{" "}
              </h1>
              <p className="font-medium text-2xl mt-5">
                Watch anywhere. Cancel anytime.
              </p>
              <div className="w-full mx-auto  mt-5">
                <p className="text-xl mb-5">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <form className="flex flex-col sm:flex-row justify-center">
                  <div className="w-12/12 sm:w-6/12 h-100">
                    <input
                      type="text"
                      className="border border-[#ccc] bg-transparent p-4 w-full rounded-md"
                      placeholder="Email Address"
                    ></input>
                  </div>
                  <div className="w-auto mt-3 sm:mt-0">
                    <button
                      type="button"
                      className="btn-primary py-3 px-6 text-2xl bg-[#e50914] ms-3"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="flex">
            <div className="w-6/12">HIhi</div>
            <div className="w-6/12">hihih</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
