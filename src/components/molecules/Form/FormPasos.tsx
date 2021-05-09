import { Flex, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import Paso from '../../atoms/Form/Paso';
interface Props {
    
}

const FormPasos = (props: Props) => {
    // bloque de pasos almacenados (no se si es necesario)
    const [pasos, setPasos] = useState<string[]>([]);
    // Paso introducido en ese momento. 
    const [idActual, setIdActual] = useState<number>(0);
    // Inputs
    const [entradas, setEntradas] = useState<JSX.Element[]>([<Paso id={idActual} pasos={pasos} setPasos={setPasos}/>]);


    const addStep = () => {
        // Gestion del nuevo paso
        const newPasos = [...pasos];
        newPasos.push("");
        setIdActual(()=>{ return idActual + 1});
        setPasos(newPasos);
        
        // Creacion del nuevo input 
        const newEntradas: JSX.Element[] = [...entradas];
        newEntradas.push(<Paso id={idActual+1} pasos={pasos} setPasos={setPasos}/>);
        setEntradas(newEntradas);
    }
    

 
    return (
        <Box
        textAlign='left'
        >
        Introduce los pasos de la receta:
        {entradas ? entradas.map( entrada => entrada) : <></>}
        <Button
        w='100%'
            onClick={addStep}
            bg='blue.600'
            color='white'
            mb={6}
            mt={3}
        >Añadir un nuevo paso</Button>
        </Box>
    )
}

export default FormPasos
