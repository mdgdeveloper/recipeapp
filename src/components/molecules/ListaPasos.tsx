import { Paso } from '../../types/recetas';

import PasoItem from '../atoms/Recipe/PasoItem';

import { Box } from '@chakra-ui/react';
interface Props {
    pasos: Paso[];
    
}

const ListaPasos = ({ pasos }: Props) => {
    return (
        <Box>
        {pasos.map( paso => <PasoItem value={paso} />)} 
     </Box>
    )
}

export default ListaPasos
