import { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import Logo from '../atoms/Header/Logo';

// ? ATOMS
import MenuIcon from '../atoms/Header/MenuIcon';
import MenuItem from '../atoms/Header/MenuItem';
import CloseIcon from '../atoms/Header/CloseIcon';
interface Props {

}

const Header = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => setIsOpen(!isOpen);



    return (

        <Flex
            as='nav'
            align='center'
            justify='space-between'
            wrap='wrap'
            w='100%'
            mb={8}
            p={8}
            bg={["green.500", "green.500", "transparent", "transparent"]}
        >

            <Flex align='center'>
                <Logo />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggle}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/how">How It works </MenuItem>
                    <MenuItem to="/faetures">Features </MenuItem>
                    <MenuItem to="/pricing">Pricing </MenuItem>
                    <MenuItem to="/signup" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            color={["green.500", "green.500", "white", "white"]}
                            bg={["white", "white", "green.500", "green.500"]}
                            _hover={{
                                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                            }}
                        >
                            Create Account
                        </Button>
                    </MenuItem>
                </Flex>
            </Box>
        </Flex>

    )
}

export default Header
