import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl m-2 mx-5">Home</h1>
      <Button variant="contained">
        <Link to="admin/login">Login</Link>
      </Button>
    </div>
  );
};
