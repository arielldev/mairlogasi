import React from 'react';

type Review = {
  id: number;
  name: string;
  text: string;
  avatar: string;
  backgroundImage: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: 'שם לקוח',
    text: 'טקסט',
    avatar: '/mair.jpg',
    backgroundImage: '/jerusalem1.jpg',
  },
  {
    id: 2,
    name: 'שם לקוח',
    text: 'טקסט',
    avatar: '/mair.jpg',
    backgroundImage: '/jerusalem2.jpg',
  },
  {
    id: 3,
    name: 'שם לקוח',
    text: 'טקסט',
    avatar: '/mair.jpg',
    backgroundImage: '/jerusalem.jpg',
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <div className="flex flex-col space-y-8 p-2 md:p-8 mt-22 md:mt-10" dir="rtl">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="relative rounded-xl overflow-hidden shadow-lg min-h-[400px]"
          style={{
            backgroundImage: `url(${review.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative p-6 flex flex-col items-center justify-center h-full">
            <div className="mb-4">
              <img
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
                src={review.avatar}
                alt={`${review.name} avatar`}
              />
            </div>
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-2">{review.name}</h3>
              <p className="text-xl">{review.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
