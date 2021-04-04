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
            borderColor='black'
            borderWidth='1px'
            mb={1}
        >
            <Box

            >{ingrediente.cantidad}
                <SmallCloseIcon />
            </Box>
            <Box
                mr={1}
            >{ingrediente.nombre}</Box>
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
