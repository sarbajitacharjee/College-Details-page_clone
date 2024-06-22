import VideoCarousel from "./VideoCarousel";

export default function CollegeInfo() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left Side */}
        <div className="w-full sm:w-3/4">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <hr className="mb-6" />
          <div className="bg-white p-6 shadow rounded">
            <div className="flex flex-wrap gap-6 mb-4">
              <div className="flex items-center gap-2 bg-green-100 p-2 rounded-lg">
                <i className="fa-solid fa-building-columns text-green-600"></i>
                <div>
                  Private <br />
                  <span className="text-xs font-semibold">University Type</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-100 p-2 rounded-lg">
                <i className="fa-solid fa-ranking-star text-green-600"></i>
                <div>
                  3 <br />
                  <span className="text-xs font-semibold">US News National rank: 3</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-green-100 p-2 rounded-lg">
                <i className="fa-solid fa-ranking-star text-green-600"></i>
                <div>
                  $84,000 <br />
                  <span className="text-xs font-semibold">Average living Expenses</span>
                </div>
              </div>
            </div>

            <p>
              <span className="dark">Harvard University</span> is a private Ivy
              League research university in{" "}
              <span className="dark">Cambridge, Massachusetts.</span> Founded in{" "}
              <span className="dark">1636</span> as Harvard College, it is the
              oldest institution of higher learning in the United States and
              among the most prestigious in the world. Harvard University has an
              enrollment of <span className="dark">23,000+ students</span> and a{" "}
              <span className="dark">student-to-faculty ratio of 7:1.</span>{" "}
              Harvard's four-year graduation rate is 87%, and its first-year
              retention rate is <span className="dark">96%.</span>
            </p>
            <h1 className="font-bold mt-5 text-xl">
              What is The Acceptance Rate of Harvard University?
            </h1>
            <p className="mt-4">
              Harvard University acceptance rate is just 4%, making it one of the
              most selective universities in the world.
            </p>
            <p className="mt-4">
              Harvard University acceptance rate is just 4%, making it one of the
              most selective universities in the world.
            </p>
            <p className="mt-4">
              Harvard University acceptance rate is just 4%, making it one of the
              most selective universities in the world.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full sm:w-1/4">
          <div className="bg-white p-4 shadow rounded mb-6 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Photos & Videos</h3>
            <div className="w-full">
              <VideoCarousel />
            </div>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p>
              <span className="dark">Address:</span> 3 Oxford St, Cambridge, MA
              02138, USA
            </p>
            <p className="dark">Email: internationaloffice@harvard.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
