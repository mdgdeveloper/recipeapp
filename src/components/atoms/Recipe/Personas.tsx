import { Flex, Box, Icon } from '@chakra-ui/react';
import { GoPerson } from 'react-icons/go';

interface Props {
    numero: Number,
    
}

const Personas = ({ numero }: Props) => {


    return (
<Flex
            direction='column'
            align='center'
            pb={3}
            pt={3}
            pl={5}
            pr={5}
            mt={2}
            bg='#caf5b3'
            borderRadius={15}
            w='90px'
        
        >
            <Box><Icon as={GoPerson} w={8} h={8} color='#4f4842'/></Box>
            <Box
            mt={2}
            color='#4f4842'
            >{numero}</Box>

            

    
        </Flex>
    )
}

export default Personas;
