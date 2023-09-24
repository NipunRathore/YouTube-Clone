import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
// feed component which fetches and displays a list of videos based on category
const Feed = () => {
  // component has 2 states - selectedcategory and videos 
  // selected category - string
  // videos - an array of videos fetched from API
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  // inside useEffect hook when selected category changes setvideos function is valled with 
  // fetch from API function sends get request to yt API with with query parameter q 
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    // the feed component returns a stack component that has two box components 
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* first box component contains the sidebar and a typography component that displays copyright */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        {/* sidebar component contains a list of categories that can be selected when a category selected the setSelectedCategory function called  */}
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      {/* second box component contains typo to display the selected category and videos component which displays a list of videos  */}

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
{/* videos component displays a list of videos passed as props.  */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

// box component is used for styling layout and design components. allows to add spacing borders padding andd other css rules
// stack component used to  vertically or horizontally stack child components within a parent component