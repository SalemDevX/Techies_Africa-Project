import { FiMessageCircle } from "react-icons/fi";

const Attention = () => {
  return (
    <div className="bg-dark">
      <div className=" max-w-[90%] py-7 mx-auto mb-10 xl:mb-0 xl:py- items-center h-full text-white">
        <h2 className=" text-4xl mb-3">Attention Tech Enthusiasts!</h2>
        <p className="mb-10 text-justify">
          If you’d like to showcase your projects on our platform, we’d love to
          hear from you. Please reach out to us to get started.
        </p>
        <div className="">
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

export default Attention;
