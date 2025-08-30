import React from 'react';
import Hero from '../components/Home/Hero';
import Mission from '../components/Home/Mission';
import FeaturedArtist from '../components/Home/FeaturedArtist';

export default function Home() {
  return (
    <div className="flex flex-col items-center  gap-5">
      <Hero />
      <Mission />
      <FeaturedArtist />
    </div>
  );
}
