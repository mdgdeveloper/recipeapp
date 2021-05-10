import { Box, Flex, Input, Button } from '@chakra-ui/react';

interface Props {
    
}

const FormImagen = (props: Props) => {

    const sendImage = () => {

    }    
    
    const mostrarCambio = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const files = event.target.files;
        if(files){
            console.log(files[0]);         
        }
    }

    return (
        <Box>
        <Box
            textAlign='left'
            mb={2}
        >
        Escoge una imagen para cargar:
        </Box>
        <form
            onSubmit={sendImage} 
        >
        <Flex
            align="center"
            mr={5}
        >
            <Input 
            mr={2}
                type='file'
                placeholder='Escoge una imagen para cargar'
                onChange={mostrarCambio}
            />
            
            <Button type='submit'>
                Subir
            </Button>      
        </Flex>
        </form>
        </Box>
    )
}

export default FormImagen
