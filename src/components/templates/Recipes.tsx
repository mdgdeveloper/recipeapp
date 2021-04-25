import ListRecipes from '../organisms/ListRecipes';


// GraphQL services
import { useQuery, gql } from '@apollo/client';


// Template of Recipes
// Content: all the recipes obtained and passed as argument
// Version 0.1.1 


// This constant should be stored in the proper module in
const GET_ALL_RECIPES = gql`
query{
    getAllRecipes{
      nombre,
      pasos,
      ingredientes{
              ingrediente{
          nombre
        },
        cantidad,
        peso
      },
      pasos,
      tiempo,
      personas,
      tipo,
      imagen  
    }
  } 
`

interface Props {

}

const Recipes = (props: Props) => {
    const { loading, error, data } = useQuery(GET_ALL_RECIPES);
    if(error){
        console.log(`error`, error)
    }else{
        console.log(`data`, data)
    }


    return (
        <>
        { loading ? <div>Loading</div> :
            <ListRecipes listaRecetas={data.getAllRecipes}/>
        }
        </>
            
    )
}

export default Recipes
