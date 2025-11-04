import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
const DropdownMenu = ()  => {
  return (
    <Dropdown ata-bs-theme="dark">
      <Dropdown.Toggle>
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><Link to={"/category/Comida"}>Comida</Link></Dropdown.Item>
        <Dropdown.Item><Link to={"/category/Farmacia"}>Farmacia</Link></Dropdown.Item>
        <Dropdown.Item><Link to={"/category/Tienda"}>Tienda</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;