import Tiempo from '../atoms/Recipe/Tiempo';
import TipoComida from '../atoms/Recipe/TipoComida';
import Personas from '../atoms/Recipe/Personas';

import { Receta } from '../../types/recetas';

import { Flex, Box } from '@chakra-ui/react';
interface Props {

    data: Receta;
    
}

export const InfoReceta = ({data}: Props) => {
    return (
        <Flex mb={4} mt={2}>
            <Box
            mr={2}
            >
                <TipoComida tipoComida={data.tipo}/>
            </Box>
            <Box
            mr={2}>
                <Tiempo time={data.tiempo} />
            </Box>
            <Box>
                <Personas numero={data.personas} />
            </Box>
            
        </Flex>
    )
}


export default InfoReceta;