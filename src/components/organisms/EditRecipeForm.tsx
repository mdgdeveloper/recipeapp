import { useState } from 'react';

import { Receta } from '../../types/recetas';

import { Box, Flex, Button } from '@chakra-ui/react';

import { useMutation, gql } from '@apollo/client';

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


// Mutation GraphQL

const ADD_RECIPE = gql`
    mutation addRecipe($nombre: String!, $tiempo: Int!, $personas: Int!, $tipo: String!, $pasos: [String!]!, $imagen: String, $ingredientes: [IngredientInput!]!
        ){
        addRecipe(nombre: $nombre, tiempo: $tiempo, personas: $personas, tipo: $tipo, pasos: $pasos, imagen: $imagen, ingredientes: $ingredientes){
            id
            }
    }
`;


interface Props {
    receta: Receta

}

const EditRecipeForm = ({ receta }: Props) => {
    const [nombre, setNombre] = useState<string>();
    const [tipo, setTipo] = useState<Tipo>();
    const [personas, setPersonas] = useState<number>();
    const [tiempo, setTiempo] = useState<number>();
    const [ingredientesAdded, setIngredientesAdded] = useState<IngredienteForm[]>();
    const [pasos, setPasos] = useState<string[]>([]);
    const [imagen, setImagen] = useState<string>();


    const [addRecipe] = useMutation(ADD_RECIPE, {
        onCompleted: (data) => {
            console.log(data);
        }
    })

    const submitRecipe = async (event: any) => {
        event.preventDefault();
        if(ingredientesAdded){
            const ingredientes = ingredientesAdded.map( (ingrediente: IngredienteForm) => (
                {
                    ingrediente: ingrediente.id, 
                    cantidad: ingrediente.cantidad, 
                    peso: ingrediente.peso
                }
            )
            );
            await addRecipe({variables: { nombre, tiempo, personas, tipo, pasos, imagen, ingredientes }})
        
            console.log('nombre', nombre);
            console.log('tipo', tipo);
            console.log(`personas`, personas);
            console.log(`tiempo`, tiempo);
            console.log(`ingredientes`, ingredientes)
            console.log(`pasos`, pasos);
            console.log('imagen', imagen);
        
      
        
        }
        // Submit recipe. 
        // Check errors here.
        

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
                    <FormNombre setNombre={setNombre} nombre={receta.nombre}/>
                    <FormTipos setTipo={setTipo} tipo={receta.tipo}/>
                    <Flex mb={8}>
                        <FormTiempo setTiempo={setTiempo} tiempo={receta.tiempo}/>
                        <FormPersonas setPersonas={setPersonas} personas={receta.personas} />
                    </Flex>
                    <FormIngredientes ingredientesAdded={ingredientesAdded} setIngredientesAdded={setIngredientesAdded} ingredientes={receta.ingredientes} />
                    <FormPasos pasos={pasos} setPasos={setPasos}/>
                    <FormImagen setImagen={setImagen}/>
                </Flex>
                <Button colorScheme="blue"
                type='submit'
                >Enviar</Button>
            </form>
        </Box>
    )
}

export default EditRecipeForm;
