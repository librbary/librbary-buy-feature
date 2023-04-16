import { motion } from "framer-motion";
import OpenLibraryImg from "../assets/img/openLibrary.png"
import BookShopImg from "../assets/img/bookShop.jpeg"
import BarterImg from "../assets/img/barter.png"


const Features = () => {
  return (
    <section id="features" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div>
        {/* GRAPHICS AND DESCRIPTION --- FOR BUY*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-[35rem] rounded-3xl drop-shadow-2xl"
            alt="features-page-graphic"
            src={BookShopImg}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="basis-3/5 font-montserrat text-[1.875rem] font-bold">
                    <p className=" tracking-wide text-gray-500">
                      WANNA <span className="text-orange-600">BUY</span> NEW
                      BOOKS ?
                    </p>
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Looking for new books to Read?? Welcome to liBRBary's{" "}
                <b className="text-primary-500">BUY</b> feature. Here you can
                check out new arrivals of each genres.
              </p>
              <p className="mb-5">
                You can add your favourite books to your shelves and buy as per
                your comfort. You can read books here before you buy it. Isn't
                that great!! <br />
                You'll get rewards for each buy and you can use those points to
                buy other new books.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* GRAPHICS AND DESCRIPTION --- FOR RENTALS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="basis-3/5 font-montserrat text-[1.875rem] font-bold">
                    <p className=" tracking-wide text-gray-500">
                      <span className="text-orange-600">RENTING</span> ISN'T A
                      BAD IDEA!!
                    </p>
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Hurray!! Your nearby Public Libraries are now available at your
                fingertips... <br />
                You can now borrow or rent any books to read from your nearby
                public libraries or you can read it here at your online desk for{" "}
                <b className="text-primary-500">FREE</b>.
              </p>
              <p className="mb-5">
                You are just one membership card away to read your favourite
                books. A wide range of books are now available in one click.{" "}
                <br />
                But DON'T forgot to return books on time...
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                  Rent Now
                </button>
              </div>
            </div>
          </div>

          {/* GRAPHIC */}
          <img
            className="mx-auto w-[35rem] rounded-3xl drop-shadow-2xl"
            alt="features-page-graphic"
            src={OpenLibraryImg}
          />
        </div>

        {/* GRAPHICS AND DESCRIPTION --- FOR BARTER */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto w-[35rem] rounded-3xl drop-shadow-2xl"
            alt="features-page-graphic"
            src={BarterImg}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="basis-3/5 font-montserrat text-[1.875rem] font-bold">
                    <p className=" tracking-wide text-gray-500">
                      BORED OF READING SAME BOOK??{" "}
                      <span className="text-orange-600">BARTER</span> NOW!
                    </p>
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Reading same book over and over and over again!! Click on{" "}
                <b className="text-primary-500">BARTER NOW!</b> <br />
                You can now exchange your old books with your friends here in
                liBRBary. And plus point is, you'll get some reward points for
                that.
              </p>
              <p className="mb-5">
                You can join differernt communities as per your choice and list
                your books on the communities and that's it! Wait for other user
                to show interest in your books and there you go!! <br /> <br />
                Thinking about frauds?! liBRBary is the{" "}
                <b className="text-primary-500">SAFEST</b> and{" "}
                <b className="text-primary-500">SECURE</b> place to reconciliate
                your identities, so no worries! and enjoy READING...
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                  Barter Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
