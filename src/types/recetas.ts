
export enum Tipo {
    Carne = 'Carne',
    Pescado = 'Pescado',
    Pasta = 'Pasta',
    Verdura = 'Verdura',
    Postre = 'Postre',
    Caldos = 'Caldos'
}

export type IngredienteType = {
    ingrediente: {
        nombre: string,
        cal: number,
        precioUnidad: boolean,
        precio: number
    }
    cantidad: number,
    peso?: number,
}

export type Paso = {
    orden: number,
    descripcion: string,

}

export type Receta = {
    id: number,
    nombre: string,
    ingredientes: IngredienteType[];
    pasos: Paso[],
    tiempo: number,
    personas: number,
    tipo: Tipo,
    imagen: string,
}


export type IngredienteForm = {
    id: string,
    nombre: string;
    cantidad: number;
    peso: boolean;
}