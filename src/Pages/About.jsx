import { Box, Text, Image } from "@chakra-ui/react";
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
      <Box w={"50%"} m={"auto"}>
              <Image w={"100%"} h={{ base: "150px", sm:"200px", md:"200px", lg:"250px"}} borderRadius={"10px"} src= {"https://i.imgur.com/DQIrxA0.jpeg"} alt={"about"}/>
            </Box>
        <Text fontWeight={"bold"} fontSize="20px" textAlign="left">
          {" "}
         Hii I'm Bhavesh Jain
        </Text>
      </Box>
      <Box w={{base:"80%",sm:"80%",md:"75%"}} mb="10px"  m="auto">
        <Text textAlign={"left"}>
        A dynamic Full Stack Web Developer with a strong foundation in full-stack web development with around 2 years of hands-on experience in the product-based industry ( Cointab Software Pvt. Ltd. ), specialized in cutting-edge technologies like NodeJS, ExpressJS, MongoDB, SQL, ReactJS, Redux and AngularJS and Third Party API Integrations. Beyond coding, I’m a cricket, badminton and volleyball enthusiast and a relentless explorer of new technologies.
        </Text>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default About;
