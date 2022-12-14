import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 xl:px-20 ">

        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 md:col-span-5 lg:col-span-4 xl:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">

          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl md:col-span-7 lg:col-span-8 xl:col-span-9 dark:bg-dark-500">

          <Navbar />

          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
