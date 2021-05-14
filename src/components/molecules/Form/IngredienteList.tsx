import { useState, useEffect } from 'react';
import IngredienteAdd from '../../atoms/Form/IngredienteAdd';
import { Flex } from '@chakra-ui/react';

// Types to Import
import { IngredienteForm } from '../../../types/recetas';

interface Props {
    lista: IngredienteForm[];
    removeIngredientFromList: (ingredient: IngredienteForm) => void;
    addIngredient: (ingrediente: IngredienteForm ) => void;

}

const IngredienteList = ({ lista, addIngredient, removeIngredientFromList }: Props) => {
        const addIngredientFromList = (ingredient: IngredienteForm) => {
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
