const Final = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="mx-auto max-w-[1000px] bg-[#f8f9fa] h-80 rounded-3xl ">
              <div className="space-y-4">
                <div class="flex justify-center items-center pt-12">
                  <h1 class="md:text-4xl text-3xl text-black font-bold tracking-tight">
                    Get Started for Free
                  </h1>
                </div>

                <div class="flex justify-center items-center text-black text-center max-w-lg mx-auto ">
                  <p className="md:mx-0 mx-2">
                    You can activate a 14 day trial of our paid plan at any
                    time. After your trial, enjoy our free version — forever.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <a href="/register" class="border-[1px] bg-mainColor transition font-medium duration-1000 text-white py-3 px-6 rounded-full">
                    Create your free account now
                  </a>
                </div>

                <div class="flex justify-center items-center text-black text-center max-w-lg mx-auto">
                  <p>
                    No credit card required &#x2022; Free forever &#x2022;
                    Upgrade anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
