'use client';

/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
  url: string; // Add URL prop
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  url, // Destructure URL prop
}) => {
  const handleHeadsetClick = () => {
    window.location.href = url; // Redirect to the URL
  };

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-black absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {/* {title} */}
          <img
            src="/headset.svg"
            alt="headset"
            className="object-contain"
          />
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full exploreH flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent div's onClick
              handleHeadsetClick();
            }}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Explore Project
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
