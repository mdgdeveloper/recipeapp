
import Recipe from '../molecules/Recipe';
import { Receta } from '../../types/recetas';
interface Props {
    listaRecetas: Receta[];
}

const ListRecipes = (props: Props) => {
    return (
        <>
        {props.listaRecetas ? props.listaRecetas.map( (receta: Receta) => 
            (
                <Recipe receta={receta}/>
            )
            )
            : <></>}
        </>
        
    )
}

export default ListRecipes
