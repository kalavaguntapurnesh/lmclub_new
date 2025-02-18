import Navbar from "../components/Navbar";

const PageNotFound = () => {
  return (
    <section class="bg-white h-screen ">
      <Navbar />
      <div class="py-8 mx-auto max-w-[1400px] lg:py-16 h-[100%] ">
        <div class="flex flex-col justify-center items-center h-[100%]">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p class="mb-4 tracking-tight font-bold text-gray-900 text-4xl text-center">
            Something's missing.
          </p>
          <p class="mb-4 text-lg text-gray-600 text-center">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="/"
            class="inline-flex text-white bg-mainColor rounded font-medium text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
