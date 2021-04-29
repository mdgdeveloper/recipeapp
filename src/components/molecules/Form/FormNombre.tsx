import { Box, Flex } from '@chakra-ui/react';
import Entrada from '../../atoms/Form/Entrada';

interface Props {
    
}

const FormNombre = (props: Props) => {
    return (
        <Flex
        flexDirection='column'
        textAlign='left'
        w='100%'
        >
            <Box>Nombre</Box>
            <Entrada />
            
        </Flex>
    )
}

export default FormNombre;
