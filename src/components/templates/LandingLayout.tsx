import { Flex } from '@chakra-ui/react';

// ? ORGANISMS
// import Header from '../organisms/Header';

interface Props {
    children?: JSX.Element | string,
}

const LandingLayout = ({children}: Props) => {
    return (
        <Flex
            direction='column'
            align='center'
            maxW={{ xl: "1000px" }}
            m='0 auto'
        >
            
            {children}
        </Flex>
    )
}

export default LandingLayout
