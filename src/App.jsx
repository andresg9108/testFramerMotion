import './App.sass'
// import TransformacionesConRango from './components/TransformacionesConRango/TransformacionesConRango'
import { motion } from "framer-motion"
import { useState } from 'react'




const App = () => {
	const [variant, setVariant] = useState(1)

	const myVariants = {
		v1: {
			opacity: 1,
			scale: [1, 2, 2, 1, 1],
			rotate: [0, 0, 270, 270, 0],
			borderRadius: ["20%", "20%", "50%", "50%", "20%"],
	    },
	    v2: {
	    	rotate: 180, 
	    	backgroundColor: 'red' 
	    }
	}

	return(
		<motion.div className="contenedorSimple">
			<motion.div 
				className="divSimple" 
				// x: -100, y: 50, scale: 0.8, rotate: 9 
				initial={{ opacity: 0.5, scale: 0.5 }} 
				animate={variant === 1 ? "v1" : "v2"} 
				variants={myVariants} 
				transition={{ duration: 5 }} 
				onClick={() => setVariant(prev => prev === 1 ? 2 : 1)} 
			/>
		</motion.div>
	)
}
// const App = () => <TransformacionesConRango />

export default App

/*
useAnimate() VS <motion.div />
URL: https://www.framer.com/motion/use-animate
*/