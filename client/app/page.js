import { fetchProducts } from "./lib/actions";
import BrandRow from "./ui/components/Home/BrandRow/BrandRow";
import Cover from "./ui/components/Home/Cover/Cover";
import DetailedCards from "./ui/components/Home/DetailedCards/DetailedCards";
import Row from "./ui/components/Home/Row/Row";
import SearchRow from "./ui/components/Home/SearchRow/SearchRow";
import TipsRow from "./ui/components/Home/TipsRow/TipsRow";
import WhyRow from "./ui/components/Home/WhyRow/WhyRow";





export default async function Home() {

  const newProducts = await fetchProducts(1, 8, '', '', '', '', '', '', '', '', '', '', '', '', '', { cache: 'no-store' });

  let length = (newProducts?.products && newProducts.products.length);


  return (
    <div>
      <Cover />
      <SearchRow />
      <Row />
      <DetailedCards title={'Latest Cars'} data={newProducts} length={length} />
      <BrandRow />
      <WhyRow />
      <TipsRow />
    </div>
  );
}
