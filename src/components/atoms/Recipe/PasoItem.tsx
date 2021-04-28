import { Paso } from '../../../types/recetas';



import { Flex, Box, Text } from '@chakra-ui/react';

interface Props {

    value: Paso;
    orden: number;

}

const PasoItem = ({ value, orden }: Props) => {
    return (
        <Flex
        align='center'
        >
            <Box
            p={1}
            ><Text
            fontSize="2xl"
            fontWeight="bold"
            >{orden + 1}</Text></Box>
            <Box
            p={2}
            >
                {value}
            </Box>
        </Flex>
    )
}

export default PasoItem
