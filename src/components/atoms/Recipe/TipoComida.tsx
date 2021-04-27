import { Tipo } from '../../../types/recetas'
import { Flex, Box } from '@chakra-ui/react';

interface Props {
    tipoComida: Tipo,

}

const TipoComida = ({ tipoComida }: Props) => {

    return (
        <Flex
            direction='column'
            mr={8}
        >
            <Box fontSize={15} m={0} letterSpacing={-1}>Tipo</Box>
            <Box
                fontSize={23}
                p={0}
                mt={-2}
                letterSpacing={-1}
            >{tipoComida}</Box>
        </Flex>
    )
}

export default TipoComida
