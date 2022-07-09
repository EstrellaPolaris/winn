import React, {useState} from 'react'
import { motion } from 'framer-motion';
import  './Solutions.scss';

const textAnimationup = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1, duration: 1 }, 
  }),
}

const dataCollection = [
  {
    title: 'Landing pages',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Corporate portals',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'E-Commerce',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Marketplaces',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Intranet solutions',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Product development',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Communication Design',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'UX and UI design',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Communication Design',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Brand strategy',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Corporate identity design',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  },
  {
    title: 'Marketing and advertising',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias sint cupiditate repellendus eum tempore fugit placeat sed alias perspiciatis ratione quod eligendi suscipit itaque, unde, esse earum. Iusto, vel dignissimos'
  }
];

function Solutions() {
  const [solution, setActiveSolution] = useState(-1);
  function toggleSolution(index){
    if(index === solution){
      setActiveSolution(-1);
      return;
    }
    setActiveSolution(index);
  }
  return (
    <motion.section 
    viewport={{ amount: 0.1, once: true}}
    className="container__solutions">
    <div className="solutions__block"> 
      {dataCollection.map((item, index) =>
        <div key={index} onClick={()=> toggleSolution(index)}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true}}
            custom={1} variants={textAnimationup} className="solutions__title">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true}}
            custom={1} variants={textAnimationup} className="solutions__heading">
            <h2 className={solution === index ? "active" : ""}>{item.title}</h2>
          </motion.div>
          
          {solution === index ? (
            <>
              {" "}
              <span className="solutions__vert">-</span>
              </>
            ) : (
            <>
              {" "}
              <span className="solutions__vert">+</span>
            </>
            ) }
          </motion.div>
          <div className="container__solutions__content">
            <h4 className={solution ===  index ? "active" : "inactive"}>
              <div className="solutions__content">
              {item.content}
              </div>
            </h4>
          </div>

    </div>

    )}
    </div>
    </motion.section>
  )
}

export { Solutions };