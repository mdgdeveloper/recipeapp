import { useState, useEffect } from 'react';

import IngredienteList from './IngredienteList';
import IngredienteListAdded from './IngredienteListAdded';
import { IngredienteForm } from '../../../types/recetas';
import { Box } from '@chakra-ui/react';

// Atoms for each element
interface Props {

}

const FormIngredientes = (props: Props) => {
    const [ingredientesAdded, setIngredientesAdded] = useState<IngredienteForm[]>();
    const [ingredientToAdd, setIngredientToAdd] = useState<string>();

    const ListaIngredientes = ["sal", "azucar", "mayonesa", "harina", "macarrones", "tomate", "cebolla", "lechuga", "oregano"];


    useEffect(() => {


        const addIngredient = (ingrediente: string) => {
            console.log('entraUseEffect');
            if (ingredientToAdd !== "")
                if (!ingredientesAdded) {
                    const newIngredient: IngredienteForm = {
                        nombre: ingrediente,
                        cantidad: 1
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
                            cantidad: 1
                        }
                        auxIngrediente.push(newIngredient);
                    }
                    console.log(`auxIngrediente`, auxIngrediente)
                    setIngredientesAdded(auxIngrediente);
                }
        }


        if (ingredientToAdd)
            addIngredient(ingredientToAdd);
    }, [ingredientToAdd])


    return (
        <>
            <Box><IngredienteListAdded lista={ingredientesAdded} /></Box>
            <Box
                align='left'>
                Escoge ingredientes:
            </Box>

            <Box><IngredienteList
                lista={ListaIngredientes}
                setIngredientToAdd={setIngredientToAdd}
            /></Box>
        </>
    )
}

export default FormIngredientes
