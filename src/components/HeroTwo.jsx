import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import { tabletePrah } from "../assets";

const HeroTwo = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={tabletePrah}
          alt="billing"
          className="w-[85%] h-[93%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[30%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[1px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Suplementi</span> za{" "}
            <span className="text-white">Buduće</span> Očeve
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Fertilsan M</span>{" "}
          </h1>
          <span className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">U prahu</span>{" "}
          <div className="ss:flex hidden md:mr-6 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
          Amitamin® fertilsan M je dodatak prehrani namijenjen za muškarce sa
          problemima plodnosti. Za normalan, zdrav razvoj spermatozoida
          organizmu je potrebno adekvatno snadbijevanje različitim vitaminima i
          mineralima. Amitamin® fertilsan M sadrži vitamin D, folnu kiselinu,
          vitamin A, cink i selen. Uzimanje amitamin® fertilsan M može
          pospiješiti zdrav razvoj spermatozoida.
        </p>
      </div>
    </section>
  );
};

export default HeroTwo;
