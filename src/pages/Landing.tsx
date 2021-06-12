import { Box } from '@chakra-ui/react';
import LandingLayout from '../components/templates/LandingLayout';
import Recipes from '../components/templates/Recipes';
import Admin from '../components/templates/Admin';

import { useState } from 'react';
interface Props {
    type: string;
    
}

const Landing = (props: Props) => {
    // Admin variable: set to activate edit features 
    const [admin, setAdmin] = useState<boolean>(false);

    return (
        <Box bgColor='#f9f8f4'>
        <LandingLayout setAdmin={setAdmin}>
            { props.type === "admin" ? <Admin /> : <Recipes admin={admin}/>}
            
        </LandingLayout>
        </Box>
    )
}

export default Landing
