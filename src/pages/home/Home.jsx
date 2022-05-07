import "./home.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import { motion } from "framer-motion"
import MailList from "../../components/mailList/MailList"

export default function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit= {{opacity: 0}}
    >
      <Header/>
      <div className="post-grid">
        <Posts/>
        <Sidebar/>
      </div>
      <MailList/>
    </motion.div>
  )
}
