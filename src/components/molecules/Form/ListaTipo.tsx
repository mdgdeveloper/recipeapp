import { Box, Flex } from '@chakra-ui/react';
import { Tipo } from '../../../types/recetas';
import TipoElement from '../../atoms/Form/TipoElement';
import {useState, useEffect} from 'react';

interface Props {
    setTipo: (tipos:Tipo) => void;

}

const ListaTipo = ({ setTipo }: Props) => {
    const [tipoSelected, setTipoSelected] = useState<Tipo>();

    const ListaTipos: Tipo[] = [];
    for (let value in Tipo) {
        const iter : Tipo = Tipo[value as keyof typeof Tipo]; 
        ListaTipos.push(iter);
    }

    useEffect(()=>{
        if(tipoSelected) setTipo(tipoSelected)
    },[tipoSelected, setTipo])

    return (
        <Flex
            mb={10}
        >
            {ListaTipos.map(tipo => (
                <Box
                marginRight={2}
                >
                <TipoElement tipoValue={tipo} 
                tipoSelected={tipoSelected} 
                setTipoSelected={setTipoSelected}/>
                </Box>
            ))}

        </Flex>
    )
}

export default ListaTipo
