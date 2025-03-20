"use client";

const galleryItems = [
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/c0Q0VWiXUAc?playsinline=1",
    alt: "סרטון YouTube 1",
    category: "עוד",
    description: "",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/FmJhoWHYlx4?playsinline=1",
    alt: "סרטון YouTube 2",
    category: "עוד",
    description: "",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/uIwmZeqrpMk?playsinline=1",
    alt: "סרטון YouTube 3",
    category: "עוד",
    description: "",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/hR53FUOw0AI?playsinline=1",
    alt: "סרטון YouTube 4",
    category: "עוד",
    description: "",
  },
];

const HomeYouTubeSection = () => {
  const youtubeVideos = galleryItems.filter((item) => item.type === "youtube");
  const displayVideos = youtubeVideos.slice(0, 3);

  return (
    <section className="my-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        סרטונים
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayVideos.map((video, index) => (
          <div
            key={index}
            className="relative pb-[56.25%] bg-black rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <iframe
              src={video.src}
              title={video.alt}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeYouTubeSection;
