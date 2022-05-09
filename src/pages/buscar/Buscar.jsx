import HeaderSec from "../../components/header/HeaderSec";
import Popular from "../../components/slidesfood/Popular";
import Veggie from "../../components/slidesfood/Veggie";
import { motion } from "framer-motion"

function Buscar({data}) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
      <HeaderSec />
      <Popular data = {data}/>
      <Veggie  data = {data}/>
    </motion.div>
  )
}

export default Buscar