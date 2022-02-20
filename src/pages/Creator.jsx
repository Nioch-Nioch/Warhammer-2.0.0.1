import React, { useCallback, useState } from 'react';
import { StyledShop } from "../styles/layout/Shop.styled";
import komet from "../assets/Komet.png";
import useFetch from '../hooks-and-function/useFetch';

function Creator() {

    const [personData, setPersonData] = useState({
        value: "dwarf",
        origin: "dwarf"
    })
    

    const handleSubmit = (e) => {
        alert("Wybrana rasa to: " + personData.value + " a pochodzi z " + personData.origin);
        e.preventDefault();
    }
    console.log(personData);
    return (
        <StyledShop>
            <form onSubmit={handleSubmit}>
                <label>
                    Wybierz rasę:
                </label>
                <select style={{color:"black"}} value={personData.value} onChange={(e) => setPersonData({ ...personData, value: e.target.value })}>
                    <option value="dwarf" >Krasnolud</option>
                    <option value="human">Człowiek</option>
                    <option value="elf" >Elf</option>
                    <option value="halfling">Niziołek</option>
                </select>
                <br/>
                <label>
                    Wybierz Pochodzenie:
                </label>
                <select style={{color:"black"}} value={personData.origin} onChange={(e) => setPersonData({ ...personData, origin: e.target.value })}>
                    <option value="dwarf" >Krasnolud</option>
                    <option value="human">Człowiek</option>
                    <option value="elf" >Elf</option>
                    <option value="halfling">Niziołek</option>
                </select>
                <br/>
                <input type="image" src={komet}/>
                <input type="image" src={komet}/>
                <br/>
                <input style={{color:"black"}} type="submit" value="Losuj postać" />
            </form>
        </StyledShop>
    );
}

export default Creator;