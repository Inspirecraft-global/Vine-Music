import React from 'react';
import vector from '../../assets/Images/vtb.png';
import CEO from '../../assets/Images/ceo.png';

export default function AboutCEO() {
  return (
    <div className="bg-black px-4 lg:px-[126px]  pt-[86px]">
      <div className="flex flex-col justify-center items-center md:flex-row gap-6 ">
        <img src={CEO} alt="vector" className="h-[500px] object-cover" />

        <div className=" text-white px-2 py-10 md:p-10">
          <h3 className=" text-3xl md:text-4xl font-extrabold text-white ">
            About Dr. Samuel Oyefeso{' '}
          </h3>
          <p className="text-lg md:text-xl mt-3 ">
            Dr. Samuel Oyefeso is the CEO of Vine Music where soul meets sound,
            and purpose meets artistry. Every lyric is a lifeline and every
            melody is a message. Music heals wound, rekindles faith, and refines
            love and this has been his vision.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={vector} alt="vector" className="-mt-20 object-cover" />
      </div>
    </div>
  );
}
