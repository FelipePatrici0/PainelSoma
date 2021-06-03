import React, {useState} from 'react'
import styled from 'styled-components'
import './App.css'


const Input = styled.input`
    width: 100px;
    height: 30px;
    font-size: 16px;
    padding: 10px;
    background-color: #F5F5F5;
    border: solid 2px;
    border-radius: 10px;
    text-align: center;
   
`;

const Titulo = styled.h1`
    margin-top: 15px;
    padding: 2px;
    border: solid 2px;
    border-radius: 10px;
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 27px;
    margin-left: 7px;
    width: 400px;
    text-align: center;
`;

const Fields = styled.div`
    margin-left: 70px;
    font-family: 'Arial Black', sans-serif;
    margin-top: 30px;
`;

const Result = styled.div`
    margin-top: 50px;
    text-align: center;
    background-color: #fff;
    width: 200px;
    border: solid 2px;
    border-radius: 10px;
    margin-left: 100px;
    font-size: 25px;
   
`;

function App(){

    const [v1, setv1] = useState('')
    const [v2, setv2] = useState('')

   
    const handlev1 = (e) =>{
        const value = e.target.value.replace(/\D/g, "");
        setv1(value)
    }

    const handlev2 = (e) =>{
        const value = e.target.value.replace(/\D/g, "");
        setv2(value)
    }

    return(
        <>
           <div class="App">
                <Titulo>{process.env.REACT_APP_TITLE}</Titulo>
                <Fields>
                    <Input type="text" placeholder="Valor 1" value={v1} onChange={handlev1}/> 
                    <span> + </span>
                    <Input type="text" placeholder="Valor 2" value={v2} onChange={handlev2}/><br/>
                </Fields>
                {v1.length > 0 && v2.length > 0 &&
                    <Result>
                        <p>Total: {parseInt(v1) + parseInt(v2)}</p>
                    </Result>
                }
           </div>
        </> 
    )
    
}

export default App;