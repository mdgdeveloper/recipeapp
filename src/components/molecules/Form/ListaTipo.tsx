import { Box, Flex } from '@chakra-ui/react';
import { Tipo } from '../../../types/recetas';
import TipoElement from '../../atoms/Form/TipoElement';
import {useState} from 'react';

interface Props {
    setTipoSelected: (tipos:Tipo) => void;

}

const ListaTipo = (props: Props) => {
    const [tipoSelected, setTipoSelected] = useState<Tipo>();

    const ListaTipos: Tipo[] = [];
    for (let value in Tipo) {
        const iter : Tipo = Tipo[value as keyof typeof Tipo]; 
        ListaTipos.push(iter);
    }


    return (
        <Flex
        gap={2}
        >
            {ListaTipos.map(tipo => (
                <TipoElement tipoValue={tipo} 
                tipoSelected={tipoSelected} 
                setTipoSelected={setTipoSelected}/>
            ))}
        </Flex>
    )
}

export default ListaTipo
