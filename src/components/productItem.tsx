import { IProduct, removeProduct } from "../features/products/productSlice"
import { Tr, Td, IconButton } from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { store } from "../features/products/store";
type Props = {
  product: IProduct,
}
export default function ProductItem({ product }: Props) {
  const dispatch = useDispatch<typeof store.dispatch>();
  function onDelete() {
    dispatch(removeProduct(
      { id: product.id }
    ))
  }


  return (
    <Tr>
      <Td>{product.id}</Td>
      <Td>{product.name}</Td>
      <Td isNumeric>{product.gpa}</Td>
      <Td><IconButton aria-label="delete product" onClick={() => { onDelete() }}
        icon={<DeleteIcon w='5' h='5' color="red.500" />} /></Td>
    </Tr>);
}

