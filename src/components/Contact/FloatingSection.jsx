

// components/FloatingSection.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingSection = () => {
  const sectionRef = useRef(null);
  const headingsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    // GSAP Animation for each paragraph
    headingsRef.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        { opacity: 0, x: 100 }, // Start position: off-screen to the right
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%', // Trigger animation when the element is near the viewport
            end: 'top 20%', // Reverse animation when scrolling out of view
            scrub: true,
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative lg:flex lg:items-start lg:justify-between lg:py-16 py-10  px-4 sm:px-6 md:px-8 lg:px-24 bg-gray-50   "
    >
      {/* Left Heading Section */}
      <div className="mb-10 lg:mb-0 lg:sticky lg:top-16  lg:w-1/2  relative ">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mt-5 sm:mt-14 md:mt-3 lg:mt-28"
          style={{ lineHeight: '1.2' }}
        >
            What to expect <br /> Fourth base on <br />a first date?
          {/* We develop <br /> brands<br />from strategy <br /> to immersive <br /> experience. */}
        </h1>
      </div>

      {/* Right Floating Text Section */}
      <div className="lg:ml-auto lg:w-1/2 space-y-8 sm:space-y-10 relative   ">
        {[
          {
            number: '01',
            title: 'Send us a message',
            text: 'This is like our first date, and we appreciate you are taking first step.',
          },
          {
            number: '02',
            title: 'We will get back to you soon',
            text: 'We have elves helping out with correspondence, so we usually respond to inquiries very fast. Unless, you know, the elves are busy.',
          },
          {
            number: '03',
            title: 'Meet and proposal',
            text: 'We meet. We scope. We issue a proposal. We negotiate. We discuss. We agree. We start. Simple.',
          },
          {
            number: '04',
            title: 'Let’s collaborate!',
            text: 'I think this is the beginning of a beautiful friendship. We, too, believe the best is  yet to come.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row mt-5  "
            ref={(el) => (headingsRef.current[index] = el)}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mr-0 sm:mr-4 md:mr-6">
              {item.number}
            </h2>
            <div >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-3">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingSection;