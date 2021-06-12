import { Box, Input } from '@chakra-ui/react';

interface Props {
    setNombre: (nombre: string) => void;
    nombre?: string;
}

const Entrada = ({ nombre = '', setNombre }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setNombre(event.target.value);
    }

    return (
        <Box
        
        >
            <Input 
                onChange={handleChange}
            w='100%'
            defaultValue={nombre}
            />   
        </Box>
    )
}

export default Entrada
