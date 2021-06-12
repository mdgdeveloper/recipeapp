
import { Flex, Box, Button } from '@chakra-ui/react';
import { Receta } from '../../types/recetas';

// Preparar el Modal para insertar EditRecipe (to be created)
import EditRecipeForm from '../organisms/EditRecipeForm';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react"


// ? Atoms
import Imagen from '../atoms/Recipe/Imagen';
import Titulo from '../atoms/Recipe/Titulo';

// ? Molecules
import ListaIngredientes from './ListaIngredientes';
import ListaPasos from './ListaPasos';
import InfoReceta from './InfoReceta';

interface Props {
    receta: Receta;
    admin?: boolean;
}

const Recipe = ({ receta, admin }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    if (!receta.imagen.includes('http')) {
        const newReceta = `http://localhost:4000/images/${receta.imagen}`
        receta = { ...receta, imagen: newReceta };
    }
    return (
        <>
            <Flex
                w='100%'
                direction='column'
                wrap='wrap'
                mt={8}
            >
                <Box
                    textAlign='justify'
                >
                    <Titulo value={receta.nombre} />
                </Box>
                {admin ? <Box>
                    <Button
                        size='xs'
                        colorScheme='blue'
                        onClick={onOpen}
                    >Edit</Button>
                    <Button
                        ml={1}
                        size='xs'
                        colorScheme='red'

                    >Delete</Button>
                </Box> : <></>}
                <Box>
                    <InfoReceta data={receta} />
                </Box>
                <Flex
                    align='top'
                    justify='space-between'
                    direction={["column", "column", "row", "row"]}
                    wrap='wrap'
                    w='100%'
                >
                    <Box
                        w={['100%', '100%', '100%', '60%']}
                    >
                        <Imagen img={receta.imagen} />
                    </Box>
                    <Box
                        w={['100%', '100%', '100%', '38%']}
                    >
                        <ListaIngredientes ingredientes={receta.ingredientes} />
                    </Box>
                </Flex>
                <Box
                    mt={10}
                >
                    <ListaPasos pasos={receta.pasos} />
                </Box>
            </Flex>

            <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                
                >
                    <ModalHeader>Edita la receta</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <EditRecipeForm receta={receta} />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Edit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Recipe
