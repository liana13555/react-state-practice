import styled from '@emotion/styled';
import ReachTooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";

export const Tooltip = styled(ReachTooltip)`
  padding: 8px;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
`;

// export const Tooltip = ({label, children }) => {
//     return <ReachTooltip label={label}>{children}</ReachTooltip>

// };  - удаляем .. потому что оригинальный Tooltip ожидает label и рендерит children


// Если на проекте захотим иконки обернуть в Tooltip, тогда иконки надо обернуть в <span> или в <div>