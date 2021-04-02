import { Stack } from '@chakra-ui/react';

// ? Atoms
import MenuItem from '../atoms/Header/MenuItem';

interface Props {
    isOpen: boolean;
    
}

const MenuLinks = ({isOpen}: Props) => {
    return (
        <Stack
        spacing={8}
        align='center'
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to='/how'>How it Works</MenuItem>
        </Stack>


    )
}

export default MenuLinks
