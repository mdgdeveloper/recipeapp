import { IngredienteType } from '../../../types/recetas';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { GiWeight } from 'react-icons/gi'

import { Flex, Box, Icon } from '@chakra-ui/react';
interface Props {
    ingrediente: IngredienteType,
}

const Ingrediente = ({ ingrediente }: Props) => {
    return (
        <Flex
            p={3}
            mb={4}
            borderRadius={10}
            bg='#e6ffd9'
            pt={4}
            pb={4}
            color='#4f4842'
            
        >
            <Box

            >{ingrediente.cantidad}
                <SmallCloseIcon />
            </Box>
            <Box
                mr={1}
            >{ingrediente.ingrediente.nombre}</Box>
            {ingrediente.peso
                ?
                <Box
                    mr={1}
                >
                    | {ingrediente.peso} gramos <Icon as={GiWeight} /></Box>
                : <Box></Box>

            }
        </Flex>
    )
}

export default Ingrediente
