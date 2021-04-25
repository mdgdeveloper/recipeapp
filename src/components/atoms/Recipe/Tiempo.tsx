import {Flex, Box } from '@chakra-ui/react';

import { TimeIcon } from '@chakra-ui/icons';

interface Props {
    time: number,
    
}

const Tiempo = ({ time }: Props) => {
    return (
        <Flex
            direction='column'
            align='center'
            pb={3}
            pt={3}
            pl={5}
            pr={5}
            mt={2}
            bg='#abede5'
            borderRadius={15}
            w='100px'
        
        >
            <Box><TimeIcon w={8} h={8} color='#4f4842'/></Box>
            <Box
            mt={2}
            color='#4f4842'
            >{time} min</Box>

            

    
        </Flex>
    )
}

export default Tiempo
