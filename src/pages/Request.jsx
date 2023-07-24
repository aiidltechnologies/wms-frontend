import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'


function Request() {

    const navigate=useNavigate()

  return (
    <Box ml={"auto"} mr={"auto"} display={"flex"} justifyContent={"space-around"}  >
    <Box mt={"10rem"} w={["80%", "60%", "40%"]} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} >
        <Box onClick={()=>navigate("/admin/login")} display={"flex"} justifyContent={"space-between"} mt={"10%"} mb={"10%"} w={["90%", "90%", "50%"]} ml={"auto"} mr={"auto"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"} padding={"5%"} borderRadius={"1rem"} cursor={"pointer"} > <Text fontSize='3xl'>ERROR</Text> <ArrowForwardIcon mt={"auto"} mb={"auto"} boxSize={6} /> </Box>

        <Box onClick={()=>navigate("/developer/login")} display={"flex"} justifyContent={"space-between"} mt={"10%"} mb={"10%"} w={["90%", "90%", "50%"]} ml={"auto"} mr={"auto"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"} padding={"5%"} borderRadius={"1rem"} cursor={"pointer"} > <Text fontSize='3xl'>ADDITION</Text> <ArrowForwardIcon mt={"auto"} mb={"auto"} boxSize={6} /> </Box>

    </Box>
</Box>
  )
}

export default Request