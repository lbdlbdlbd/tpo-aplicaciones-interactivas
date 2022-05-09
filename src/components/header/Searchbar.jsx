import "./headerSec.css";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Searchbar() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.prevent.Default();
        navigate("/searched/"+input);
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input type="text" value= {input} onChange={(e)=> setInput(e.target.value)}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0 20rem;

    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: white;
        font-size: 1.5rem;
        width: 100%;
        color: black;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: black;
    }

`;

export default Searchbar