import { motion } from 'framer-motion';
import classes from './Hero.module.scss';
import Img from './img.jpg';

const textAnimationright = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { duration: 2}, 
  }),
}

const textAnimationleft = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { duration: 2}, 
    }),
  }

  const textAnimationup = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 1.2, duration: 1.2}, 
    }),
  }

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true}}
      className={`${classes.hero} container-fluid g-0`}
    >
     

      <article className={classes.container__hero__title} >
        <motion.div custom={1} variants={textAnimationright} className={classes.title__ft}>Technology</motion.div>
        <motion.div custom={1} variants={textAnimationright} className={classes.title__sd}> +</motion.div>
      </article>
      
      <article className={classes.container__hero__news}>
        <motion.div custom={2} variants={textAnimationup} className={classes.container__hero__img}>
          <img src={Img} alt="hero" className={classes.img} />
          <div className={classes.blog}>On the blog</div>
          <div className={classes.blog__title}>Luxury e-Commerce</div>
        </motion.div>
        <motion.div custom={1} variants={textAnimationleft} className={classes.title__td}>Creativity</motion.div>
      </article>

      <article className={classes.container__hero__usp}>
        <motion.div custom={2} variants={textAnimationup}className={`${classes.container__hero__roundbtn}`}>
          <div>&#9660;</div>
        </motion.div>
        <motion.h1 custom={2} variants={textAnimationup} className={classes.title__fh}>Get the edge with innovative product development, high-end web design, and effective development.</motion.h1>
      </article>
      
    </motion.section>
  )
}

export { Hero };