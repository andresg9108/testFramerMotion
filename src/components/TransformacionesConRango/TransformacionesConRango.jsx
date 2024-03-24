import { 
	motion, 
	useMotionValue, 
	useTransform 
} from "framer-motion"

const TransformacionesConRango = () => {
	const x = useMotionValue(0)
	const input = [-200, 0, 200] // Rango de X
	const output = [0.5, 1, 0.5] // Rango de opacity al cambiar X

	const opacity = useTransform(x, input, output)
	const backgroundColor = useTransform(x, input, ['#ff0000', '#008800', '#5050ff'])

	return(
		<motion.div className="contenedorSimple">
			<motion.div 
				className="divSimple" 
				drag="x" 
				style={{ 
					x, 
					opacity, 
					backgroundColor 
				}} 
			/>
		</motion.div>
	)
}

export default TransformacionesConRango