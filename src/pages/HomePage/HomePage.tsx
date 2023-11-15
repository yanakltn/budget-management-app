//mui components
import { Container } from "@mui/material";
// components
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Analytics from "../../components/Analytics/Analytics";
import Transactions from "../../components/Transactions/Transactions";
import BottomNav from "../../components/BottomNav/BottomNav";

const HomePage = () => {
  return (
    <Container maxWidth="xs" sx={{ padding: "27px 0px" }}>
      <Header title="Home" />
      <Card />
      <Analytics />
      <Transactions />
      <BottomNav />
    </Container>
  );
};

export default HomePage;
