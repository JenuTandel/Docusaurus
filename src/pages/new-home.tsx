// src/pages/new-home.tsx
import { Container } from "@mantine/core";
import Layout from "@theme/Layout";
import { NewHomePage } from "../components/NewHomePage";

export default function NewHome() {
  return (
    <Layout>
      <Container size="xl">
        <NewHomePage />
      </Container>
    </Layout>
  );
}
