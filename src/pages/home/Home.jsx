import "./home.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </motion.div>
  )
}
