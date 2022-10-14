import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'



const Project = () => {
  return (
    <Box  width={"100%"}>
      <Box ><Text fontSize="23px" fontWeight="bold" mb="30px">Projects</Text></Box>

<SimpleGrid columns={[1,2,2,3,3]} w={{base:"85%"}} m="auto" gap="20px">

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
      <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
    </Flex>
  </Box>

<Box display="flex"justifyContent="space-around" alignItems="center" mt="5px" mb="5px" >
  <Flex gap="150px" alignItems="center">
    <Box ><a href='https://github.com/deepRaj06/indiamartBlueHeavenClone.git' target="_blank" rel="noreferrer" ><Button  variant="unstyled"><FaGithub fontSize={"25px"}/></Button></a></Box>
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
      <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
    </Flex>
  </Box >
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box ><a href="https://github.com/Bhavesh2302/Snapdeal" target="_blank" rel="noreferrer" ><Button  variant="unstyled"><FaGithub fontSize={"25px"}/></Button></a></Box>
    <Box ><a href='https://snapdeal-project-clone.netlify.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>

<Box boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" border="1px solid #06d6a0" borderRadius="15px">
  <Image borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} h="200px" w="100%" src="https://raw.githubusercontent.com/Bhavesh2302/dot-key-personal/master/Landing%20page.jpg" alt="giticon" />
 <Box mt="10px" mb="10px" ><Text fontWeight="bold">Dot & Key</Text></Box> 
  <Box padding={"10px"} textAlign="center">Cloned Dot & Key Private Limited 
manufactures chemicals focused on
skincare concerns.
</Box>
  <Box>
 
    <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px">
    <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></Box>
      <Box><Image  w={{base:"30px"}} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></Box>
      <Box>
          <Image  w={{base:"30px"}} alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </Box>
        <Box>
          <Image  w={{base:"30px"}} alt="imagenotfound"src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" />
        </Box>
    </Flex>
  </Box>
  <Flex  justifyContent="space-around" alignItems="center" mt="15px" mb="15px"> 
    <Box ><a href='https://github.com/Bhavesh2302/Dot-and-key-project-unit-4' target="_blank" rel="noreferrer" ><Button  variant="unstyled"><FaGithub fontSize={"25px"}/></Button></a></Box>
    <Box > <a href='https://dotandkey2.netlify.app/' target="_blank" rel="noreferrer" ><Button  variant="unstyled">Go live</Button></a></Box>
  </Flex>
</Box>
{/* 
<Box className='project-single-Box'>
  <Image src="https://camo.githubusercontent.com/36627d66ebf2ef094abd9d6860ce98d41f573298e5f7ef7de16c85363c53870a/68747470733a2f2f692e696d6775722e636f6d2f68737375484b712e706e67" alt="" />
  <div></div>
  <div>
  <h2>Tech Stacks</h2>
    <div className='tech-stacks'>
    <div><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" /></div>
      <div><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" /></div>
      <div><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" /></div>
      <div>
          <img alt="React"src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" />
        </div>
        <div>
          <img alt="chakra"src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" />
        </div>
    </div>
  </div>
  <div className='icon-div'>
    <div className='git-icon'><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="giticon" /></div>
    <div className='web-link'><a href='https://zee5-clone-project-construct-week.vercel.app/'><img src="https://i.imgur.com/5VDtPSy.png" alt="" /></a></div>
  </div>
</div> */}





</SimpleGrid>



    </Box>
  )
}

export default Project