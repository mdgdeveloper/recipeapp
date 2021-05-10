import { Box, Flex } from '@chakra-ui/react';
import Entrada from '../../atoms/Form/Entrada';

interface Props {
    setNombre: (nombre: string) => void;
    
}

const FormNombre = ({ setNombre }: Props) => {
    return (
        <Flex
        flexDirection='column'
        textAlign='left'
        w='100%'
        >
            <Box>Nombre</Box>
            <Entrada setNombre={setNombre}/>
            
        </Flex>
    )
}

export default FormNombre;
