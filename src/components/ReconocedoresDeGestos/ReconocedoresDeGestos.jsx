import { motion } from "framer-motion"

const ReconocedoresDeGestos = () => (
	<motion.div className="contenedorSimple">
		<motion.div
			className="divSimple" 
			whileHover={{ scale: 1.2 }} // Hover
			whileTap={{ scale: 0.5 }} // Tocar y Tocar sostenido
			drag="x" // Desplazar: drag; drag="x"; drag="y"
			dragConstraints={{ left: -100, right: 100 }} // Arrastrar
			// dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}

			// Los dos siguientes son para eventos de visibilidad den la ventana.
			// whileInView={{ opacity: 1 }}
			// viewport={{ once: true }}
		/>
	</motion.div>
)

export default ReconocedoresDeGestos