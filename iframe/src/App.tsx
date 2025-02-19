import { FC } from "react";
// import providers
import CommunicationProvider from "./providers/CommunicationProvider";

const App: FC = () => {
  return (
    <CommunicationProvider>
      <div>Test</div>
    </CommunicationProvider>
  );
};

export default App;
