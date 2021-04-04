import { IngredienteType } from '../../types/recetas';

import { Box, Heading } from '@chakra-ui/react';

import Ingrediente from '../atoms/Recipe/Ingrediente';

interface Props {
    ingredientes: IngredienteType[],
}



const ListaIngredientes = ({ ingredientes }: Props) => {

    return (
        <Box>
            <Heading  as="h2" size="md" pb={3}>Lista de ingredientes</Heading>
            {ingredientes.map((ingrediente, key) => {
                return (<Box key={key}><Ingrediente ingrediente={ingrediente} /></Box>);
            })}
        </Box>
    )
}

export default ListaIngredientes
