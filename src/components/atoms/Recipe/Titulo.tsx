import { Heading } from '@chakra-ui/react';
interface Props {
    value: string;
}

const Titulo = ({ value }: Props) => {
    return (
        <Heading as='h1' size="xl" fontWeight='bold' letterSpacing={-1}>
            {value}
        </Heading>
    )
}

export default Titulo;