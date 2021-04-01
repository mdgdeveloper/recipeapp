import { useState } from 'react';

// ? ATOMS
import MenuToggle from '../atoms/Header/MenuToggle';
interface Props {
    
}

const Header = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);



    return (
        <div>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
        </div>
    )
}

export default Header
