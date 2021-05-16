import { useState, useEffect } from 'react';

import IngredienteList from './IngredienteList';
import IngredienteListAdded from './IngredienteListAdded';
import { IngredienteForm } from '../../../types/recetas';
import { Box, Input } from '@chakra-ui/react';

// Atoms for each element

// GraphQL services
import { useQuery, gql } from '@apollo/client';


const GET_ALL_INGREDIENTS = gql`
query{
    getAllIngredients{
      id,
      nombre,
  } 
}
`

interface Props {
    ingredientesAdded: IngredienteForm[] | undefined;
    setIngredientesAdded: (ingredientesAdded: IngredienteForm[]) => void;

}

const FormIngredientes = ({ ingredientesAdded, setIngredientesAdded }: Props) => {
    const [ingredientToAdd, setIngredientToAdd] = useState<string>();
    const [listaIngredientes, setListaIngredientes] = useState<IngredienteForm[]>();
    const [buscaIngrediente, setBuscaIngrediente] = useState<string>("");

    const { loading, error, data } = useQuery(GET_ALL_INGREDIENTS);

    useEffect(() => {
        if(error){
            console.log(`error`, error)
        }else
        {   
            if(data){
            console.log('ingredientes', data)
            const initialIngredients : IngredienteForm[] = data.getAllIngredients.map( (ingrediente: any) => {
                return({
                    id: ingrediente.id,
                    nombre: ingrediente.nombre,
                    cantidad: 0,
                    peso: false
                })
            } )
            setListaIngredientes(initialIngredients);
            }
        }
    }, [loading, error,data])
   

    // Removes an ingredient from the list of ingredientes added
    const removeIngredient = (ingredient: IngredienteForm) => {
        if (ingredientesAdded) {
            const newIngredientesAdded = ingredientesAdded.filter((ingrediente: IngredienteForm) =>
                ingrediente !== ingredient
            )
            setIngredientesAdded(newIngredientesAdded);
        }
        if(listaIngredientes){
        const newLista = [...listaIngredientes, ingredient];
        setListaIngredientes(newLista);
        }
    }

    // Removes an ingredient from list after adding it to added ingredients. 
    const removeIngredientFromList = (ingredient: IngredienteForm) => {
        if(listaIngredientes){
        const newLista = listaIngredientes.filter(elemento => elemento !== ingredient);
        setListaIngredientes(newLista);
        }
    }

    const addIngredient = (ingrediente: IngredienteForm) => {
        if (ingredientToAdd !== ".")
            if (!ingredientesAdded) {
                const newIngredient: IngredienteForm = ingrediente;
                setIngredientesAdded([newIngredient]);
            } else {
                let changed = false;
                const auxIngrediente: IngredienteForm[] = ingredientesAdded.map((elemento: IngredienteForm) => {
                    if (elemento.nombre === ingrediente.nombre) {
                        elemento.cantidad++;
                        changed = true;
                    }
                    return elemento;
                })

                if (!changed) {
                    const newIngredient: IngredienteForm = ingrediente;
                    auxIngrediente.push(newIngredient);
                }
                setIngredientesAdded(auxIngrediente);
            }
    }

    const editIngredient = (ingrediente: IngredienteForm) => {
        if (ingredientesAdded) {
            const auxIngrediente: IngredienteForm[] = ingredientesAdded.map((elemento: IngredienteForm) => {
                console.log('elemento', elemento)
                if (elemento.nombre === ingrediente.nombre) {
                    elemento.cantidad = ingrediente.cantidad;
                    elemento.peso = ingrediente.peso;
                }
                return elemento;
            });
            setIngredientesAdded(auxIngrediente);
        }
    }



return (
    <>
        <Box><IngredienteListAdded lista={ingredientesAdded} removeIngredient={removeIngredient} editIngredient={editIngredient} /></Box>
        <Box
            align='left'>
            Escoge ingredientes:
        </Box>
        <Input
            placeholder='Busca un ingrediente'
            mb={6}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBuscaIngrediente(event.target.value)}
        />
        {listaIngredientes ? 
        <Box><IngredienteList
            lista={listaIngredientes.filter(ingrediente => ingrediente.nombre.toLowerCase().includes(buscaIngrediente.toLowerCase()))}
            addIngredient={addIngredient}
            setListaIngredientes={setListaIngredientes}
            listaIngredientes={listaIngredientes}
            removeIngredientFromList={removeIngredientFromList}
        /></Box> 
        :
        <></> }
    </>
)
}

export default FormIngredientes
