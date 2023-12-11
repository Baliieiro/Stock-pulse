import PropTypes from "prop-types";
import useStock from "../hooks/useStock";
import { useNavigate } from "react-router-dom";

ButtonDelete.propTypes = {
  itemName: PropTypes.string,
  itemId: PropTypes.number,
};

export default function ButtonDelete({ itemName, itemId }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();
  function handleClick() {
    if (confirm(`Tem certeza que quer excluir o item ${itemName}`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  }
  return (
    <button className="button is-danger is-small" onClick={handleClick}>
      Excluir
    </button>
  );
}
