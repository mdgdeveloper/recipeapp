import {InputGroup, Icon, InputLeftAddon, InputRightAddon, Input } from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';

interface Props {
    setTiempo: (tiempo: number) => void;
    
}

const FormTiempo = ({ setTiempo}: Props) => {
    return (
<InputGroup>
<InputLeftAddon children={<Icon as={FaRegClock} color='gray.400'/> } />
<Input placeholder="tiempo" 
    onChange={(event)=>setTiempo(parseInt(event.target.value))}
/>
<InputRightAddon children="minutos" />
</InputGroup>
    )
}

export default FormTiempo
