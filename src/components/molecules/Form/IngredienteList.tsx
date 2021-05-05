import { useState, useEffect } from 'react';
import IngredienteAdd from '../../atoms/Form/IngredienteAdd';
import { Flex } from '@chakra-ui/react';

interface Props {
    lista: string[];
    removeIngredientFromList: (ingredient: string) => void;
    addIngredient: (ingrediente: string ) => void;

}


const IngredienteList = ({ lista, addIngredient, removeIngredientFromList }: Props) => {
        const addIngredientFromList = (ingredient: string) => {
            removeIngredientFromList(ingredient);
            addIngredient(ingredient);
        
    }



    return (
        <Flex
        w='100%'
        flexWrap='wrap'
        flexGap={2}
        >
            {lista.map( ingrediente =>  <IngredienteAdd 
            ingrediente={ingrediente} 
            addIngredientFromList={addIngredientFromList} 
            /> )}
        </Flex>
    )
}

export default IngredienteList
