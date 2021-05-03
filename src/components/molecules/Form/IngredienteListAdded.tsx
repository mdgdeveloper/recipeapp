import { Box, Flex } from '@chakra-ui/react';
import { IngredienteForm } from '../../../types/recetas';
import IngredienteRemove from '../../atoms/Form/IngredienteRemove';

interface Props {
    lista: IngredienteForm[] | undefined;
    
}

const IngredienteListAdded = ({ lista }: Props) => {

    // Funcion remove Ingredient
    // La funcion inclutye eliminar si es 0 o reducir su valor. 


    return (
        <>
        {lista ? <Box
        align='left'
        >Lista de ingredientes escogidos:</Box> : <Box></Box> }
        <Flex
            flexWrap='wrap'
        >
            {lista ? lista.map( (ingredienteLista:IngredienteForm) => {
                
                return(
                    <IngredienteRemove ingrediente={ingredienteLista} />
                );
            }): <></>}
        </Flex>
        </>
    )
}

export default IngredienteListAdded
