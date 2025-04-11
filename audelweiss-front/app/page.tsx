import CustomTitle from '@/components/atoms/CustomTitle';
import SingleSlider from '@/components/modules/SingleSlider';
import MultipleColumns from '@/components/modules/MultiplesColumns';
import illustration from '@/app/assets/images/illustration-exemple.svg';

// TODO : Dynamiser ces données avec celles issues de Strapi pour le composant "Slider simple"
const slides = [
  {
    id: 1,
    subtitle: 'Basé dans les Hautes-Alpes & fait avec amour',
    title: 'Des créations uniques au crochet',
    content: 'Chaque pièce est soigneusement confectionnée à la main dans les Hautes-Alpes. Offrez-vous ou à vos proches un savoir-faire authentique, alliant douceur et originalité.',
    image: 'https://picsum.photos/2000/500',
    link: { label: 'Découvrir mes créations au crochet', href: '/boutique/crochet' },
  },
  {
    id: 2,
    subtitle: 'Savoir-faire local & matériaux naturels',
    title: 'Des créations en bois gravé sur-mesure',
    content: 'Chaque pièce en bois est gravée avec précision et passion. Apportez une touche naturelle et chaleureuse à votre intérieur.',
    image: 'https://picsum.photos/2000/801',
    link: { label: 'Découvrir mes créations en bois', href: '/boutique/bois' },
  },
  {
    id: 3,
    subtitle: 'Textiles personnalisés & impressions durables',
    title: 'Du flocage sur tissu à votre image',
    content: 'T-shirts, tote bags, sweats... Donnez vie à vos idées avec un flocage textile de qualité, réalisé avec soin dans mon atelier. Créations uniques, messages personnalisés et petits tirages à la demande.',
    image: 'https://picsum.photos/1400/801',
    link: { label: 'Découvrir mes flocages textiles', href: '/boutique/flocage' },
  }
];

const qualitiesColumns = [
  {
    id: 1,
    image: illustration,
    title: 'Créations en crochet',
    content: 'Des pièces uniques faites à la main dans les Hautes-Alpes, pour un style chaleureux et authentique. Chaque création est imaginée avec soin, réalisée avec passion, et pensée pour durer. Que ce soit pour un cadeau ou pour soi, ces pièces apportent une touche de douceur et d’originalité à votre quotidien, tout en soutenant un artisanat local et éthique.',
    link: {
      label: 'Découvrir ma collection au crochet',
      href: '/boutique/crochet',
    },
  },
  {
    id: 2,
    image: illustration,
    title: 'Objets en bois gravé',
    content: 'Personnalisez vos objets en bois avec une gravure fine, idéale pour des cadeaux uniques et naturels. Chaque pièce est travaillée dans un bois issu de sources durables, puis gravée avec soin dans mon atelier. Que ce soit pour marquer un événement, une date ou un prénom, le bois gravé ajoute une dimension émotionnelle à vos objets du quotidien.',
    link: {
      label: 'Découvrir mes pièces de bois gravé',
      href: '/boutique/bois',
    },
  },
  {
    id: 3,
    image: illustration,
    title: 'Flocage sur textile',
    content: 'T-shirts, sweats, tote bags… chaque pièce est imprimée à la demande dans mon atelier. Vous choisissez votre message, vos couleurs, et je m’occupe de tout. Le flocage permet un rendu net, durable et totalement personnalisable, parfait pour les petits événements, les cadeaux symboliques ou simplement pour porter fièrement ce qui vous ressemble.',
    link: {
      label: 'Découvrir mes flocages',
      href: '/boutique/flocage',
    },
  },
];


export default function Home() {
  return (
    <>
      {/* TODO : Ce titre h1 avec les données issues de la page d'accueil */}
      <CustomTitle level={1} className='sr-only'>Des créations artisanales et originales sur mesure</CustomTitle>
      <SingleSlider slides={slides} />
      <MultipleColumns columns={qualitiesColumns}></MultipleColumns>
    </>
  );
}
