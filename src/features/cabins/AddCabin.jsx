// Components
import CreateCabinForm from "./CreateCabinForm";

// Ui
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cain-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cain-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
