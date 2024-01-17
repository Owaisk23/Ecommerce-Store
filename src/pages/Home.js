import NavBar from "../features/navbar/navbar";
import ProductList from "../features/product-list/ProductList";

export default function Home() {
  return (
    <div>
        <NavBar>
            <ProductList></ProductList>
        </NavBar>
    </div>
  )
}
