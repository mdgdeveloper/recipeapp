import {Box, Button} from '@chakra-ui/react';
import { Tipo } from '../../../types/recetas';
import { useState, useEffect } from 'react';
import './TipoElement.style.css';

interface Props {
    tipoValue: Tipo;
    tipoSelected: Tipo | undefined;
    setTipoSelected: (tipo: Tipo) => void;
    
}

const TipoElement = ({ tipoValue, tipoSelected, setTipoSelected }: Props) => {
    const [style, setStyle] = useState<string>("blue");
   
   useEffect(()=>{
        if(tipoSelected===tipoValue){
            setStyle('red');
        }else{
            setStyle('blue');
        }

    },[tipoSelected, tipoValue])

    const selected = () => {
        setTipoSelected(tipoValue);
    }


    return (
                <Button colorScheme={style}
                onClick={()=>selected()}
                >{tipoValue}</Button>
    )
}

export default TipoElement;
