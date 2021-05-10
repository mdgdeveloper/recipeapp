import { useState } from 'react';
import { Box, Flex, Select, Input, IconButton } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

import { IngredienteForm } from '../../../types/recetas';
interface Props {
    ingrediente: IngredienteForm;
    removeIngredient: (ingredient: IngredienteForm) => void;
    editIngredient: (ingredient: IngredienteForm) => void;
}

const IngredienteRemove = ({ ingrediente, removeIngredient, editIngredient }: Props) => {
    const [numeric, setNumeric] = useState<number>(0);
    const [pesoSelected, setPesoSelected] = useState<boolean>(true);

    const handleNumericValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = +event.target.value;
        setNumeric(value);
        const IngredienteToAdd: IngredienteForm ={
            nombre: ingrediente.nombre,
            cantidad: parseInt(event.target.value),
            peso: pesoSelected
        }
        editIngredient(IngredienteToAdd);
    }

    const handlePesoSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPesoSelected(event.target.value === "unidades" ? false : true); 
        const IngredienteToAdd: IngredienteForm ={
            nombre: ingrediente.nombre,
            cantidad: numeric,
            peso: event.target.value === "unidades" ? false : true
        }
        editIngredient(IngredienteToAdd);
    }

    return (

        <Flex
            mb={2}
            mt={2}
            w='100%'
        ><IconButton
                onClick={() => removeIngredient(ingrediente)}
                bg='red.400' mr={2} 
                color='white' 
                aria-label="Add ingredient" 
                icon={<SmallCloseIcon />} />
            <Box mr={3} p={2} borderRadius={5} bg='green.300' fontWeight='bold'>{ingrediente.nombre}</Box>

            <Input w='10%' mr={3} onChange={handleNumericValue}/>
            <Select
                w='20%'
                mr={2}
                onChange={handlePesoSelected}
            >
                <option value="peso" selected>gramos</option>
                <option value="unidades">unidades</option>
                
            </Select>

        </Flex>

    )
}

export default IngredienteRemove
