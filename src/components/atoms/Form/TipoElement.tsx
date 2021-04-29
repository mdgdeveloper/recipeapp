import {Box} from '@chakra-ui/react';
import { useState } from 'react';
import './TipoElement.style.css';

interface Props {
    tipoValue: string;
    
}

const TipoElement = ({ tipoValue }: Props) => {
    const [style, setStyle] = useState<string>("tipo");

    const selected = () => {
        setStyle("tipo-selected")
    }

    return (
<Box
                p={5}
                cursor='pointer'
                mr={2}
                className={style}
                onClick={()=>selected()}
                >{tipoValue}</Box>
    )
}

export default TipoElement;
