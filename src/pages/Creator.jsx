import React, { useCallback, useState } from 'react';
import comet from "../assets/Komet.png";
import useFetch from '../hooks-and-function/useFetch';
import { StyledForm, StyledSelect, StyledOption, StyledLabel, StyledInput } from '../styles/shared/Form.styled';

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
        <StyledForm onSubmit={handleSubmit}>
                <StyledLabel>
                    Wybierz rasę:
                </StyledLabel>
                <StyledSelect value={personData.value} onChange={(e) => setPersonData({ ...personData, value: e.target.value })}>
                    <StyledOption value="dwarf" >Krasnolud</StyledOption>
                    <StyledOption value="human">Człowiek</StyledOption>
                    <StyledOption value="elf" >Elf</StyledOption>
                    <StyledOption value="halfling">Niziołek</StyledOption>
                </StyledSelect>
                <StyledLabel>
                    Wybierz Pochodzenie:
                </StyledLabel>
                <StyledSelect value={personData.origin} onChange={(e) => setPersonData({ ...personData, origin: e.target.value })}>
                    <StyledOption value="dwarf" >Krasnolud</StyledOption>
                    <StyledOption value="human">Człowiek</StyledOption>
                    <StyledOption value="elf" >Elf</StyledOption>
                    <StyledOption value="halfling">Niziołek</StyledOption>
                </StyledSelect>
                <StyledInput type="image" src={comet}/>
                <StyledInput type="image" src={comet}/>
        </StyledForm>
    );
}

export default Creator;