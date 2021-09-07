import { Collapsible } from '../Collapsible/Collapsible'
import { Container } from './App.styled';
import { Tooltip } from '../Tooltip/Tooltip';

export const App = () => {
  return (
    <Container >
      <Tooltip label = "TOOOOOOOOOLTIP">
        <button>Hello</button>
      </Tooltip>
      
      <Collapsible>Content</Collapsible>

    </Container>
  );
}

export default App;
