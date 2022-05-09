import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function Buscado({data}) {
    let { searched } = useParams();
    const filteredCategory = data.filter((item) =>
      item.category.toLowerCase().includes(searched)
    );

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit= {{opacity: 0}}
  >

        <Grid>
            {filteredCategory.map((item) => {
                return(
                    <Card key={item.id}>
                        <Link to={"/recetas/" + item.title}>
                            <img src={item.image} alt ="" />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    </motion.div>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;


export default Buscado