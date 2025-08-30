import Navbar from '../../common/Navbar';
import HeroString from '../../assets/Images/artis.png';

export default function ArtistHero() {
  return (
    <div className="bg-black h-full w-full ">
      <div className="w-full px-2 lg:px-24 pt-12">
        <Navbar />
      </div>
      <div className=" w-full h-[600px] flex justify-center items-center pt-10">
        <img
          src={HeroString}
          alt="Hero Background"
          className="w-full object-cover h-full pb-20 "
        />
      </div>
    </div>
  );
}
