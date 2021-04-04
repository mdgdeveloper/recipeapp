import { Tipo } from '../../../types/recetas'
import { Flex, Box, Icon } from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa';

interface Props {
    tipoComida: Tipo,
    
}

const TipoComida = ({ tipoComida }: Props) => {

    const iconoComida = ( tipo: Tipo ) => {

    }

    return (
<Flex
            direction='column'
            align='center'
            pb={3}
            pt={3}
            pl={5}
            pr={5}
            mt={2}
            bg='#f2d7ac'
            borderRadius={15}
            w='90px'
        
        >
            <Box><Icon as={FaInfo} w={8} h={8} color='#4f4842'/></Box>
            <Box
            mt={2}
            color='#4f4842'
            >{tipoComida}</Box>

            

    
        </Flex>
    )
}

export default TipoComida
