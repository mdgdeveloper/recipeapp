import {Box, Flex} from '@chakra-ui/react';
import {useState} from 'react';

import { Tipo } from '../../../types/recetas';

import ListaTipo from './ListaTipo';

interface Props {
    setTipo: (tipo: Tipo) => void;
}

const FormTipos = ({ setTipo }: Props) => {

    return (
        <Flex
        mt={6}
        flexDirection='column'
        textAlign='left'>
            <Box>Escoge tipo</Box>
            <ListaTipo setTipo={setTipo}/>      
        </Flex>
    )
}

export default FormTipos
