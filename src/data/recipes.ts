import { Receta, Tipo } from "../types/recetas";
export const data: Receta[] = [
  {
    id: 1,
    nombre: "Espaguetis carbonara",
    ingredientes: [
      {
        nombre: "espaguetis",
        cantidad: 1,
        peso: 100,
      },
      {
        nombre: "cebolla",
        cantidad: 1,
      },
      {
        nombre: "champiñones",
        cantidad: 1,
        peso: 100,
      },
      {
        nombre: "bacon",
        cantidad: 1,
        peso: 150,
      },
    ],
    pasos: [
      {
        orden: 1,
        descripcion: "Poner a hervir los espaguetis",
      },
    ],
    tiempo: 30,
    personas: 2,
    tipo: Tipo.Pasta,
  },
];
