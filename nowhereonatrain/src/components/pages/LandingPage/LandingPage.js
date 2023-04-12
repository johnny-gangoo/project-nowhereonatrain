import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import MissionStatement from "./section1MissionStatement";

const LandingPage = () => {
  useEffect(() => {
    gsap.registerPlugin(Observer, ScrollTrigger, ScrollToPlugin);
    const sections = document.querySelectorAll("section");
    const images = document.querySelectorAll(".bg");
    const outerWrappers = gsap.utils.toArray(".outer");
    const innerWrappers = gsap.utils.toArray(".inner");
    let clamp = gsap.utils.clamp(0, sections.length - 1);
    let animating = false,
      currentIndex = -1;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    const dots = document.querySelectorAll(".scroll-indicator a");
    const removeActiveClass = () => {
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
    };

    function gotoSection(index, direction) {
      index = clamp(index); // make sure it's valid

      // If they are the same, it's either the first or last slide
      if (index === currentIndex) {
        return;
      }

      let currentSelection = document.querySelector(
        `.scroll-indicator a[href='#${sections[index].id}']`
      );

      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: {
            duration: 1.0,
            ease: "power1.inOut",
            overflow: "hidden",
          },
          onComplete: () => (animating = false),
        });

      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      if (index > 0 && currentIndex === 0) {
        gsap.fromTo(
          "#test",
          { height: "215px", marginTop: "70px" },
          { height: "100px", marginTop: "20px", duration: 1.2 }
        );
      }

      if (currentIndex > 0 && index === 0) {
        gsap.fromTo(
          "#test",
          { height: "100px", marginTop: "20px" },
          { height: "215px", marginTop: "70px", duration: 1.2 }
        );
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

      currentIndex = index;
      removeActiveClass();
      currentSelection.classList.add("active");
      return tl;
    }

    Observer.create({
      type: "wheel,touch,scroll,pointer",
      wheelSpeed: -1,
      onDown: () => {
        console.log("Down");
        if (!animating) gotoSection(currentIndex - 1, -1);
      },
      onUp: (e) => {
        console.log("Up");
        if (!animating) {
          gotoSection(currentIndex + 1, 1);
        }
      },
      onDrag: () => {
        console.log("Dragged");
      },
      tolerance: 10,
      preventDefault: true,
    });

    gsap.utils.toArray(".scroll-indicator a").forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        if (i > currentIndex) {
          !animating && gotoSection(i, 1);
        } else if (i < currentIndex) {
          !animating && gotoSection(i, -1);
        }
      });
    });
    gotoSection(0, 1).progress(1);
  }, []);

  return (
    <div>
      <div className="scroll-indicator">
        <a
          href="#missionStatement"
          className="active"
          data-section="Mission Statement"
        ></a>
      </div>
      <MissionStatement />
    </div>
  );
};

export default LandingPage;
