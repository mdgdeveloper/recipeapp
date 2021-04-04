
import { Box, Center } from '@chakra-ui/react';

import { Receta } from '../../types/recetas';
import { Flex } from '@chakra-ui/react';


// ? Atoms
import Imagen from '../atoms/Recipe/Imagen';
import Titulo from '../atoms/Recipe/Titulo';

// ? Molecules
import ListaIngredientes from './ListaIngredientes';
import ListaPasos from './ListaPasos';

// Esta importacion es como ejemplo
import { data } from '../../data/recipes';

// TODO Add to props the data imported to Recipe.

interface Props {

}

// Modelo de ejemplo {BORRAR}
const receta: Receta = data[0];

const Recipe = (props: Props) => {
    return (

        <Flex
        w='100%'
        direction='column'
        wrap='wrap'
        
        >
            <Box
            pl={12}
            pt={5}
            textAlign={['center','center','center','justify']}
            ><Titulo value={receta.nombre} /></Box>
            <Flex
                align='top'
                justify='space-between'
                direction={["column", "column", "row", "row"]}
                wrap='wrap'
                w='100%'
                mb={8}
                pl={8}
                pr={8}
                pt={3}
                
            >

                <Box
                    p={2}
                    bg='white'
                    w={['100%', '100%', '100%', '60%']}

                >
                    <Center><Imagen img={receta.imagen} />
                    </Center></Box>
                <Box
                    p={2}
                    bg='white'
                    w={['100%', '100%', '100%', '38%']}
                >
                    <ListaIngredientes ingredientes={receta.ingredientes}/>
                
                </Box>

            </Flex>
            <Box>
                Pasos
                <ListaPasos />
            </Box>
        </Flex>
    )
}

export default Recipe
