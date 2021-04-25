import { Image } from '@chakra-ui/react';

interface Props {
    img: string;

}

const Imagen = ({ img }: Props) => {
    return (
        <Image borderRadius={25} src={img} alt="Recipe Image" w='100%'/>
    )
}

export default Imagen;
