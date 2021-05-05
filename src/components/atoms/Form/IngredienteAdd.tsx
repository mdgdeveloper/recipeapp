import { Box, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";

interface Props {

    ingrediente: string;
    addIngredientFromList: (ingrediente: string) => void;

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
            >{ingrediente}</Button>
        </ButtonGroup>
    )
}

export default IngredienteAdd
