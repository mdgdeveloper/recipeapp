import {Box, Flex} from '@chakra-ui/react';
import {useState} from 'react';

import { Tipo } from '../../../types/recetas';

import ListaTipo from './ListaTipo';

interface Props {
    
}

const FormTipos = (props: Props) => {
    const [tipoSelected, setTipoSelected] = useState<Tipo>();


    return (
        <Flex
        mt={6}
        flexDirection='column'
        textAlign='left'>
            <Box>Escoge tipo</Box>
            <ListaTipo setTipoSelected={setTipoSelected}/>      
        </Flex>
    )
}

export default FormTipos
