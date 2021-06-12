import {Box, Flex} from '@chakra-ui/react';
import {useState} from 'react';

import { Tipo } from '../../../types/recetas';

import ListaTipo from './ListaTipo';

interface Props {
    setTipo: (tipo: Tipo) => void;
    tipo?: Tipo;
}

const FormTipos = ({ setTipo, tipo }: Props) => {

    return (
        <Flex
        mt={6}
        flexDirection='column'
        textAlign='left'>
            <Box>Escoge tipo</Box>
            <ListaTipo setTipo={setTipo} tipo={tipo} />      
        </Flex>
    )
}

export default FormTipos
