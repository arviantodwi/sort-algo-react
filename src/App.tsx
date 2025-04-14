import { FC } from "react";
import { Setup } from "./components/setup/setup";
import { Simulator } from "./components/simulator/simulator";

export const App: FC = () => {
  return (
    <>
      <Setup />
      <Simulator />
    </>
  );
};
