import './App.css';
import ProductList from "./components/productListComponent";
import { useSelector } from 'react-redux';
import { IStateProduct, } from './features/products/productSlice';
import { Row, Spacer, Modal, Input, Button, Text } from "@nextui-org/react";
import { ProductForm } from './components/productFrom';
function App() {
  const productList = useSelector((state: IStateProduct) => state);

  return (
    <div className="App">
      <Text h3>
        PRODUCTS LIST
      </Text>
      <Row>
        <ProductForm />
      </Row>
      <section>
        <ProductList products={productList.products} />
      </section>
    </div>
  );
}

export default App;
