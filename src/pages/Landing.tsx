import { Box } from '@chakra-ui/react';
import LandingLayout from '../components/templates/LandingLayout';
import Recipes from '../components/templates/Recipes';
import Admin from '../components/templates/Admin';

interface Props {
    type: string;
    
}

const Landing = (props: Props) => {
    return (
        <Box bgColor='#f9f8f4'>
        <LandingLayout>
            { props.type === "admin" ? <Admin /> : <Recipes />}
            
        </LandingLayout>
        </Box>
    )
}

export default Landing
