// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Ui } from "@testing/ui";

import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <Ui />

      <NxWelcome title="testintg" />

      <div />
    </>
  );
}

export default App;
