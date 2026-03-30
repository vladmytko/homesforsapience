import { testimonialsData } from "./TestimonialsData";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../ReusableComponents/Button";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowButton direction="prev" />,
    nextArrow: <ArrowButton direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
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
      <div className="max-w-7xl mx-auto py-12 sm:py-10 px-10 lg:px-12">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl mb-10 ">
          Hear From Our Clients
        </h2>

        <Slider {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className="px-3 h-full">
              <div className="flex flex-col bg-(--color-bg-warm2) justify-between border-2 border-(--color-brand-primary) flex-1 min-h-120 max-h-120 w-full max-w-117.5 mx-auto lg:px-7 p-6 rounded-2xl shadow-sm">
                <div className="flex-1">
                  <div className="flex items-center">
                    {/* <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={item.image}
                          alt=""
                        /> */}
                    <div className="ml-1">
                      <p className="text-xl font-medium text-gray-900">
                        {item.name}
                      </p>
                      {/* <p className="mt-0.5 text-sm font-pj text-gray-600">
                            {item.date}
                          </p> */}
                    </div>
                  </div>

                  <div className="flex items-center mt-2">
                    <svg
                      className="w-7 h-7 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-7 h-7 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-7 h-7 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-7 h-7 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-7 h-7 text-[#FDB241]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <blockquote className="flex-1 mt-3 overflow-hidden">
                    <p className="text-lg leading-relaxed text-gray-900 font-pj">
                      "{item.review}"
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-16 pb-4 items-center text-center">
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
