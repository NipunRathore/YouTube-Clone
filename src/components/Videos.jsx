import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

// receives two props 
const Videos = ({ videos, direction }) => {

  // checks whether videos is defined and has a length greater than zero 
  // if length 0 then return loader 
  if(!videos?.length) return <Loader />;
  
  return (
    // if length not 0 then return  a stack component that arranges children in horizontal or vertical direction based on direction 
    // uses gap to apply spacing 
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        // box component wraps a videocard or channelcard , has key property idx which is the index of item in videos array
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
