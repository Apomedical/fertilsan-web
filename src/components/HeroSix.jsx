import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import { faza2 } from "../assets";
import { faza2Stats } from "../assets";
import Modal from "./Modal";

const HeroSix = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={faza2}
          alt="billing"
          className="w-[85%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[30%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[40%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <div className="flex flex-row items-center py-[1px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Suplementi</span> za{" "}
            <span className="text-white">Buduće</span> Očeve
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">fertil F faza 2</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-6 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"></h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-0`}>
          Amitamin fertil F faza 2 sadrži folnu kiselinu kao i bioaktivni folat
          Quatrefolic®. Razvijen je za posebne prehrambene potrebe žena tijekom
          trudnoće i dojenja. U ovo presudno vrijeme u životu žene, potrebe za
          unosom hranjivih sastojaka znatno su veće za većinu vitamina i
          elemenata u tragovima. Za nerođenu i dojenu bebu izuzetno je važno
          dobiti pravu količinu mikro hranjivih sastojaka od njegove majke.
        </p>
        <br></br>
        <Modal buttonText="Opširnije" imageSrc={faza2Stats} imageWidth={780} imageHeight={580} />
      </div>
    </section>
  );
};

export default HeroSix;