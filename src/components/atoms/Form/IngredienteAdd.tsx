import { ButtonGroup, Button } from '@chakra-ui/react';


// Types Import
import { IngredienteForm } from '../../../types/recetas';

interface Props {

    ingrediente: IngredienteForm;
    addIngredientFromList: (ingrediente: IngredienteForm) => void;

}

const IngredienteAdd = ({ ingrediente, addIngredientFromList }: Props) => {
    
    const addIngredient = () =>{
        addIngredientFromList(ingrediente);
    } 
    
    return (
        <ButtonGroup 
        size="sm" isAttached variant="outline" mr={3} mb={3}>
            <Button bg='blue.300' mr="-px"
            onClick={addIngredient}
            >{ingrediente.nombre}</Button>
        </ButtonGroup>
    )
}

export default IngredienteAdd
