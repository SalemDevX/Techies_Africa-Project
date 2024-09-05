const ContactForm = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col justify-center h-full text-dark">
          <h6 className="font-semibold text-2xl xl:pt-10 pt-7 text-[#5846FB] mb-4">
            Reach out to us
          </h6>
          <h1 className="text-5xl xl:text-[70px] font-semibold mb-4">
            Have an idea? Let’s talk.
          </h1>
          <p className="mb-11 text-xl xl:text-base font-semibold text-[#000000]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xl font-bold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Alex Tolu"
                className="mt-1 block w-full px-3 py-2 border border-[#DAE0E6] rounded-md shadow-sm focus:outline-none focus:ring-[#DAE0E6]focus:border-dark"
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. alextolu@gmail.com"
                className="mt-1 block w-full px-3 py-2 border border-[#DAE0E6] rounded-md shadow-sm focus:outline-none focus:ring-[#DAE0E6]focus:border-dark"
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+000"
                className="mt-1 block w-full px-3 py-2 border border-[#DAE0E6] rounded-md shadow-sm focus:outline-none focus:ring-[#DAE0E6] focus:border-dark"
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                placeholder="Input"
                className="mt-1 block w-full px-3 py-2 border border-[#DAE0E6] rounded-md shadow-sm focus:outline-none focus:ring-[#DAE0E6] focus:border-dark"
              />
            </div>
          </div>

          <div>
            <label className="block text-xl font-bold text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Enter your message..."
              className="mt-1 block w-full px-3 py-2 border border-[#DAE0E6]  rounded-md shadow-sm focus:outline-none focus:ring-[#DAE0E6] focus:border-dark "
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-20 mb-10 py-3 text-white font-semibold rounded-3xl"
              style={{
                background: "linear-gradient(90deg, #D929E5 0%, #3D68FB 100%)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
