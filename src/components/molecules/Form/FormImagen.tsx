import { Box, Input } from '@chakra-ui/react';
import axios from 'axios';

interface Props {
    
}

const FormImagen = (props: Props) => {

    const mostrarCambio = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const files = event.target.files;
        if(files){
            console.log(files[0]);         
        }
    }

    return (
        <Box
            textAlign="left"

        >
            Escoge una imagen para cargar:
            <Input 
                mt={3}
                mb={5}
                type='file'
                placeholder='Escoge una imagen para cargar'
                onChange={mostrarCambio}
            />            
        </Box>
    )
}

export default FormImagen
