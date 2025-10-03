// Données du catalogue d'ONG (version JS/JSX sans TypeScript)

import logo1 from '../assets/image1.jpg';
import logo2 from '../assets/image2.jpg';
import logo3 from '../assets/image3.jpg';
import logo5 from '../assets/image5.png';

export const ongList = [
  {
    id: 1,
    name: 'ONG Santé',
    desc: 'Accès aux soins dans les zones rurales.',
    cause: 'Améliorer l’accès aux soins de santé primaires pour les populations isolées.',
    action: ['En savoir+', 'dons', 'bénévoles'],
    image: logo1,
  },
  {
    id: 2,
    name: 'Éducation Espoir',
    desc: 'Soutien scolaire pour enfants défavorisés.',
    cause: 'Offrir une éducation de qualité et du matériel scolaire aux enfants défavorisés.',
    action: ['En savoir+','dons'],
    image: logo2,
  },
  {
    id: 3,
    name: 'Environnement Vert',
    desc: 'Protection de la nature et écologie.',
    cause: 'Préserver la biodiversité et promouvoir des pratiques écologiques durables.',
    action: ['En savoir+','bénévoles'],
    image: logo3,
  },
  { // donne une idée sur les personne en difficulté de respiration
    id:4,
    name:'Respire Libre',
    desc:'UNe ONG dédiée à la lutte contre les maladies respiratoires.',
    cause:'Améliorer la qualité de vie des personnes atteintes de maladies respiratoires à travers la sensibilisation, le soutien et la recherche.',
    action:['En savoir+','dons','bénévoles'],
    image:logo5,
    action: ['En savoir+', 'dons', 'bénévoles'],

  },
];

export default ongList;
