
import Recipe from '../molecules/Recipe';
import { Receta } from '../../types/recetas';
interface Props {
    listaRecetas: Receta[];
    admin: boolean;
}

const ListRecipes = (props: Props) => {
    return (
        <>
        {props.listaRecetas ? props.listaRecetas.map( (receta: Receta) => 
            (
                <Recipe receta={receta} admin={props.admin} />
            )
            )
            : <></>}
        </>
        
    )
}

export default ListRecipes
