import "./headerSec.css";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {  GiCancel } from 'react-icons/gi';
import styled from 'styled-components';
import { Link } from "react-router-dom";


function Searchbar( {data}) {
    
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
    return (
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.img} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
    
    /*
    //tabs and inputs
    const [inputI, setInputI] = useState('');
    const [inputC, setInputC] = useState('');
    const [inputD, setInputD] = useState('');

    const [activeTab, setActiveTab] = useState("ingredients");

    const submitHandler = (e) => {
        e.prevent.Default();
    }

    const submitHandlerN = (e) => {
        e.prevent.Default();
    }

    //filters

    const [filteredDataC,setFilteredDataC] = useState([]);
    const [filteredDataI,setFilteredDataI] = useState([]);
    const [filteredDataD,setFilteredDataD] = useState([]);

    const handleFilterI = (event) =>{
        const searchWord = event.target.value;
        setInputI(searchWord);
        const newFilterI = data.filter((value) => {
            return value.ingredients.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === "") {
            setFilteredDataI([]);
        }else{
            setFilteredDataI(newFilterI);
        }
        
    }
    
    const handleFilterC = (event) =>{
        const searchWord = event.target.value;
        setInputC(searchWord);
        const newFilterC = data.filter((value) => {
            return value.category.toLowerCase().includes(searchWord.toLowerCase());
        })
        if (searchWord === "") {
            setFilteredDataC([]);
        }else{
            setFilteredDataC(newFilterC);
        }
    }

    const handleFilterD = (event) =>{
        const searchNumber = event.target.value;
        setInputD(searchNumber);
        const newFilterD = data.filter((value) => {
            return value.dificulty === searchNumber;
        })

        if (searchNumber === "") {
            setFilteredDataD([]);
        }else{
            setFilteredDataD(newFilterD);
        }
    }

    //clear inputs cancel icon

    const clearInputI = () =>{
        setFilteredDataI([]);
        setInputI("");
    }

    const clearInputC = () =>{
        setFilteredDataC([]);
        setInputC("");
    }
    const clearInputD = () =>{
        setFilteredDataD([]);
        setInputD("");
    }


  return (
        <div>
                <TabWrapper>
                    <DetailWrapper>
                        <Button className={activeTab === "ingredients" ? 'active': ''} onClick={()=> setActiveTab('ingredients')}>
                            Ingredientes
                        </Button>
                        <Button className={activeTab === "category" ? 'active': ''} onClick={()=> setActiveTab('category')}>
                            Categoria
                        </Button>
                        <Button className={activeTab === "dificulty" ? 'active': ''} onClick={()=> setActiveTab('dificulty')}>
                            Dificultad
                        </Button>
                    </DetailWrapper>
                    <FormStyle onSubmit={submitHandler}>
                        {activeTab === "ingredients" && (
                            <div>
                                <InputStyle>
                                    {filteredDataI.lenght === 0 ? <FaSearch className="svSearch"/> :
                                    <GiCancel className="svCancel" onClick={clearInputI}/>
                                    }
                                    <input type="text" value= {inputI} onChange={handleFilterI}/>
                                    </InputStyle>
                                {filteredDataI.lenght !== 0 && (
                                    <div className="searchResultI">
                                        {filteredDataI.map((recipe) => {
                                            return(
                                                <Link to={"/recetas/" + recipe.title}>
                                                    <p>{recipe.title}</p>
                                                </Link>
                                                )
                                            })
                                        }
                                    </div>
                                )}
                            </div>
                        )}
                        {activeTab === "category" && (
                             <div>
                                <InputStyle>
                                {filteredDataC.lenght === 0 ? <FaSearch className="svSearch"/> :
                                 <GiCancel className="svCancel" onClick={clearInputC}/>
                                 }
                                <input type="text" value= {inputC} onChange={handleFilterC}/>
                                </InputStyle>
                                {filteredDataC.lenght !== 0 && (
                                    <div className="searchResultC">
                                        {filteredDataC.map((recipe) => {
                                            return(
                                                <Link to={"/recetas/" + recipe.title}>
                                                    <p>{recipe.title}</p>
                                                </Link>
                                                )
                                            })
                                        }
                                    </div>
                                )}
                                </div>
                        )}
                    </FormStyle>
                    <FormStyle onSubmit={submitHandlerN}>
                        {activeTab === "dificulty" && (
                                <div>
                                    <InputStyle>
                                    {filteredDataD.lenght === 0 ? <FaSearch className="svSearch"/> :
                                    <GiCancel className="svCancel" onClick={clearInputD}/>
                                    }
                                    <input type="number" value= {inputD} onChange={handleFilterD}/>
                                    </InputStyle>
                                    <div className="searchResultD">
                                        {filteredDataD.map((recipe) => {
                                            return(
                                                <Link to={"/recetas/" + recipe.title}>
                                                    <p>{recipe.title}</p>
                                                </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )}
                    </FormStyle>
                </TabWrapper>
        </div>
  ) */
};

const FormStyle = styled.form`
    margin: 0 20rem;
`;

const InputStyle = styled.div`
    position: relative;
    width: 100%;

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
    .svSearch{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: black;
    }

    .svCancel{
        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(100%, -50%);
        color: black;
    }

`

const DetailWrapper = styled.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content:center;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    
`;

const TabWrapper = styled.div`
    display: flex;
    flex-direction:column;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;


export default Searchbar