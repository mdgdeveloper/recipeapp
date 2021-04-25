import { Paso } from '../../types/recetas';

import PasoItem from '../atoms/Recipe/PasoItem';

import { Box, Heading } from '@chakra-ui/react';
interface Props {
    pasos: Paso[];
    
}

const ListaPasos = ({ pasos }: Props) => {
    return (
        <Box>
         <Heading  as="h2" size="md">Lista de pasos</Heading>
        {pasos.map( (paso, index) => <PasoItem value={paso} orden={index} />)} 
     </Box>
    )
}

export default ListaPasos
