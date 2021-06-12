import { IngredienteForm, IngredienteType } from '../types/recetas';


// Function that works with both types and converts IngredientForm to IngredientType

const ingredientTransform = (ingredientes : IngredienteType[] ) => {
    const result : IngredienteForm[] = [];
   
    if(ingredientes){
     
    ingredientes.map( (ingrediente: IngredienteType ) => {
        const peso = ingrediente.peso ? true : false;
        const cantidad = ingrediente.peso ? ingrediente.peso : ingrediente.cantidad;
        result.push({
            id: ingrediente.ingrediente.id || "0",
            nombre: ingrediente.ingrediente.nombre,
            cantidad: cantidad ,
            peso: peso,
        })
        return result;
       });
    }

    return result;
}

export { ingredientTransform }; 