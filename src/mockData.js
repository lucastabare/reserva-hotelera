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
    src: standar,
    title: "Habitación estándar",
    description: "Habitaciones de 20 m2 con todas las comodidades",
    cat: "habitaciones",
    price: 8000,
    stock: 12,
    notAvailablestart: new Date(2021, 3, 10).getTime(),
    notAvailableend: new Date(2021, 3, 10).getTime(),
  },
  {
    src: outdoorpool,
    title: "Piscina al aire libre",
    description: "Piscina infinita con impresionantes vistas al mar",
  },
  {
    src: executive,
    title: "Habitación ejecutiva",
    description: "Nuestras salas de negocios con acceso al lounge",
    cat: "habitaciones",
    price: 10000,
    stock: 9,
    notAvailablestart: new Date(2021, 3, 10).getTime(),
    notAvailableend: new Date(2021, 3, 10).getTime(),
  },
  {
    src: withbalcony,
    title: "Habitaciones con balcón",
    description: "Habitaciones con increíbles vistas al mar",
    cat: "habitaciones",
    price: 9000,
    stock: 15,
    notAvailablestart: new Date(2021, 3, 10).getTime(),
    notAvailableend: new Date(2021, 3, 10).getTime(),
  },
  {
    src: juniorsuite,
    title: "Junior Suite con cocina",
    description: "Nuestras Suites Junior son perfectas para familias",
    cat: "habitaciones",
    price: 15000,
    stock: 10,
    notAvailablestart: new Date(2021, 3, 10).getTime(),
    notAvailableend: new Date(2021, 3, 10).getTime(),
  },
  {
    src: suite,
    title: "Nuestra suite",
    description: "Discreta y lujosa con servicio de mayordomo",
    cat: "habitaciones",
    price: 20000,
    stock: 4,
    notAvailablestart: new Date(2021, 3, 20).getTime(),
    notAvailableend: new Date(2021, 3, 25).getTime(),
  },
];

export const chips = [
  { key: e, label: "Cancellation Flexibility" },
  { key: 1, label: "Standard rooms" },
  { key: 2, label: "Executive rooms" },
  { key: 3, label: "Access to lounge" },
  { key: 4, label: "more filters" },
];
export default mockData;
