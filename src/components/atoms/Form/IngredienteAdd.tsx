import { Box, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";

interface Props {

    ingrediente: string;
    setNewIngredient: (ingrediente: string) => void;

}

const IngredienteAdd = ({ ingrediente, setNewIngredient }: Props) => {
    
    const addIngredient = () =>{
        setNewIngredient(ingrediente);
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
