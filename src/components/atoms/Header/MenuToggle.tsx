import { Box } from '@chakra-ui/react';
import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';

interface Props {
    toggle: () => void;
    isOpen: boolean;
    
}

const MenuToggle = ({ toggle, isOpen } : Props) => {
    return (
        <Box
        display={{ base: "block", md: "none" }}
        onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon /> }
            
        </Box>
    )
}

export default MenuToggle
