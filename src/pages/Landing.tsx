import { Box } from '@chakra-ui/react';
import LandingLayout from '../components/templates/LandingLayout';
import Recipes from '../components/templates/Recipes';

interface Props {
    
}

const Landing = (props: Props) => {
    return (
        <Box bgColor='#f9f8f4'>
        <LandingLayout>
            <Recipes />
        </LandingLayout>
        </Box>
    )
}

export default Landing
