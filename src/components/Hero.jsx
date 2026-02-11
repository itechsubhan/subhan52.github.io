import { motion } from "framer-motion";

import { styles } from "../styles";
import { RobotCanvas } from "./canvas";
import portfolioSettings from "../config/portfolio";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>{portfolioSettings.profile.heroGreetingName}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-3xl`}>
            {portfolioSettings.profile.heroTagline}
          </p>
          <div className='mt-6 flex flex-wrap gap-4'>
            <a
              href='#contact'
              className='bg-[#915EFF] py-3 px-6 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
            >
              {portfolioSettings.contact.ctaLabel}
            </a>
            {portfolioSettings.resume.enabled && (
              <a
                href={portfolioSettings.resume.url}
                target='_blank'
                rel='noreferrer'
                className='bg-tertiary py-3 px-6 rounded-xl outline-none text-white font-bold shadow-md shadow-primary'
              >
                {portfolioSettings.resume.buttonLabel}
              </a>
            )}
            <a
              href={portfolioSettings.profile.linkedin}
              target='_blank'
              rel='noreferrer'
              className='border border-white/40 py-3 px-6 rounded-xl outline-none text-white font-semibold'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <RobotCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
