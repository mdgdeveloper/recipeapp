import LandingLayout from '../components/templates/LandingLayout';
import Recipes from '../components/templates/Recipes';

interface Props {
    
}

const Landing = (props: Props) => {
    return (
        <LandingLayout>
            <Recipes />
        </LandingLayout>
    )
}

export default Landing
