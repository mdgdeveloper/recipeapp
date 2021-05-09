import { ButtonGroup, Button } from '@chakra-ui/react';


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
