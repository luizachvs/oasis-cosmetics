import { motion } from "framer-motion";

function Product({ name, picture, altPicture, topPick }) {
  const rotateAnimation = {
    rotate: 360,
    transition: {
      duration: 5,
      ease: "linear",
      repeat: Infinity,
    },
 };
  
  return (      
    <div className='product__card'>
      {topPick ? (
        <motion.img
          initial={{ rotate: 0 }}
          animate={rotateAnimation}
          src='../../assets/imgs/top-pick.png'
          alt='top-pick-product'
          className='top__pick'
        />
        ) : null}
      <img
        src={picture}
        alt={altPicture}
        className='product__picture'
      />
      <h4>{name}</h4>
      <button type="button">add to cart</button>
    </div>
  );
}

export default Product;