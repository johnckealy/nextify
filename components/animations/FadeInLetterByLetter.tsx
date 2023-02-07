import { motion } from 'framer-motion';


const FadeinLetterByLetter = ({ sentence, className }: { sentence: string, className?: string }) => {

  const chars = Array.from(sentence);

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, } // increase this value for slower animation
    })
  };

  const child = {
    visible: { opacity: 1, },
    hidden: { opacity: 0, }
  }

  return (
    <div className={className}>
      <motion.div variants={container} initial="hidden" animate="visible">
        {chars.map((char, index) => {
          return (
            <motion.span key={index} variants={child}>
              {char === "\\"
                ? <br className='md:hidden' />
                : <span>{char === " " ? "\u00A0" : char}</span>}
            </motion.span>
          )
        })}
      </motion.div>
    </div>
  );
}

export default FadeinLetterByLetter;
