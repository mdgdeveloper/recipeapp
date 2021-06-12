import { Flex } from '@chakra-ui/react';

// ? ORGANISMS
import Header from '../organisms/Header';

interface Props {
    setAdmin: (admin: boolean) => void; 
    children?: JSX.Element | string,
}

const LandingLayout = ({setAdmin, children}: Props) => {
    return (
        <>
        <Header setAdmin={setAdmin} />
        <Flex
            direction='column'
            align='center'
            maxW={{ xl: "1000px" }}
            m='0 auto'
            flexBasis='auto'
        >
            
            {children}
        </Flex>
        </>
    )
}

export default LandingLayout
