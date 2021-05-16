import { useState, useEffect } from 'react';
import IngredienteAdd from '../../atoms/Form/IngredienteAdd';
import { Flex, Button } from '@chakra-ui/react';
import { IconButton, useDisclosure } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons";

// Ingredient Form 
import AddIngredient from '../../templates/AddIngredient';

// Modal for AddIngredient
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"

// Types to Import
import { IngredienteForm } from '../../../types/recetas';

interface Props {
    listaIngredientes: IngredienteForm[];
    setListaIngredientes: (ingredeientes: IngredienteForm[]) => void
    lista: IngredienteForm[];
    removeIngredientFromList: (ingredient: IngredienteForm) => void;
    addIngredient: (ingrediente: IngredienteForm) => void;

}

const IngredienteList = ({ listaIngredientes, setListaIngredientes, lista, addIngredient, removeIngredientFromList }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const addIngredientFromList = (ingredient: IngredienteForm) => {
        removeIngredientFromList(ingredient);
        addIngredient(ingredient);

    }



    return (
        <>
            <Flex
                w='100%'
                flexWrap='wrap'
                flexGap={2}
            >
                {lista.map(ingrediente => <IngredienteAdd
                    ingrediente={ingrediente}
                    addIngredientFromList={addIngredientFromList}
                />)}
                <IconButton
                    onClick={onOpen}
                    aria-label="Add Ingredient"

                    icon={<AddIcon />}
                    colorScheme='blue'
                    h={8}
                />
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Añadir nuevo ingrediente</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <AddIngredient listaIngredientes={listaIngredientes} setListaIngredientes={setListaIngredientes} onClose={onClose}/>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default IngredienteList
