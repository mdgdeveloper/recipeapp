import { useState } from 'react';

import { Box, Flex, Button } from '@chakra-ui/react';

// Form Import Molecules
import FormNombre from '../molecules/Form/FormNombre';
import FormTiempo from '../molecules/Form/FormTiempo';
import FormPersonas from '../molecules/Form/FormPersonas';
import FormTipos from '../molecules/Form/FormTipos';
import FormIngredientes from '../molecules/Form/FormIngredientes';
import FormPasos from '../molecules/Form/FormPasos';
import FormImagen from '../molecules/Form/FormImagen';

// Types
import { Tipo, IngredienteForm } from '../../types/recetas';


interface Props {

}

const AddRecipeForm = (props: Props) => {
    const [nombre, setNombre] = useState<string>();
    const [tipo, setTipo] = useState<Tipo>();
    const [personas, setPersonas] = useState<number>();
    const [tiempo, setTiempo] = useState<number>();
    const [ingredientesAdded, setIngredientesAdded] = useState<IngredienteForm[]>();
    const [pasos, setPasos] = useState<string[]>([]);


    const submitRecipe = (event: any) => {
        event.preventDefault();
        // Submit recipe. 
        // Check errors here. 
        console.log('nombre', nombre);
        console.log('tipo', tipo);
        console.log(`personas`, personas);
        console.log(`tiempo`, tiempo);
        console.log(`ingredientesAdded`, ingredientesAdded)
        console.log(`pasos`, pasos);
    }


    return (
        <Box
            mt={10}
            w='90%'
        >
            <form
                onSubmit={submitRecipe}
            >
                <Flex
                    flexDirection='column'
                >
                    <FormNombre setNombre={setNombre}/>
                    <FormTipos setTipo={setTipo}/>
                    <Flex mb={8}>
                        <FormTiempo setTiempo={setTiempo}/>
                        <FormPersonas setPersonas={setPersonas} />
                    </Flex>
                    <FormIngredientes ingredientesAdded={ingredientesAdded} setIngredientesAdded={setIngredientesAdded} />
                    <FormPasos pasos={pasos} setPasos={setPasos}/>
                    <FormImagen />
                </Flex>
                <Button colorScheme="blue"
                type='submit'
                >Enviar</Button>
            </form>
        </Box>
    )
}

export default AddRecipeForm
