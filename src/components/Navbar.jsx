import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

// to render a navbar component at the top of the screen 
const Navbar = () => (
  // uses the stack, link and searchbar component of material UI 
  // stack used to stack child components horizontally and align them in center vertically 
  // it has serveral props 
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    {/* used to create a clickable link that navigates to specific route to prop that defines the path to navigate to  */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* child component that displays logo */}
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
