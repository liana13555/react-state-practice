import styled from '@emotion/styled';
import { MenuButton as ReachMenuButton, MenuItem as ReachMenuItem} from "@reach/menu-button";

export const MenuButton = styled(ReachMenuButton)`
    background-color: tomato;
    margin-right: 20px;
    margin-bottom: 20px;

    &[aria-expanded="true"] {
        background-color: blue;
    }
`

export const MenuItem = styled(ReachMenuItem)`
  display: flex;
  align-items: center;

  &[data-selected] {
  background: orange;
  }

  svg{
      margin-right: 8px;
  };
`

//Если нет svg используем grid:

// display: grid;
// grid-gap: 20px;
