import { Box, Flex, Input, Button } from '@chakra-ui/react';

import { useApolloClient, useMutation, gql } from '@apollo/client';

const UPLOAD_FILE = gql`
    mutation uploadFile($file: FileUpload!){
        uploadFile(file: $file){
            url
        }
    }
`;

interface Props {

}

const FormImagen = (props: Props) => {

    const [ uploadFile ] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    })

    const handleFileChange = (e:any) => {
        const file = e.target.files[0];
        if(!file) return 
        uploadFile({ variables: { file }})
    }



    return (
        <Box>
            <Box
                textAlign='left'
                mb={2}
            >
                Escoge una imagen para cargar:
            </Box>
                    <Input
                        mr={2}
                        type='file'
                        placeholder='Escoge una imagen para cargar'
                        onChange={handleFileChange}
                    />
        </Box>
    )
}

export default FormImagen
