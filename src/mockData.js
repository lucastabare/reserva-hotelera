import indoorpool from "./assets/indorpol.jpg";
import bar from "./assets/bar.jpg";
import standar from "./assets/standar.jpg";
import outdoorpool from "./assets/outdoorpool.jpg";
import executive from "./assets/ejecutiva.jpg";
import withbalcony from "./assets/withbalcony.jpg";
import juniorsuite from "./assets/juniorsuite.jpg";
import suite from "./assets/suite.jpg";

const mockData = [
  {
    src: indoorpool,
    title: "Nuestra piscina cubierta",
    description: "Piscina cubierta de 25 m de largo con hamacas y sauna",
  },
  {
    src: bar,
    title: "Barra de cócteles",
    description: "Espléndida coctelería clásica con música en vivo",
  },
  {
    src: suite,
    title: "Nuestra suite",
    description: "Discreta y lujosa con servicio de mayordomo",
    cat: "room",
    price: 20000,
    stock: 4,
    notAvailablestart: new Date(2022, 5, 20).getTime(),
    notAvailableend: new Date(2022, 6, 25).getTime(),
  },
  {
    src: outdoorpool,
    title: "Piscina al aire libre",
    description: "Piscina infinita con impresionantes vistas al mar",
  },
  {
    src: juniorsuite,
    title: "Junior Suite con cocina",
    description: "Nuestras Suites Junior son perfectas para familias",
    cat: "room",
    price: 15000,
    stock: 10,
    notAvailablestart: new Date(2022, 5, 10).getTime(),
    notAvailableend: new Date(2022, 5, 10).getTime(),
  },
  {
    src: executive,
    title: "Habitación ejecutiva",
    description: "Nuestras salas de negocios con acceso al lounge",
    cat: "room",
    price: 10000,
    stock: 9,
    notAvailablestart: new Date(2022, 5, 10).getTime(),
    notAvailableend: new Date(2022, 5, 10).getTime(),
  },
  {
    src: withbalcony,
    title: "Habitaciones con balcón",
    description: "Habitaciones con increíbles vistas al mar",
    cat: "room",
    price: 9000,
    stock: 15,
    notAvailablestart: new Date(2022, 5, 10).getTime(),
    notAvailableend: new Date(2022, 5, 10).getTime(),
  },

  {
    src: standar,
    title: "Habitación estándar",
    description: "Habitaciones de 20 m2 con todas las comodidades",
    cat: "room",
    price: 8000,
    stock: 12,
    notAvailablestart: new Date(2022, 5, 10).getTime(),
    notAvailableend: new Date(2022, 5, 10).getTime(),
  },
];

export const chips = [
  { key: 0, label: "Flexibilidad de cancelación" },
  { key: 1, label: "Habitaciones estándar" },
  { key: 2, label: "Habitaciones ejecutivas" },
  { key: 3, label: "Acceso al salón" },
  { key: 4, label: "más filtros" },
];
export default mockData;
