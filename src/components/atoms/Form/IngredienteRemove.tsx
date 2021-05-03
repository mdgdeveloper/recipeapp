import { Box, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";

import { IngredienteForm } from '../../../types/recetas';
interface Props {
    ingrediente: IngredienteForm;
}

const IngredienteRemove = ({ingrediente}: Props) => {
    return (
        <ButtonGroup 
        onClick={()=>{console.log('test')}}
        size="sm" isAttached variant="outline" mr={3} mb={3}>
            <Button bg='blue.300' mr="-px"         
            >{ingrediente.nombre}</Button>
             <Button bg='blue.100' mr="-px"         
            >{ingrediente.cantidad}</Button>
             <IconButton 
             bg='red.200'
             aria-label="Add ingrediente" icon={<DeleteIcon />} />
        </ButtonGroup>
    )
}

export default IngredienteRemove
