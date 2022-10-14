import { Box, Text } from "@chakra-ui/react";
import React from "react";


const About = () => {
  return (
    <Box w="100%"  height={{base:"370px",sm:"330px",md:"300px"}} mt="200px" mb="130px">
      <Box w={{base:"80%",sm:"80%",md:"75%"}}  paddingBottom={"30px"}  m="auto" textAlign={"center"}>
        <Text fontWeight={"bold"} fontSize="23px">
          About Me
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text fontWeight={"bold"} fontSize="20px" textAlign="left">
          {" "}
          I'm Bhavesh Jain
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text textAlign={"left"}>
          A MERN developer having 1000+hrs of hands on experience in web
          development and always energetic and eager to learn new things, also
          collaborative, flexible and adaptable who loves to develop the
          websites using mern stack. Ambitious and hardworking individual with
          competency in web development and looking forward to work in the
          software industry.
        </Text>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default About;
