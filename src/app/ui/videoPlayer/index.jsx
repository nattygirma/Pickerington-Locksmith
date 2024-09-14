import Image from "next/image"

export default function VideoPlayer() {
  return (
    <div className=" video-outer-container">
    <div className="row align-items-center justify-content-center justify-content-xl-between flex-lg-row-reverse g-gs">
<div className="nk-hero-gfx position-relative">
<div className="h-100 rounded-4 video-container"><iframe src="https://player.vimeo.com/video/943287340?h=79d0c86cea&autoplay=1&loop=1&title=0&byline=0" className="vemeo-video rounded-4" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
{/* // <script src="https://player.vimeo.com/api/player.js"></script> */}
<div className="d-none d-md-block position-absolute top-0 end-100 me-5 me-lg-8 me-xl-12 mt-n3">
  <div className="media media-2xl rounded-pill mx-auto">
    <Image
      src="/images/e.jpg"
      alt="Avatar"
      width={72}
      height={72}
    />
  </div>
  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
    Software engineer
  </div>
</div>
<div className="d-none d-md-block position-absolute top-50 end-100 me-3 me-lg-4 mt-n5">
  <div className="media media-2xl rounded-pill mx-auto">
    <Image
      src="/images/b.jpg"
      alt="Avatar"
      width={72}
      height={72}
    />
  </div>
  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
    Buisness Analyst
  </div>
</div>
<div className="d-none d-md-block position-absolute top-0 start-100 ms-5 ms-lg-7 ms-xl-10 mt-n7">
  <div className="media media-2xl rounded-pill mx-auto">
    <Image
      src="/images/c.jpg"
      alt="Avatar"
      width={72}
      height={72}
    />
  </div>
  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
    Journalist
  </div>
</div>
<div className="d-none d-md-block position-absolute top-50 start-95 ms-4 ms-lg-5 mt-10">
  <div className="media media-2xl rounded-pill mx-auto">
    <Image
      src="/images/d.jpg"
      alt="Avatar"
      width={72}
      height={72}
    />
  </div>
  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
    If you are a social media infuencer,
  </div>
  <div className="badge bg-dark p-2 mt-2 fw-normal text-white text-opacity-75">
     what&apos;s you doin here?
  </div>
</div>
</div>
</div>
</div>
  )}