import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div className="flex flex-col  bg-black md:text-left pb-[5rem] justify-center  lg:flex-row items-center text-white text-center">
        <div className="flex flex-col sm:flex-col pt-3  items-center ">
          <div className=" p-4 sm:pt-9 flex flex-col gap-2 ">
            <span className="text-white text-center lg:text-left  font-bold text-2xl">
              Xclusive
            </span>
            <h1>Subscribe</h1>
            <h2>Get 10% off your first order</h2>
            <div className="flex flex-row bg-black border-white border-[1px] px-8 sm:px-4 py-2  rounded-md">
              <input
                type="text"
                className="bg-black  sm:px-1
                tetx-slate-600 text-sm rounded-md outline-none"
                placeholder="Your email address"
              />
              <Image
                src={"/Assets/Icons/share.svg"}
                width={20}
                height={20}
                alt="share icon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-items-start gap-4 ">
          <div>
            <h1 className="text-white font-semibold text-xl">Support</h1>
            <div className="text-Silver font-normal text-sm  flex flex-col gap-2">
              <h2>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h2>
              <h2>xclusive@mail.com</h2>
              <h2>+88015-88888-9999</h2>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl">Account</h1>
            <div className="text-Silver font-normal text-sm  flex flex-col gap-2">
              <h2>My Account</h2>
              <h2>Login / Register</h2>
              <h2>Cart</h2>
              <h2>Wishlist</h2>
              <h2>Shop</h2>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl">Quick Link</h1>
            <div className="text-Silver font-normal text-sm  flex flex-col gap-2">
              <h2>Privacy Policy</h2>
              <h2>Terms Of Use</h2>
              <h2>FAQ</h2>
              <h2>Contact</h2>
            </div>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl">Download App</h1>
            <h2>Save $3 with App New User Only</h2>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={"/Assets/Images/qrcode.svg"}
                alt="qrcode"
                width={60}
                height={60}
              />
              <div className="flex flex-col gap-2">
                <Image
                  src={"/Assets/Images/googleplay.svg"}
                  alt="googleplay"
                  width={80}
                  height={80}
                />
                <Image
                  src={"/Assets/Images/googleplay.svg"}
                  alt="googleplay"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-Silver text-center lg:text-left ">
          Copyright © 2020 Nexcent ltd. All rights reserved
        </h4>
      </div>
    </div>
  );
}
