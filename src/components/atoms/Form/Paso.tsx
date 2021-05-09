import { Textarea, Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
    id: number;
    pasos: string[];
    setPasos: (pasos: string[]) => void;


}

const Paso = ({ id, pasos, setPasos }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        pasos[id] = event.target.value;
        setPasos(pasos);

    }


    return (
        <Flex>
        <Box
            p={7}
            fontSize={20}
            fontWeight='bold'
            color='gray.500'
        
        >{id + 1}</Box>
            <Textarea

                onChange={handleChange}

            />
        
        </Flex>
    )
}

export default Paso
