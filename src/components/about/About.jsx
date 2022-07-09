import { motion } from 'framer-motion';
import classes from './About.module.scss';

const textAnimationup = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {delay: custom * 1, duration: 2},
  }),
}

const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true}}
      className={`${classes.about} container-fluid g-0`}
    >
     

      <article className={classes.container__about} >

        <motion.div custom={1} variants={textAnimationup} className={classes.container__about__title}>
        <motion.div custom={1} variants={textAnimationup} className={classes.about__title}>We Are</motion.div>
        </motion.div>
        <motion.div custom={2} variants={textAnimationup} className={classes.container__about__subtitle}>
        <motion.div custom={2} variants={textAnimationup} className={classes.about__title__ft}>Growth is part of our DNA</motion.div>
        <motion.h2 custom={2} variants={textAnimationup} className={classes.about__title__sd}>WINN is a dynamic company native to a global technological environment</motion.h2>
        <motion.div custom={2} variants={textAnimationup} className={classes.container__about__adv}>
            <motion.div custom={2} variants={textAnimationup} className={classes.about__adv}>Industry-Specific Experience</motion.div>
            <motion.div custom={2} variants={textAnimationup} className={classes.about__adv}>Real-Time Communication</motion.div>
            <motion.div custom={2} variants={textAnimationup} className={classes.about__adv}>Scalability & Support</motion.div>
        </motion.div>
        </motion.div>
      </article>
      
      
    </motion.section>
  )
}

export { About };