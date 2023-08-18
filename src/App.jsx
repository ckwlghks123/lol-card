import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./Cards";
import Detail from "./Detail";
import useActions from "./useActions";
import { styled } from "styled-components";

function App() {
  const { state } = useActions();

  return (
    <BrowserRouter>
      <Menu>
        <h2>역대 롤드컵 우승팀</h2>
      </Menu>
      <Routes>
        {state.map(({ id, ...rest }) => {
          return (
            <Route
              path={`/:${id}`}
              key={id}
              element={<Detail content={rest} />}
            />
          );
        })}
        <Route path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Menu = styled.div`
  display: flex;
`;
