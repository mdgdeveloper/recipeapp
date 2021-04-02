import {useState} from 'react';

// ? ATOMS
import Logo from '../atoms/Header/Logo';
import MenuToggle from '../atoms/Header/MenuToggle';

// ? MOLECULES
import MenuLinks from './MenuLinks';
import NavBarContainer from './NavBarContainer';

interface Props {
    
}

const NavBar = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    )
}

export default NavBar
