import {Link, Outlet} from "react-router-dom";
import { motion } from 'framer-motion';
import classes from './Header.module.scss';

  const textAnimationdown = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 1, duration: 1.2}, 
    }),
  }

const Header = () => {
    return (
        <>
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true}}
      custom={2} variants={textAnimationdown}
      className={`${classes.header} d-flex flex-wrap align-items-center container-fluid justify-content-center justify-content-md-between py-3`}>
      <Link className={`${classes.header__nav} d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none`} to="/"> LOGO</Link>
      <ul className={`${classes.container__nav} nav col-12 col-md-auto mb-2 justify-content-center mb-md-0`}>
        <Link className={classes.nav__link} to="/work">Work</Link>
        <Link className={classes.nav__link} to="/services">Services</Link>
        <Link className={classes.nav__link} to="/agency">Agency</Link>
        <Link className={classes.nav__link} to="/blog">Blog</Link>
      </ul>
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-primary btnCustom">Get In Touch</button>
      </div>
    </motion.header>

    <main className="is-grid">
        <Outlet />
    </main>
    
    <footer  className="container-fluid">
    </footer>
    </>
    )
}

export {Header}