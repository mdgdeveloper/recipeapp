import { Image } from '@chakra-ui/react';

interface Props {
    img: string;
    
}

const Imagen = ({ img }: Props) => {
    return (
        <div>
             <Image src={img} alt="Recipe Image" />
        </div>
    )
    }

    export default Imagen;
