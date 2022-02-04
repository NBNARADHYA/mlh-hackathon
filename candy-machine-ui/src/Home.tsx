import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <Container style={{ paddingTop: 200 }}>
      <Container
        maxWidth="xs"
        style={{
          position: "relative",
          // color: "white",
          marginBottom: 100,
          textAlign: "center",
        }}
      >
        <Typography variant="h5">
          Welcome! You can mint 1-on-1 NFT badges from your POD 22.1.11 mates
        </Typography>
      </Container>
      <Container
        maxWidth="xs"
        style={{ position: "relative", textAlign: "center" }}
      >
        <FormControl fullWidth>
          <InputLabel style={{ color: "yellow" }}>
            <b>Select Pod Member</b>
          </InputLabel>
          <Select
            label="Select Pod Member"
            variant="filled"
            color="secondary"
            onChange={(e) => {
              const podMember: string = e.target.value as string;
              navigate(`/mint/${podMember}`);
            }}
          >
            <MenuItem value={"mikael"}>Mikael Carpenter</MenuItem>
            <MenuItem value={"nikhil"}>Nikhil B N</MenuItem>
            <MenuItem value={"christian"}>Christian Garcia</MenuItem>
            <MenuItem value={"miguel"}>Jose Miguel Sarenas</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Container>
  );
};

export default Home;
