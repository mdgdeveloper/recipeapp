import { IngredienteType } from '../../../types/recetas';
import { BiRightArrowCircle } from 'react-icons/bi';

import { Flex, Box, Icon } from '@chakra-ui/react';
interface Props {
    ingrediente: IngredienteType,
}

const Ingrediente = ({ ingrediente }: Props) => {
    return (
        <Flex
            color='#4f4842'
            alignItems='center'
            pt={1}
            pb={1}
        >
            <Flex
            
            >
            <Box
            mr={2}
            
            ><Icon as={BiRightArrowCircle} color='green.600'/></Box>
            <Box
            >{ingrediente.peso
                ? <Box> {ingrediente.peso} gramos </Box>
                : <Box> {ingrediente.cantidad} </Box>}
            </Box>
            
                
            <Box
                ml={1}
                mr={1}
            >{ingrediente.ingrediente.nombre}</Box>
             </Flex>
        </Flex>
    )
}

export default Ingrediente
