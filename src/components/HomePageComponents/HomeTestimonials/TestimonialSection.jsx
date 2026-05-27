import { testimonialsData } from "./TestimonialsData";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../ReusableComponents/Button";
import { useEffect, useState } from "react";
import { assets_manager } from "../../../assets/assets_manager";

const Slider = SlickSlider?.default || SlickSlider;

const ArrowButton = ({ className, style, onClick, direction }) => (
  <button
    type="button"
    className={`${className} flex! items-center! justify-center! w-8! h-8! rounded-full! bg-(--color-brand-primary)/70! opacity-100! hover:bg-(--color-brand-primary)! transition-colors! duration-200! before:hidden! z-10! shadow-md!`}
    style={{ ...style }}
    onClick={onClick}
    aria-label={
      direction === "next" ? "Next testimonial" : "Previous testimonial"
    }
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="w-5 h-5 text-white"
    >
      {direction === "next" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
      )}
    </svg>
  </button>
);

const TestimonialSection = () => {
  const getInitials = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const getSlidesToShow = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow); // save mobile-first default

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow, // default: large screen
    slidesToScroll: 1,
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
    responsive: [
      {
        breakpoint: 1024, // below 1024px -> medium screen
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // below 640px -> small screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="Testimonials"
      className="w-full bg-(--color-bg-warm2) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-10 px-4 sm:px-6 lg:px-12">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-5xl mb-2" >
          Hear From Our Clients
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Real experiences shared by our happy clients on Google.
        </p>

        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className="px-2 sm:px-3 h-full">
              <article className="flex flex-col bg-white border border-gray-200 min-h-105 sm:min-h-115 w-full max-w-117.5 mx-auto p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-(--color-brand-primary)/10 text-(--color-brand-primary) font-semibold text-sm">
                      {getInitials(item.name)}
                    </div>

                    <div>
                      <p className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Google review
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0" aria-label="5 star rating">
                    {/* <span className="text-[#4285F4] font-bold text-lg leading-none">G</span> */}
                    <img className="h-10" src={assets_manager.google_logo} alt="" />
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4" aria-hidden="true">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-[#FABB05]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="flex-1">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    “{item.review}”
                  </p>
                </blockquote>
              </article>
            </div>
          ))}
        </Slider>

        <div className="mt-12 pb-4 items-center text-center">
          <Button
            title="See All Reviews"
            link="https://www.google.com/maps/place/Homes+for+Sapiens/@50.1144502,11.6330359,11z/data=!4m8!3m7!1s0x6d26c96f6f885007:0x40a4c139174f09ba!8m2!3d47.73855!4d12.5088275!9m1!1b1!16s%2Fg%2F11y8hymp8q?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
