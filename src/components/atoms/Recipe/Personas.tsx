import { Flex, Box } from '@chakra-ui/react';
interface Props {
    numero: Number,
    
}

const Personas = ({ numero }: Props) => {


    return (
<Flex
        direction='column'
        m={0}
        mr={8}
    >
        <Box fontSize={15} m={0} letterSpacing={-1}>Personas</Box>
        <Box
            fontSize={23}
            p={0}
            mt={-2}
            letterSpacing={-1}
        >{numero}</Box>
    </Flex>
    )
}

export default Personas;
