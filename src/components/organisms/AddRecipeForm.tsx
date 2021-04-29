import { Box, Flex, Button } from '@chakra-ui/react';

// Form Import Molecules
import FormNombre from '../molecules/Form/FormNombre';
import FormTiempo from '../molecules/Form/FormTiempo';
import FormPersonas from '../molecules/Form/FormPersonas';
import FormTipos from '../molecules/Form/FormTipos';
import FormIngredientes from '../molecules/Form/FormIngredientes';
import FormPasos from '../molecules/Form/FormPasos';


interface Props {

}

const AddRecipeForm = (props: Props) => {
    return (
        <Box
            mt={10}
            w='90%'

        >
            <form>
                <Flex
                    flexDirection='column'
                >
                    <FormNombre />
                    <FormTipos />
                    <Flex>
                        <FormTiempo />
                        <FormPersonas />
                    </Flex>
                    <FormIngredientes />
                    <FormPasos />
                </Flex>
                <Button colorScheme="blue">Enviar</Button>
            </form>
        </Box>
    )
}

export default AddRecipeForm
