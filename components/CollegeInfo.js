import VideoCarousel from "./VideoCarousel";

export default function CollegeInfo() {
    return (
      <div className="container w-full ml-7 py-5 rounded-md">
        <div className="flex justify-between items-center">
          <div className="w-3/4">
            <h2 className="text-xl font-bold mb-4">About</h2><hr/>
            <div className="bg-white p-6 shadow rounded">
            <div class="flex flex-wrap items-center gap-12 h-auto bg-green-100 p-4 rounded-lg mb-4">
    <div class="text-black font-bold px-4 py-2 rounded bg-white">
        <i class="fa-solid fa-building-columns mr-3 text-green-600"></i> Private <br/>
        <span class="text-xs font-semibold">University Type</span>
    </div>
    <div class="text-black font-bold px-4 py-2 rounded bg-white">
        <i class="fa-solid fa-ranking-star mr-2 text-green-600"></i>3 <br/>
        <span class="text-xs font-semibold">US News National rank: 3</span>
    </div>
    <div class="text-black font-bold px-4 py-2 rounded bg-white">
        <i class="fa-solid fa-ranking-star mr-2 text-green-600"></i>$84,000 <br/>
        <span class="text-xs font-semibold">Average living Expenses</span>
    </div>
</div>

              <p>
                <span class="dark">Harvard University</span> is a private Ivy League research university in <span class="dark">Cambridge, Massachusetts.</span> Founded in <span class="dark">1636</span> as Harvard College, it is the oldest institution of higher learning in the United States and among the most prestigious in the world. Harvard University has an enrollment of <span class="dark">23,000+ students</span> and a <span class="dark">student-to-faculty ratio of 7:1.</span> Harvard's four-year graduation rate is 87%, and its first-year retention rate is <span class="dark">96%.</span>
              </p>
              <h1 class="text-bold mt-5 text-xl">
                What is The Acceptance Rate of hardVard University  ?             </h1>
                <p class="mt-4">harvard University acceptance rate is just 4% making it one of the most selective universities in the world.</p>
                <p class="mt-4">harvard University acceptance rate is just 4% making it one of the most selective universities in the world.</p>
            </div>
          </div>



          <div className="w-1/4 space-y-4 ">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-bold mb-2">Photos & Videos</h3>
              <div className="aspect-w-16 aspect-h-9">
              <video controls muted loop width="640" height="360">
        <source src="reading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
              </div>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <p>Address: 3 Oxford St, Cambridge, MA 02138, USA</p>
              <p>Email: internationaloffice@harvard.edu</p>
            </div>
          </div>

        </div>
      </div>
      
    );
  }
  