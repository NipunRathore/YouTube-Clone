import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// component name 
const ChannelDetail = () => {
  // the component has 2 states, channelDetail and videos.
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
// uses the useParams hook to get url of the channel 
  const { id } = useParams();

  // useEffect hook used to fetch data from youtube API using fetchFromAPI function defined in fetchfromAPI 
  // two api requests are made one to fetch channel details 
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);
// another to fetch list of videos uploaded by channel 
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    // box component from mui used to define layout of channelDetail 
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {/* display channel card at top of page  */}
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      {/* second box component used to display videos uploaded by channel  */}
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
