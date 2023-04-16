import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../assets/img/emptyShelf.png";

const RequestBook = () => {

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

    const {
      register,
      trigger,
      formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault();
      }
    };


  return (
    <>
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div>
          {/* HEADER */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="basis-3/5 font-montserrat text-[1.875rem] font-bold">
              <p className=" tracking-wide text-gray-500">
                <span className="text-orange-600">
                  REQUEST
                </span>{" "}
                FOR A BOOK TO READ!
              </p>
            </h1>
            <p className="my-5">
              If you are here that means you are looking for some book which is
              not availbale at your location or will not be provided by any
              public libraries and sellers. <br />
              Don't worry! We are here to help you. Drop a message to us
              regarding which book you are looking for, and we'll definitely
              reach out to you with your favourite book as soon as possible.
            </p>
          </motion.div>

          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/fdf6b36c5a3b3f9642eba23308ba844b"
                method="POST"
              >
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="TELL US ABOUT WHICH BOOK YOU ARE LOOKING FOR..."
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>

            <motion.div
              className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img
                  className="w-full rounded-xl"
                  alt="contact-us-page-graphic"
                  src={ContactUsPageGraphic}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default RequestBook;
