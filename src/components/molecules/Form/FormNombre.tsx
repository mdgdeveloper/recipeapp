import { Box, Flex } from '@chakra-ui/react';
import Entrada from '../../atoms/Form/Entrada';

interface Props {
    setNombre: (nombre: string) => void;
    nombre?: string; 
}

const FormNombre = ({ setNombre, nombre }: Props) => {
    return (
        <Flex
        flexDirection='column'
        textAlign='left'
        w='100%'
        >
            <Box>Nombre</Box>
            <Entrada setNombre={setNombre} nombre={nombre}/>
            
        </Flex>
    )
}

export default FormNombre;
