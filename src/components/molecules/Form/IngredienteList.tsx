import { useState, useEffect } from 'react';
import IngredienteAdd from '../../atoms/Form/IngredienteAdd';
import { Flex } from '@chakra-ui/react';

interface Props {
    lista: string[];
    setIngredientToAdd: (ingrediente: string ) => void;
}


const IngredienteList = ({ lista, setIngredientToAdd }: Props) => {
    const [listaUpdated, setListaUpdated] = useState<string[]>(lista);
    const [newIngredient, setNewIngredient] = useState<string>();
 
    useEffect(()=>{
        const newLista = listaUpdated.filter( elemento => elemento !== newIngredient );
        setListaUpdated(newLista);

    },[newIngredient, listaUpdated])



    return (
        <Flex
        w='100%'
        flexWrap='wrap'
        flexGap={2}
        >
            {listaUpdated.map( ingrediente =>  <IngredienteAdd 
            ingrediente={ingrediente} 
            setNewIngredient={setNewIngredient} 
            /> )}
        </Flex>
    )
}

export default IngredienteList
