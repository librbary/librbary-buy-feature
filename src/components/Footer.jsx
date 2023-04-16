import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-primary-100 py-10 w-screen">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} className="w-[10rem]" />
            <p className="my-5">
              Are you a book worm?! Then you are landed in correct place! <br />
              It's an all-in-one place where you can spend some time with your
              favourite books.
            </p>
            <p>© liBRBary All Rights Reserved.</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Features</h4>
            <p className="my-5">Buy</p>
            <p className="my-5">Rentals</p>
            <p className="my-5">Barter</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Any Queries?</h4>
            <p className="my-5">
              In case of any queries, please write to{" "}
              <em>
                <a href="mailto:librbary.support@gmail.com">
                  librbary.support@gmail.com
                </a>{" "}
              </em>
            </p>
            <p>Uttarakhand, India</p>
            <p>263139</p>
            <p>+91 9761760261</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
