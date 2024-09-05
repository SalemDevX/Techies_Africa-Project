import { FiMessageCircle } from "react-icons/fi";

const Sponsor = () => {
  return (
    <div className="bg-dark ">
      <div className=" max-w-[90%] py-7 mx-auto mb-10 xl:mb-0 xl:py- items-center h-full text-white">
        <h6 className="font-semibold text-2xl lg:mt-5 text-[#5846FB] mb-4">
          For sponsorship and Partnership
        </h6>
        <h2 className="text-5xl lg:text-6xl lg:mr-96 mb-4">
          Interested in Sponsoring or Partnering with Us?
        </h2>
        <p className="mb-10 lg:mr-96  text-base">
          We’d love to explore collaboration opportunities with you! If you’re
          interested in sponsoring Techies Africa’s events or partnering with
          us, please send us a direct message. We look forward to discussing how
          we can work together to advance the tech community.
        </p>
        <div className="mb-5">
          <button
            className="flex items-center justify-center space-x-2 text-white  px-8 py-3 rounded-3xl"
            style={{
              background: "linear-gradient(90deg, #D929E5 0%, #3D68FB 100%)",
            }}
          >
            <FiMessageCircle size={20} />
            <span>Drop us a Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
