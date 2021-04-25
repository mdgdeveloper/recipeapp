
import { Box, Center } from '@chakra-ui/react';

import { Receta } from '../../types/recetas';
import { Flex } from '@chakra-ui/react';


// ? Atoms
import Imagen from '../atoms/Recipe/Imagen';
import Titulo from '../atoms/Recipe/Titulo';

// ? Molecules
import ListaIngredientes from './ListaIngredientes';
import ListaPasos from './ListaPasos';
import InfoReceta from './InfoReceta';

interface Props {
    receta: Receta;
}

const Recipe = ({ receta }: Props) => {
    return (

        <Flex
            w='100%'
            direction='column'
            wrap='wrap'
        >
            <Box
                textAlign='justify'
            >
                <Titulo value={receta.nombre} />
            </Box>
            <Box>
                <InfoReceta data={receta} />
            </Box>
            <Flex
                align='top'
                justify='space-between'
                direction={["column", "column", "row", "row"]}
                wrap='wrap'
                w='100%'
            >
                <Box
                    align='center'
                    w={['100%', '100%', '100%', '60%']}
                    

                >
                    <Imagen img={receta.imagen} />
                </Box>
                <Box
                    p={2}
                    w={['100%', '100%', '100%', '38%']}

                >
                    <ListaIngredientes ingredientes={receta.ingredientes} />
                </Box>
            </Flex>
            <Box
            mt={3}
            
            >
                <ListaPasos pasos={receta.pasos} />
            </Box>
        </Flex>
    )
}

export default Recipe
