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
      {
        orden: 2,
        descripcion: "Picar la cebolla en cuadraditos y salpimentarla.",
      },
      {
        orden: 3,
        descripcion: "Sofreir la cebolla. Acto seguido añadir la carne picada.",
      },
      {
        orden: 4,
        descripcion: "Una vez dorada la cebolla, añadir tomate frito artesano.",
      },
      {
        orden: 5,
        descripcion: "Separar la salsa bolonyesa. Impregnar con mantequilla la sarten.",
      },
      {
        orden: 6,
        descripcion: "Escurrir los espaguetis y añadirlos a la sartén.",
      },
    ],
    tiempo: 30,
    personas: 2,
    tipo: Tipo.Pasta,
    imagen: "https://cdn.kiwilimon.com/recetaimagen/20773/th5-640x426-9528.jpg",
  },
];
