import { useState, useEffect } from 'react';

import IngredienteList from './IngredienteList';
import IngredienteListAdded from './IngredienteListAdded';
import { IngredienteForm } from '../../../types/recetas';
import { Box, Input } from '@chakra-ui/react';

// Atoms for each element
interface Props {

}

const FormIngredientes = (props: Props) => {
    const [ingredientesAdded, setIngredientesAdded] = useState<IngredienteForm[]>();
    const [ingredientToAdd, setIngredientToAdd] = useState<string>();
    const [listaIngredientes, setListaIngredientes] = useState<string[]>(
        ["sal", "azucar", "mayonesa", "harina", "macarrones", "tomate", "cebolla", "lechuga", "oregano"]
    );
    const [buscaIngrediente, setBuscaIngrediente] = useState<string>("");


    

    // Removes an ingredient from the list of ingredientes added
    const removeIngredient = (ingredient: IngredienteForm) => {
        if (ingredientesAdded) {
            const newIngredientesAdded = ingredientesAdded.filter((ingrediente: IngredienteForm) =>
                ingrediente !== ingredient
            )
            setIngredientesAdded(newIngredientesAdded);
        }
        const newLista = [...listaIngredientes, ingredient.nombre];
        setListaIngredientes(newLista);
    }



    // Removes an ingredient from list after adding it to added ingredients. 
    const removeIngredientFromList = (ingredient: string) => {
        const newLista = listaIngredientes.filter( elemento => elemento !== ingredient );
        setListaIngredientes(newLista);

    }

        const addIngredient = (ingrediente: string) => {
            if (ingredientToAdd !== ".")
                if (!ingredientesAdded) {
                    const newIngredient: IngredienteForm = {
                        nombre: ingrediente,
                        cantidad: 1,
                        peso: false,
                    }
                    setIngredientesAdded([newIngredient]);
                } else {
                    let changed = false;
                    const auxIngrediente = ingredientesAdded.map((elemento: IngredienteForm) => {
                        if (elemento.nombre === ingrediente) {
                            elemento.cantidad++;
                            changed = true;
                        }
                        return elemento;
                    })

                    if (!changed) {
                        const newIngredient: IngredienteForm = {
                            nombre: ingrediente,
                            cantidad: 1,
                            peso: false,
                        }
                        auxIngrediente.push(newIngredient);
                    }
                    setIngredientesAdded(auxIngrediente);
                }
        }


    return (
        <>
            <Box><IngredienteListAdded lista={ingredientesAdded}  removeIngredient={removeIngredient}/></Box>
            <Box
                align='left'>
                Escoge ingredientes:
            </Box>
            <Input 
            placeholder='Busca un ingrediente'
                mb={6}
                onChange={( event: React.ChangeEvent<HTMLInputElement> ) => setBuscaIngrediente(event.target.value)}
            />

            <Box><IngredienteList
                lista={listaIngredientes.filter( ingrediente => ingrediente.toLowerCase().includes(buscaIngrediente.toLowerCase()) )}
                addIngredient={addIngredient}
                removeIngredientFromList={removeIngredientFromList}
            /></Box>
        </>
    )
}

export default FormIngredientes
