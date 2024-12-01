import {
    Box,
    Flex,
    Image,
    SimpleGrid,
    Text,
    UnorderedList,
    ListItem
  } from "@chakra-ui/react";
  import React from "react";
  
  const Work = () => {
    return (
      <Box
        w={"100%"}
        m={"auto"}
        h="100%"
        mt="200px"
        mb="140px"
      >
        <Text
          fontWeight={"660"}
          fontSize={"23px"}
          mb={"10px"}
          pt={"30px"}
        >
          Work
        </Text>
        <Box
          w={{ base: "90%", sm: "90%", md: "90%", lg: "75%" }}
          m={"auto"}
          textAlign="center"
        >
          <Box>
          <Text
            fontSize={{ base: "18px", sm: "18px", md: "21px", lg: "23px" }}
            fontWeight={"700"}
          >
            1. Four AM Consulting Pvt. Ltd., Kota (Rajasthan)
          </Text>
          <Flex flexWrap="wrap" justifyContent={"center"} alignItems="center">
            <Text
              fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={"500"}
            >
              Software Engineer (Full Stack)
            </Text>
            -
            <Text
              fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={"500"}
            >
              Sept 2024 – Present
            </Text>
          </Flex>
          <Text
            mt="20px"
            fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight={"700"}
            textAlign="center"
          >
            Tech-Stack used at work:
          </Text>
          <Flex
            w={{ base: "90%", sm: "80%", md: "80%", lg: "75%" }}
            m={"auto"}
            flexWrap="wrap"
            alignItems={"center"}
            justifyContent={"center"}
            mt="25px"
            gap={{ base: "20px", sm: "25px", md: "30px", lg: "40px" }}
          >
            <Box
              w={{ base: "60px", sm: "60px", md: "85px", lg: "95px" }}
              h={{ base: "60px", sm: "60px", md: "85px", lg: "95px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="htmlpic"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="cssicon"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="jsicon"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                alt="nodejs"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="express"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
            w="70%"
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
            alt="mongodb"
          />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"
                alt="mongoose"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                src="https://shubham0442.github.io/icons/github.svg"
                alt="github"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                src="https://i.imgur.com/whJA5pP.png"
                alt="bootsrap"
              />
            </Box>
          </Flex>
          <Text
            fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight={"700"}
            mt="20px"
          >
            Key Responsibilities:
          </Text>
          <Box w={{ base: "100%", sm: "80%", md: "70%", lg: "60%" }} m={"auto"}>
            <UnorderedList
              fontSize={{ base: "14px", sm: "15px", md: "16.5", lg: "17.5px" }}
              fontWeight={"500"}
              textAlign="left"
            >
              <ListItem>
                Developing a dashboard to streamline healthcare and clinical
                research with intuitive data visualization.{" "}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
        <hr style={{ marginTop: "20px" }} />
          <Box>
            <Text
              fontSize={{ base: "18px", sm: "18px", md: "21px", lg: "23px" }}
              fontWeight={"700"}
            >
              Cointab Software Pvt. Ltd., Mumbai (Maharashtra)
            </Text>
            <Flex flexWrap="wrap" justifyContent={"center"} alignItems="center">
              <Text
                fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
                fontWeight={"500"}
              >
                Software Engineer (Full Stack)
              </Text>
              -
              <Text
                fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
                fontWeight={"500"}
              >
                Dec 2022 – Aug 2024
              </Text>
            </Flex>
            <Text
              mt="20px"
              fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={"700"}
              textAlign="center"
            >
              Tech-Stack used at work:
            </Text>
            <Flex
              w={{ base: "90%", sm: "80%", md: "80%", lg: "75%" }}
              m={"auto"}
              flexWrap="wrap"
              alignItems={"center"}
              justifyContent={"center"}
              mt="25px"
              gap={{ base: "20px", sm: "25px", md: "30px", lg: "40px" }}
            >
              <Box
                w={{ base: "60px", sm: "60px", md: "85px", lg: "95px" }}
                h={{ base: "60px", sm: "60px", md: "85px", lg: "95px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="htmlpic"
                  w="70%"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="cssicon"
                  w="70%"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="jsicon"
                  w="70%"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                  alt="pic"
                  w="70%"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                  alt="pic"
                  w="70%"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  id="material-ui"
                  src="https://i.imgur.com/fY51ndu.png"
                  alt="material-ui"
                  w="60%"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s ease-in-out"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  w="70%"
                  id="tailwind"
                  src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                  alt="tailwind"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image w="70%" src="https://i.imgur.com/vQ6quTK.png" alt="nodejs" />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image w="70%" src="https://shubham0442.github.io/icons/github.svg" alt="typescript" />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  w="70%"
                  src="https://i.imgur.com/whJA5pP.png"
                  alt="bootsrap"
                />
              </Box>
              <Box
                w={{ base: "55px", md: "85px" }}
                h={{ base: "55px", md: "85px" }}
                p={{ base: "5px", sm: "5px", md: "10px" }}
                boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                borderRadius="50%"
                transition="all 0.6s"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="20px"
              >
                <Image
                  w="70%"
                  src="https://i.imgur.com/v6ufV2v.png"
                  alt="bootsrap"
                />
              </Box>
            </Flex>
            <Text
              fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={"700"}
              mt="20px"
            >
              Key Responsibilities:
            </Text>
            <Box w={{ base: "100%", sm: "80%", md: "70%", lg: "60%" }} m={"auto"}>
              <UnorderedList
                fontSize={{ base: "14px", sm: "15px", md: "16.5", lg: "17.5px" }}
                fontWeight={"500"}
                textAlign="left"
              >
                <ListItem>
                Engineered a system to export data from internal systems to external system’s APIs.
                </ListItem>
                <ListItem>
                Developed and implemented a complete system for seamless integration with third-party APIs.
                </ListItem>
                <ListItem>
                Designed and developed pivot tables maintaining the hierarchy of configuration levels through code enhancing the data analysis capabilities and improved reporting.
                </ListItem>
                <ListItem>
                Created a proprietary API for secure data upload and download, facilitating external API agent’s interactions by streamlining data exchange processes, resulting in faster and more reliable data transfers.
                </ListItem>
                <ListItem>
                Developed a robust system to pull data from external databases and ensure continuous synchronization with internal SQL databases.
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Work;