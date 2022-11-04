import { IProduct } from '../features/products/productSlice'
import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import ProductItem from './productItem';
type Props = {
  products: IProduct[];
}

function ProductList({ products }: Props) {
  const columns = [
    { key: 'id', lable: 'ID' },
    { key: 'name', lable: 'NAME' },
    { key: 'gpa', lable: "GPA" },
    { key: 'action', lable: "" }
  ]
  return (
    <TableContainer>
      <Table variant={"striped"} size={'lg'} width={"80vw"} margin={"0 auto"}>
        <Thead><Tr>

          {
            columns.map(item => (<Th key={item.key}>{item.lable}</Th>))
          }
        </Tr></Thead>
        <Tbody>
          {
            products.map(product => (<ProductItem key={product.id} product={product} />))
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ProductList
