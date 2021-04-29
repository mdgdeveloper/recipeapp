import { Box, Flex } from '@chakra-ui/react';
import { Tipo } from '../../../types/recetas';
import TipoElement from '../../atoms/Form/TipoElement';

interface Props {
    setTipoSelected: (tipos:Tipo) => void;

}

const ListaTipo = (props: Props) => {

    const ListaTipos = [];
    for (let value in Tipo) {
        ListaTipos.push(value);
    }


    return (
        <Flex>
            <Box></Box>
            {ListaTipos.map(tipo => (
                <TipoElement tipoValue={tipo} />
            ))}
        </Flex>
    )
}

export default ListaTipo
