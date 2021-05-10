import {InputGroup, Icon, InputLeftAddon, Input } from '@chakra-ui/react';
import { BsPeopleFill } from 'react-icons/bs';

interface Props {
    setPersonas: (personas: number) => void;
}

const FormPersonas = ({ setPersonas }: Props) => {
    return (
<InputGroup
ml={5}
>
<InputLeftAddon children={<Icon as={BsPeopleFill} color='gray.400'/> } />
<Input 
onChange={(event)=>setPersonas(parseInt(event.target.value))}
placeholder="personas" />
</InputGroup>
    )
}

export default FormPersonas
