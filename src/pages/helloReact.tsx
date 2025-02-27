import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";

export default function Hello() {
  // const { colorMode, setColorMode } = useColorMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      setIsClient(true);
    }
  }, []);

  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <h1>Hello React</h1>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>

      {/* Render the button only after confirming it's client-side */}
      {/* {isClient && (
        <Button
          variant="default"
          onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
        >
          {colorMode === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode"}
        </Button>
      )} */}
    </Layout>
  );
}
