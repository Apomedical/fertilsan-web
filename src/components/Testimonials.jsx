import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import vegan from "/src/assets/vegan.png";
import lactose from "/src/assets/lactose.png";
import nopers from "/src/assets/nopers.png";
import gluten from "/src/assets/gluten.png";
import noanimal from "/src/assets/noanimal.png";

import fillers from "/src/assets/fillers.png";
import glutenf from "/src/assets/glutenf.png";
import nopersf from "/src/assets/nopersf.png";
import sugar from "/src/assets/sugar.png";
import lactosef from "/src/assets/lactosef.png";

import gelatin from "/src/assets/gelatin.png";
import animalo from "/src/assets/animalo.png";
import flavours from "/src/assets/flavours.png";
import vegano from "/src/assets/vegano.png";
import gluteno from "/src/assets/gluteno.png";



// import { vegan, lactose, nopers, gluten, noanimal } from "../assets"
// import { fillers, glutenf, nopersf, sugar, lactosef } from "../assets"



const Testimonials = () => (
  <section id="product" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-gradient `}>
        Kvalitete Fertilsana
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Kvalitete amitamin® fertilsan M i Fertil F i Ovarifert
        </p>
      </div>
    </div>

    <h4 className={`${styles.heading4} text-gradient font-quality `}>
    Kvalitete amitamin® fertilsan M (oba, kapsule i u prahu za piće) 
      </h4>
      <br></br>
    <div className="flex justify-center w-full feedback-container relative z-[1]">
      <img src={vegan} alt="Picture 1" className="mx-4 sm:mx-4"  />
      <img src={lactose} alt="Picture 2" className="mx-4 sm:mx-4" />
      <img src={nopers} alt="Picture 3" className="mx-4 sm:mx-4" />
      <img src={gluten} alt="Picture 4" className="mx-4 sm:mx-4" />
      <img src={noanimal} alt="Picture 5" className="mx-4 sm:mx-4" />
    </div>
    <br>
    </br>

    <h4 className={`${styles.heading4} text-gradient font-quality `}>
    Kvalitete amitamin® fertilsan F za žene
      </h4>
      <br></br>
    <div className="flex justify-center w-full feedback-container relative z-[1]">
      <img src={fillers} alt="Picture 1" className="mx-4" />
      <img src={glutenf} alt="Picture 2" className="mx-4" />
      <img src={nopersf} alt="Picture 3" className="mx-4" />
      <img src={sugar} alt="Picture 4" className="mx-4" />
      <img src={lactosef} alt="Picture 5" className="mx-4" />
    </div>
    <br>
    </br>

    <h4 className={`${styles.heading4} text-gradient font-quality `}>
    Kvalitete amitamin® fertilsan Ovarifert za žene
      </h4>
      <br></br>
    <div className="flex justify-center w-full feedback-container relative z-[1]">
      <img src={gelatin} alt="Picture 1" className="mx-4" />
      <img src={animalo} alt="Picture 2" className="mx-4" />
      <img src={flavours} alt="Picture 3" className="mx-4" />
      <img src={vegano} alt="Picture 4" className="mx-4" />
      <img src={gluteno} alt="Picture 5" className="mx-4" />
    </div>
  </section>
);

export default Testimonials;
