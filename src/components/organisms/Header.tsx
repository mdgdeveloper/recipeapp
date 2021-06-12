import { useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import Logo from '../atoms/Header/Logo';

// ? ATOMS
import MenuIcon from '../atoms/Header/MenuIcon';
import MenuItem from '../atoms/Header/MenuItem';
import CloseIcon from '../atoms/Header/CloseIcon';
interface Props {
    setAdmin: (admin: boolean) => void;
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
            p={8}
            bg={["#F1EEE7", "#F1EEE7", "#F1EEE7", "#F1EEE7"]}
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
                    <MenuItem to="/add">Add </MenuItem>
                    <MenuItem to="/pricing">Pricing </MenuItem>
                    <MenuItem to="/" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            color={["black", "black", "black", "black"]}
                            bg={["black", "black", "#F1EEE7", "#F1EEE7"]}
                        >
                            Create Account
                        </Button>
                    </MenuItem>
                    <Button
                        size="sm"
                        rounded="md"
                        color={["black", "black", "black", "black"]}
                        bg={["black", "black", "#F1EEE7", "#F1EEE7"]}
                        onClick={() => props.setAdmin(true)}

                    >
                        Admin
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header
