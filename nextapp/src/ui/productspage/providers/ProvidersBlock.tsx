import ProviderCard from "./ProviderCard";

export interface IProviderCard {
  title: string;
  image: string;
  count: string;
}

const ArrProviderCards: IProviderCard[] = [
  {
    title: "Powering New Mexico",
    image: "/assets/images/productpage/providers/pnm.svg",
    count: "≈530 000",
  },
  {
    title: "San Diego Gas & Electric",
    image: "/assets/images/productpage/providers/sdge.svg",
    count: "≈1 030 000",
  },
  {
    title: "Southern California Edison",
    image: "/assets/images/productpage/providers/edison.svg",
    count: "≈14 000 000",
  },
  {
    title: "City of Anaheim",
    image: "/assets/images/productpage/providers/anaheim.svg",
    count: "≈358 000",
  },
  {
    title: "East Bay Municipal Utility",
    image: "/assets/images/productpage/providers/ebmud.svg",
    count: "≈1 400 000",
  },
  {
    title: "Sacramento Municipal Utility",
    image: "/assets/images/productpage/providers/smud.svg",
    count: "≈1 500 000",
  },
  {
    title: "Pacific Gas & Electric Company",
    image: "/assets/images/productpage/providers/pacific.svg",
    count: "≈5 600 000",
  },
  {
    title: "Los Angeles Departament of Water & Power",
    image: "/assets/images/productpage/providers/ladwp.svg",
    count: "≈1 400 000",
  },
  {
    title: "San Francisco Water Power Sewer",
    image: "/assets/images/productpage/providers/sfwps.svg",
    count: "≈380 000",
  },
];

export const ProvidersBlock = () => {
  return (
    <div>
      {ArrProviderCards.map((card, index) => (
        <ProviderCard key={index} {...card} />
      ))}
    </div>
  );
};
