import Image from "next/image";

export default function Header() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      
      
      <header className="bg-white rounded-2xl shadow p-4 flex-row justify-between items-center mx-6">
        <div className="relative h-36 mt-2 bg-contain bg-center rounded-2xl" style={{ backgroundImage: "url('./bann.jpeg')" }}>
          <div className="absolute inset-0 bg-black rounded-2xl bg-opacity-30 flex justify-center items-center"></div>
        </div>
        <Image src="./logo.jpg" width="70" height="100" className="absolute top-28 rounded-lg left-16" />

        <div className="lg:flex justify-between mt-4 mb-4">
          <h1 className="text-xl font-bold">
            Harvard University: Acceptance Rate, Fees & Courses{" "}
            <span className="bg-orange-100 rounded text-sm p-1 text-orange-600">Top 10</span> <br />
            <span className="text-sm text-gray-600">Massachusetts, United States</span>
          </h1>
          <div className="flex items-center space-x-4">
            <button className="border-2  px-4 py-2 rounded"><i class="fa-regular fa-star "></i></button>
            <button className="border-2 px-3 py-2 rounded"><i className="fas fa-user md:mr-2 align-center"></i><span className="md:inline-block hidden font-bold">Join group</span></button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded mr-4"><i className="fas fa-user-plus md:mr-2"></i><span className="md:inline-block hidden font-bold">Help Me Decide</span></button>
          </div>
        </div>
        <hr />

        <div className="">
          <ul className="flex lg:gap-10 sm:gap-4 gap-1 sm:text-lg text-[10px] ">
            <li className="text-orange-600 after-content after-block after-w-full after-h-1 after-bg-orange hover:text-orange-600 font-semibold">About</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">Courses</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">Cost</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">Admissions</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">Ranking</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">Counselling</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">Reviews</li>
            <li className="text-gray-600 hover:text-orange-600 font-semibold">FAQ</li>
          </ul>
        </div>
      </header>
    </>
  );
}
