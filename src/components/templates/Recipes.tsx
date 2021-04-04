import { Flex } from '@chakra-ui/react';

import ListRecipes from '../organisms/ListRecipes';




interface Props {

}

const Recipes = (props: Props) => {
    return (


   
            <Flex
                align='center'
                justify='space-between'
                direction={["column", "column", "row", "row"]}
                wrap='wrap'
                w='100%'
                mb={8}
                p={8}
                bg={["blue.500", "blue.500", "blue.500", "blue.500"]}
            >
                <ListRecipes />
               
            </Flex>

    )
}

export default Recipes
