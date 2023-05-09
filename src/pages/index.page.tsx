import * as Styled from "./styled";
import Sidebar from "components/Sidebar";
import Home from "./Home";

export default function App() {
  return (
    <Styled.Layout>
      <Home />
      <Sidebar />
    </Styled.Layout>
  );
}
