import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineCog6Tooth, HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useUploadBooking } from "../context/UploadBooking";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

function HeaderMenu() {
  const { toggleUploadBooking } = useUploadBooking();

  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li>

      <li>
        <ButtonIcon onClick={toggleUploadBooking}>
          <HiOutlineCog6Tooth />
        </ButtonIcon>
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
