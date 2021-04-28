import { IngredienteType } from '../../types/recetas';

import { Box, Heading } from '@chakra-ui/react';

import Ingrediente from '../atoms/Recipe/Ingrediente';

interface Props {
    ingredientes: IngredienteType[],
}



const ListaIngredientes = ({ ingredientes }: Props) => {

    return (
        <Box
        bgColor='#f1eee7'
        p={8}
        >
            <Heading  as="h2" size="lg" pb={3} >Ingredientes</Heading>
            {ingredientes.map((ingrediente, key) => {
                return (<Box key={key}><Ingrediente ingrediente={ingrediente} /></Box>);
            })}
        </Box>
    )
}

export default ListaIngredientes
