import { Paso } from '../../types/recetas';

import PasoItem from '../atoms/Recipe/PasoItem';

import { Box, Heading } from '@chakra-ui/react';
interface Props {
    pasos: Paso[];
    
}

const ListaPasos = ({ pasos }: Props) => {
    return (
        <Box 
        mb={10}
        >
         <Heading  as="h2" size="lg" mb={2}>Receta</Heading>
        {pasos.map( (paso, index) => <PasoItem value={paso} orden={index} />)} 
     </Box>
    )
}

export default ListaPasos


