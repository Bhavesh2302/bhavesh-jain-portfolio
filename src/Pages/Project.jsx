import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'



const Project = () => {
  return (
    <Box  width={"100%"}>
      <Box ><Text fontSize="23px" fontWeight="bold" mb="30px">Projects</Text></Box>

<SimpleGrid columns={[1,2,2,3,3]} w={{base:"85%"}} m="auto" gap="20px">
<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"  border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://i.imgur.com/C6xSROD.png" alt="project-image" />
  <Box mt="10px" mb="10px" ><Text fontWeight="bold">Bag It Up</Text></Box>
  <Box padding={"10px"} textAlign="center"> Bag It Up is a solo e-commerce project offering stylish, durable, and elegant bags.
</Box>
  <Box >
 
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>
    </Flex>
  </Box>

<Box display="flex"justifyContent="space-around" alignItems="center" mt="5px" mb="5px" >
  <Flex gap="150px" alignItems="center">
    <Box ><a href='https://github.com/Bhavesh2302/bag-it-up' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box ><a href='https://bag-it-up.netlify.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
  </Box>

</Box>

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"  border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://i.imgur.com/PohH8u1.png" alt="project-image" />
  <Box mt="10px" mb="10px" ><Text fontWeight="bold">Foodie</Text></Box>
  <Box padding={"10px"} textAlign="center"> Foodie is a food ordering app designed to enhance the dining experience.
</Box>
  <Box >
 
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>
    </Flex>
  </Box>

<Box display="flex"justifyContent="space-around" alignItems="center" mt="5px" mb="5px" >
  <Flex gap="150px" alignItems="center">
    <Box ><a href='https://github.com/Bhavesh2302/quad-goals' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box ><a href='https://foodie-goals.netlify.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
  </Box>

</Box>

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"  border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://raw.githubusercontent.com/deepRaj06/indiamartBlueHeavenClone/master/Screenshots/landingPage1.png" alt="" />
  <Box mt="10px" mb="10px" ><Text fontWeight="bold">Blue Heaven Cosmetics</Text></Box>
  <Box padding={"10px"} textAlign="center">Cloned Blue Heaven Cosmetics is a company that is majorly in manufacturing cosmetics.
</Box>
  <Box >
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px" >
      <Box><Image w={{base:"30px"}}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image w={{base:"30px"}}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image w={{base:"30px"}}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
    <Box>
    <FaGithub fontSize={"30px"}/>
    </Box>
    </Flex>
  </Box>

<Box display="flex"justifyContent="space-around" alignItems="center" mt="5px" mb="5px" >
  <Flex gap="150px" alignItems="center">
    <Box ><a href='https://github.com/deepRaj06/indiamartBlueHeavenClone.git' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box ><a href='https://indiamart-blue-heaven.netlify.app/index.html' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
  </Box>

</Box>




<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://github.com/Bhavesh2302/Snapdeal/raw/bhavesh/Imageicons/homepage.png" alt="" />
  <Box mt="10px" mb="10px" ><Text fontWeight="bold">Snapdeal</Text></Box>
  <Box padding={"10px"} textAlign="center">Cloned Snapdeal is E-commerce website 
  having multiple varities of products.</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image   w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image   w={{base:"30px"}}src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image   w={{base:"30px"}}src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box>
    <FaGithub fontSize={"30px"}/>
    </Box>
    </Flex>
  </Box >
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box ><a href="https://github.com/Bhavesh2302/Snapdeal" target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box ><a href='https://snapdeal-dealhub.netlify.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://raw.githubusercontent.com/Bhavesh2302/dot-key-personal/master/Landing%20page.jpg" alt="giticon" />
 <Box mt="10px" mb="10px" ><Text fontWeight="bold">Dot & Key</Text></Box> 
  <Box padding={"10px"} textAlign="center">Cloned Dot & Key Private Limited is a pioneering company in the skincare industry, dedicated to manufacturing chemicals specifically formulated to address a wide range of skincare concerns.
</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>

    </Flex>
  </Box>
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px"> 
    <Box ><a href='https://github.com/Bhavesh2302/Dot-and-key-project-unit-4' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box > <a href='https://dot-and-key-three.vercel.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>


<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://i.imgur.com/0UerBwY.png" alt="giticon" />
 <Box mt="10px" mb="10px" ><Text fontWeight="bold">Bitrix24</Text></Box> 
  <Box padding={"10px"} textAlign="center">Bitrix24 is a client management solution that provides a platform for businesses to organize and track interactions with potential or existing clients and partners.
</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>
    </Flex>
  </Box>
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px"> 
    <Box ><a href='https://github.com/Bhavesh2302/Bitrix-24-clone' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box > <a href='https://bitrix24-project.netlify.app' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://i.imgur.com/HSXkgXT.png " alt="giticon" />
 <Box mt="10px" mb="10px" ><Text fontWeight="bold">Toggl Track</Text></Box> 
  <Box padding={"10px"} textAlign="center">Toggl Track is a simple & powerful time tracker that helps you learn how much your time is worth. With this time tracking app you'll be able to start tracking your hours.
</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>
    </Flex>
  </Box>
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px"> 
    <Box ><a href='https://github.com/Bhavesh2302/toggl-track-clone' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Github Link</Button></a></Box>
    <Box > <a href='https://toggl-track-clone.vercel.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>


    





</SimpleGrid>



    </Box>
  )
}

export default Project