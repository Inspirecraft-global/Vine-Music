import React from 'react';
import Cover1 from '../../assets/Images/media.png';
import Cover2 from '../../assets/Images/music.png';
import Cover3 from '../../assets/Images/Anemo.png';

const releases = [
  {
    id: 'love-and-light-1',
    artist: 'Lafred John',
    title: 'Love&Light',
    cover: Cover1,
  },
  {
    id: 'love-and-light-2',
    artist: 'Lafred John',
    title: 'Love&Light',
    cover: Cover2,
  },
  {
    id: 'love-and-light-3',
    artist: 'Lafred John',
    title: 'Love&Light',
    cover: Cover3,
  },
];

export default function ReleaseDetails() {
  return (
    <div className="aboutus px-4 lg:px-24 py-10 font-lato">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        {releases.map((r, idx) => {
          const isImageLeft = idx % 2 === 0; // alternate layout
          return (
            <div key={r.id} className="w-full">
              {/* row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                  />
                ) : (
                  <div className="flex flex-col justify-center px-2">
                    <h3 className="text-white text-xl md:text-2xl font-bold">{r.artist}</h3>
                    <p className="text-white/80 mt-2">{r.title}</p>
                  </div>
                )}

                {!isImageLeft ? (
                  <img
                    src={r.cover}
                    alt={r.title}
                    className="w-full h-[200px] md:h-[240px] lg:h-[280px] object-cover rounded"
                  />
                ) : (
                  <div className="flex flex-col justify-center px-2">
                    <h3 className="text-white text-xl md:text-2xl font-bold">{r.artist}</h3>
                    <p className="text-white/80 mt-2">{r.title}</p>
                  </div>
                )}
              </div>

              {/* divider */}
              <div className="mt-6 border-t border-white/10" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
