import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import AddRecipe from './AddRecipe';
import AddIngredient from './AddIngredient';

interface Props {

}

const Admin = (props: Props) => {
    const [page, setPage] = useState<JSX.Element>();

    return (
        <Box
            p={5}
            textAlign='center'
            w='90%'
        >
            Administration Page
            {page
                ? page
                : <Flex
                    justifyContent='center'
                    alignItems='center'
                >
                    <Box
                        p={5}
                        onClick={() => setPage(<AddRecipe />)}
                        cursor='pointer'
                    >Add a Recipe</Box>
                    <Box
                        p={5}
                        onClick={() => setPage(<AddIngredient />)}
                        cursor='pointer'
                    >Add an Ingredient</Box>
                    <Box
                        p={5}
                    >Edit a Recipe</Box>
                    <Box
                        p={5}
                    >Edit an Ingredient</Box>
                </Flex>}
        </Box>
    )
}



export default Admin;
