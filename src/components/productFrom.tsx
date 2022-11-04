import { useState } from 'react'
import { Row, Text, Input, Button, Modal, useInput } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productSlice';
import { store } from '../features/products/store';

export const ProductForm = () => {
  const [visible, setVisible] = useState(false);
  const { value: nameValue, bindings: nameBindings } = useInput("");
  const [nameError, setNameError] = useState("");
  const [gpaError, setGpaError] = useState("");
  const { value: gpaValue, bindings: gpaBindings } = useInput("");
  const dispatch = useDispatch<typeof store.dispatch>();
  function handler() {
    setVisible(true);
  }
  function closeHandler() {
    setVisible(false);
  }
  function handleAddNewProduct() {
    console.log("This was called:" + nameValue + gpaValue);
    setGpaError(gpaValue === "" ? "GPA is required" : "");

    setNameError(nameValue === "" ? "Name is required" : "");
    if (gpaValue === "" || nameValue === "") {
      return;
    } dispatch(addProduct({
      name: nameValue,
      gpa: gpaValue
    }))
    closeHandler()
  }

  return (
    <Row>
      <Button auto placeholder='Add' onPress={handler} css={{ margin: "0 auto" }} >Add</Button>
      <Modal
        closeButton
        aria-labelledby="Add new product"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add new product            </Text>
        </Modal.Header>
        <Modal.Body>

          <Input
            required
            type={"number"}
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="gpa"
            {...gpaBindings}
          />
          <Text color={"error"} size="$xs">{gpaError}</Text>
          <Input
            required
            bordered
            fullWidth
            {...nameBindings}
            color="primary"
            size="lg"
            placeholder="Name"
          />
          <Text color={"error"} size="$xs">{nameError}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleAddNewProduct} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  )
}

