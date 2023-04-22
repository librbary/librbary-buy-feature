import RelatedProducts from "./RelatedProduct";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { BsTagsFill } from "react-icons/bs";
import Img from "../assets/img/book11.jpeg";

const ProductDetail = () => {
  return (
    <>
      <div className="my-5 md:my-20 ">
        <div className="w-[36rem] m-auto md:w-[80rem]">
          <div className="flex flex-col md:flex-row">
            <div className="w-[25rem] md:w-[45rem] md:h-[42rem] bg-slate-900">
              <img src={Img} className="w-full h-auto block" />
            </div>
            <div className="w-full flex flex-col pt-5 md:p-9">
              <span className="text-xl mb-5 md:text-3xl text-orange-500 font-bold">
                The Windup Girl
              </span>
              <span className="text-xl mb-5 text-primary-500">&#8377;234</span>
              <span className="text-sm mb-5 text-gray-600 md:text-base">
                The Windup Girl is a biopunk science fiction novel by American
                writer Paolo Bacigalupi. It was his debut novel and was
                published by Night Shade Books on September 1, 2009. The novel
                is set in a future Thailand and covers a number of contemporary
                issues such as global warming and biotechnology. The Windup Girl
                is a biopunk science fiction novel by American writer Paolo
                Bacigalupi. It was his debut novel and was published by Night
                Shade Books on September 1, 2009. The novel is set in a future
                Thailand and covers a number of contemporary issues such as
                global warming and biotechnology. The Windup Girl is a biopunk
                science fiction novel by American writer Paolo Bacigalupi. It
                was his debut novel and was published by Night Shade Books on
                September 1, 2009. The novel is set in a future Thailand and
                covers a number of contemporary issues such as global warming
                and biotechnology. The Windup Girl is a biopunk science fiction
                novel by American writer Paolo Bacigalupi. It was his debut
                novel and was published by Night Shade Books on September 1,
                2009. The novel is set in a future Thailand and covers a number
                of contemporary issues such as global warming and biotechnology.
              </span>

              <div className="flex flex-col mt-8 md:flex-row gap-5">
                <div className="flex w-fit border-solid border-[2px] border-slate-200 mr-3 h-12">
                  <span className="text-lg w-10 flex items-center justify-center cursor-pointer text-gray-400 border-r-2">
                    -
                  </span>
                  <span className="text-lg w-10 flex items-center justify-center cursor-pointer text-gray-400">
                    6
                  </span>
                  <span className="text-lg w-10 flex items-center justify-center cursor-pointer text-gray-400 border-l-2">
                    +
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-3 mt-10 md:mt-0">
                  <button className="border-0 h-[50px] w-[180px] flex items-center justify-center cursor-pointer text-base text-white bg-secondary-400 hover:bg-secondary-500 border-b-4 border-b-secondary-500 flex-grow md:flex-grow-[unset]">
                    <FaCartPlus size={20} className="mr-3" />
                    BUY
                  </button>
                  <button className="border-0 h-[50px] w-[180px] flex items-center justify-center cursor-pointer text-base text-white bg-secondary-400 hover:bg-secondary-500 border-b-4 border-b-secondary-500 flex-grow md:flex-grow-[unset]">
                    <FaCartPlus size={20} className="mr-3" />
                    RENT
                  </button>
                  <button className="border-0 h-[50px] w-[180px] flex items-center justify-center cursor-pointer text-base text-white bg-secondary-400 hover:bg-secondary-500 border-b-4 border-b-secondary-500 flex-grow md:flex-grow-[unset]">
                    <FaCartPlus size={20} className="mr-3" />
                    BARTER
                  </button>
                </div>
              </div>

              <span className="mt-5 h-[1px] w-full bg-slate-300" />
              <div className="info-item">
                <span className="flex items-center justify-start text-lg font-medium text-gray-900 mt-5 mb-5">
                  <BsTagsFill />{" "}
                  <span className="px-2 text-base font-normal cursor-pointer text-slate-500">
                    Romantic
                  </span>
                </span>
                <span className="flex items-center justify-start text-lg font-medium mb-5">
                  <FaShareAlt className="text-gray-900" />
                  <span className="px-2 flex items-center justify-start gap-4 text-slate-500">
                    <FaFacebookF
                      size={16}
                      className="hover:text-facebook cursor-pointer"
                    />
                    <FaWhatsapp
                      size={16}
                      className="hover:text-whatsapp cursor-pointer"
                    />
                    <FaTwitter
                      size={16}
                      className="hover:text-twitter cursor-pointer"
                    />
                    <FaInstagram
                      size={16}
                      className="hover:text-instagram cursor-pointer"
                    />
                    <FaLinkedinIn
                      size={16}
                      className="hover:text-linkedIn cursor-pointer"
                    />
                    <FaPinterest
                      size={16}
                      className="hover:text-pintrest cursor-pointer"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          <RelatedProducts />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
