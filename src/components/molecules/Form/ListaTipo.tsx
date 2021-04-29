import { Box, Flex } from '@chakra-ui/react';
import { Tipo } from '../../../types/recetas';

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
                <Box
                p={5}
                
                >{tipo}</Box>
            ))}
        </Flex>
    )
}

export default ListaTipo
