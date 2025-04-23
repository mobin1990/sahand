import React, { useEffect, useRef } from "react";
import { useState } from "react";
// import anime from 'animejs';
import SignUp from "./SignUp";
//!
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "./LoginForm";

function Login() {
  const boxRef = useRef(null);
  const mainBox = useRef(null);
  

  const [isMoved, setIsMoved] = useState(false);

  const [maxTranslate, setMaxTranslate] = useState(0);

useEffect(() => {
  const box = boxRef.current;
  const box2 = mainBox.current;

  if (box && box2) {
    const screenWidth = box2.offsetWidth;
    const boxWidth = box.offsetWidth;
    setMaxTranslate(screenWidth - boxWidth);
  }
}, []); // فقط بار اول اجرا بشه

  const handleToggle = () => {
      // const box=boxRef.current;
      // const box2=mainBox.current;
    // if(!box && !box2) return;

    // const screenWidth= box2.offsetWidth;
    // const boxWidth=box.offsetWidth;
    // const maxTranslate=screenWidth - boxWidth;
    // console.log(screenWidth);
    // console.log(boxWidth);
    // console.log(maxTranslate);

    

    setIsMoved(!isMoved);
  };
 
  const boxVariants = {
    
    initial: {
      x: 0,
      clipPath: "polygon(0% 0,45% 0%,100% 100%,0% 100%)",
    },
    moved: {
      x: maxTranslate, // نصف عرض صفحع رو میگیریه و بصورت داینامیک تغییر میکنه
      clipPath: "polygon(45% 0,100% 0%,100% 100%,0% 100%)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    back: {
      x: 0,
      clipPath: [
        "polygon(0% 0,45% 0%,100% 100%,0% 100%)",
      ],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={mainBox} className="h-screen relative bg-gray-300  w-[1088px] mx-auto flex items-center justify-between px-20">
 <div>
 <AnimatePresence >
      {isMoved ? (
        <SignUp key="signup" isMoved={isMoved} onClick={handleToggle} />
      ) : (
        <>
        {/* <SignUp key="signu" isMoved={isMoved} onClick={handleToggle} /> */}
          <LoginForm key="login" isMoved={isMoved} onClick={handleToggle} />
        {/* <motion.button
        key="button"
        onClick={handleToggle}
        className="btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        حرکت باکس
      </motion.button> */}
        </>
      )}
</AnimatePresence>
 </div>
      <motion.div
      ref={boxRef}
        className="w-[60%] h-screen bg-red-800  shadow-xl absolute left-0"
        variants={boxVariants}
        initial="initial"
        animate={isMoved ? "moved" : "back"}
      />
      
    </div>
  );
}

export default Login;
