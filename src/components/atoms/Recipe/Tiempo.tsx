import {Flex, Box } from '@chakra-ui/react';

import { TimeIcon } from '@chakra-ui/icons';

interface Props {
    time: number,
    
}

const Tiempo = ({ time }: Props) => {
    return (
        <Flex
            direction='column'
            m={0}
            mr={8}
        >
            <Box fontSize={15} m={0} letterSpacing={-1}>Duración</Box>
            <Box
                fontSize={23}
                p={0}
                mt={-2}
                letterSpacing={-1}
            >{time} min</Box>
        </Flex>

            


    )
}

export default Tiempo
