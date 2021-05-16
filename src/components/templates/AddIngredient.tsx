import { useState } from 'react'
import { IngredienteForm } from '../../types/recetas';

import { Box, Button, Flex, Input, Select } from '@chakra-ui/react';

import { useMutation, gql } from '@apollo/client';

const ADD_INGREDIENT = gql`
    mutation addIngredient($nombre: String!, $precioUnidad: Boolean, $precio: Float, $cal: Float){
        addIngredient(nombre: $nombre, precioUnidad: $precioUnidad, precio: $precio, cal: $cal){
            id
            nombre
        }
    }
`;

interface Props {
    listaIngredientes?: IngredienteForm[];
    setListaIngredientes?: (ingredientes: IngredienteForm[]) => void;
    onClose?: () => void;

}

const AddIngredient = ({listaIngredientes, setListaIngredientes, onClose}: Props) => {
    const [nombre, setNombre] = useState<string>();
    const [precio, setPrecio] = useState<number>(0);
    const [calorias, setCalorias] = useState<number>(0);
    const [precioUnidad, setPrecioUnidad] = useState<boolean>(false);

    const [addIngredient] = useMutation(ADD_INGREDIENT,{
        onCompleted: (data) => {
            if(listaIngredientes && setListaIngredientes){

                const newLista = [...listaIngredientes]
                const newIngredient = {
                    id: data.addIngredient.id,
                    nombre: data.addIngredient.nombre,
                    cantidad: 0,
                    peso: false
                }
                newLista.push(newIngredient);
                setListaIngredientes(newLista);
            }
            console.log(data)
        }
    })

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'unidad') setPrecioUnidad(true);
        else setPrecioUnidad(false);
    }



    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
       
        if(nombre){
        const ingredienteToAdd = {
            nombre,
            precio,
            precioUnidad,
            cal: calorias
        }
        
        await addIngredient({ variables: ingredienteToAdd });
        }
        if(onClose){
            console.log('onClose');
            onClose();
        } 

    }


    return (
        <Box
            textAlign='left'>
            <Box>
                Añadir un ingrediente
            </Box>
            <form
                onSubmit={handleSubmit}
            >
                <Box>
                    <Box>
                        <Box>Nombre del ingrediente:</Box>
                        <Input
                            onChange={(event)=> setNombre(event.target.value.toLowerCase())}
                        />
                    </Box>
                    <Box>
                        <Box>Precio:</Box>
                        <Input 
                            onChange={(event)=> setPrecio(parseFloat(event.target.value))}
                        />
                    </Box>
                    <Box>
                        <Box>Calorias:</Box>
                        <Input 
                            onChange={(event)=> setCalorias(parseInt(event.target.value))}
                        />
                    </Box>
                    <Box>
                        <Select
                            onChange={handleSelectChange}
                            defaultValue='gramo'
                        >
                            <option id='gramo' value='gramo' selected>Precio por kg/l</option>
                            <option id='unidad' value='unidad'>Precio por unidad</option>
                           
                        </Select>
                    </Box>
                    <Button type='submit'
                    >Enviar</Button>
                </Box>
            </form>
        </Box>
    )
}

export default AddIngredient
