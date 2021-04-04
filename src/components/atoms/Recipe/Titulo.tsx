import { Heading } from '@chakra-ui/react';
interface Props {
    value: string;
}

const Titulo = ({ value }: Props) => {
    return (
        <Heading>
            {value}
        </Heading>
    )
}

export default Titulo;