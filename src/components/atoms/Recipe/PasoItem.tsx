import { Paso } from '../../../types/recetas';



import { Flex, Box, Text } from '@chakra-ui/react';

interface Props {

    value: Paso;

}

const PasoItem = ({ value }: Props) => {
    return (
        <Flex
        align='center'
        >
            <Box
            p={2}
            ><Text
            fontSize="3xl"
            >{value.orden}</Text></Box>
            <Box
            p={2}
            
            >
                {value.descripcion}
            </Box>
        </Flex>
    )
}

export default PasoItem
