import { motion } from "framer-motion";
import { fadeIn } from "./motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  content,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.2, 0.75)}
    className={`relative overflow-hidden ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[150px] h-[700px] lg:h-[400px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => {
      console.log(id);
      handleClick(id);
    }}
  >
    <img
      src={imgUrl}
      alt="theme"
      className="absolute w-full h-full object-cover rounded-[24px] opacity-60"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-gray-100 absolute z-0 lg:bottom-10 text-center lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-4 md:p-6 3xl:p-10 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] h-full">
        <p className="font-normal text-sm md:text-base 3xl:text-xl leading-[20.16px] text-white">
          {content}
        </p>
        <h2 className="mt-4 font-semibold text-lg md:text-2xl text-white absolute bottom-10">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
