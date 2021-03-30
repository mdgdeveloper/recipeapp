import { Box, Text } from '@chakra-ui/react'; 

interface Props {
    
}

const Logo = (props: Props) => {
    return (
<Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
    )
}

export default Logo
