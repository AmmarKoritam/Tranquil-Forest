// Library
import styled from "styled-components";

// Components
import Logo from "./Logo";
import MainNav from "./MainNav";

import Uploader from "../data/Uploader";
import { useUploadBooking } from "../context/UploadBooking";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { isUploadBooking } = useUploadBooking();

  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {isUploadBooking && <Uploader />}
    </StyledSidebar>
  );
}

export default Sidebar;
