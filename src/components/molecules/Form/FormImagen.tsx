import { useState } from 'react';
import { Image, Box, Flex, Input, Button } from '@chakra-ui/react';

import { useMutation, gql } from '@apollo/client';


const UPLOAD_FILE = gql`
    mutation uploadFile($file: FileUpload!){
        uploadFile(file: $file){
            url
            filename
        }
    }
`;

interface Props {
    setImagen: (imagen: string) => void;

}

const FormImagen = ({ setImagen }: Props) => {
    // Button management
    const [fileupload, setFileupload] = useState();
    const [imagenToShow, setImagenToShow] = useState();

    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: (data) => {
        setImagenToShow(data.uploadFile.url)
        setImagen(data.uploadFile.filename)
        }
    })

    const handleFileChange = async (e: any) => {
        const file = e.target.files[0];
        setFileupload(file);
    }

    const handleUploadFile = async () => {
        if (!fileupload) return
        await uploadFile({ variables: { file: fileupload } })

    }


    return (
        <Box>
            <Box
                textAlign='left'
                mb={2}
            >
                Escoge una imagen para cargar:
            </Box>
            <Flex>
                <Input
                    mr={2}
                    type='file'
                    placeholder='Escoge una imagen para cargar'
                    onChange={handleFileChange}
                />
                <Button
                    onClick={handleUploadFile}

                >Cargar imagen</Button>
            </Flex>
            <Box>
                {imagenToShow ? 
                <Image src={imagenToShow} alt="Imagen de la receta" /> : <></> }
            </Box>
        </Box>

    )
}


export default FormImagen
