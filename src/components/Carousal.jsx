import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ax1 from "../assets/img/cartImage.png";
import NewsTemplate from "./News/NewsTemplate";

export default function Carousal() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [countSlide, setCountSlide] = useState(0);
  const items = [
    {
      id: 1,
      newsTitle: "خبر اول",
      newsDesc: "1",
      newsImage: "../assets/img/cartImage.png",
    },
    {
      id: 2,
      newsTitle: "خبر دوم",
      newsDesc: "2",
      newsImage: "../assets/img/cartImage.png",
    },
    {
      id: 3,
      newsTitle: "خبر سوم",
      newsDesc: "3",
      newsImage: "../assets/img/cartImage.png",
    },
    {
      id: 4,
      newsTitle: "خبر چهارم",
      newsDesc: "3",
      newsImage: "../assets/img/cartImage.png",
    },
    {
      id: 5,
      newsTitle: "خبر پنجم",
      newsDesc: "3",
      newsImage: "../assets/img/cartImage.png",
    },
  ];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection) => {
    console.log("newDirection=", newDirection);
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex m-5">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="flex justify-center bg-white items-center rounded-xl text-[40px]"
                key={item.id}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                {/* ساختن ایتم */}
                {/* {item.id} +'m' */}
                {/* {item}  */}
                <NewsTemplate title={item.newsTitle} desc={item.newsDesc} />
                {/* <img src={ax1} alt="ax1" style={{width:'100px'}} /> */}
                {/* {item.newsTitle}
                {item.newsDesc} */}
                {/* {item.newsImage} */}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex justify-around content-center py-1 px-6 bg-gray-200 rounded-2xl border border-transparent  ">
        <motion.button
          className="bg-white ml-5  h-10 w-10 rounded-full"
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(1)}
        >
          ▶︎
        </motion.button>

        {/* //! شمارش اسلایدها */}
        {/* {countSlide}/{items.length} */}

        <motion.button
          className="bg-white mr-5 h-10 w-10 rounded-full"
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position()];
}
