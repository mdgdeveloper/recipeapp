
import { Box, Center } from '@chakra-ui/react';
import Imagen from '../atoms/Recipe/Imagen';
import ListaIngredientes from './ListaIngredientes';


interface Props {

}

const Recipe = (props: Props) => {
    return (
        <>

            <Box
                p={2}
                bg='white'
                w={['100%','100%','100%','60%']}

            >
                <Center><Imagen />
                </Center></Box>
            <Box
                p={2}
                bg='white'
                w={['100%','100%','100%','38%']}
            >Ingredientes</Box>

        </>
    )
}

export default Recipe
