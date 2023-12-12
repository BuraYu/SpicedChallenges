import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const totalLights = [
  { id: 1, isOn: true, name: "Kitchen" },
  { id: 2, isOn: false, name: "Bedroom" },
  { id: 3, isOn: false, name: "Bathroom" },
  { id: 4, isOn: false, name: "Garage" },
  { id: 5, isOn: true, name: "Porch" },
  { id: 6, isOn: false, name: "Garden" },
  { id: 7, isOn: true, name: "Office" },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState({ totalLights });
  const countTrueLights = totalLights.filter((light) => light.isOn).length;

  function handleToggle(lightId) {
    setLights(lights.map((arg) => (lightId === arg.id ? !isOn : lights)));
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        sumLights={countTrueLights}
        lights={lights}
        handleToggle={handleToggle}
      />
    </Layout>
  );
}
