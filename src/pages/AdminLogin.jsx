
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({});
    
    
    
        const handleLogin = () => {
            // navigate("/admin/request")
            console.log(inputs)
        }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(inputs)
    }



    return (

        <Box ml={"auto"} mr={"auto"} display={"flex"} justifyContent={"space-around"}  >
            <Box mt={"5em"} w={["80%", "60%", "60%"]} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} display={"flex"} justifyContent={"space-around"}>

                <FormControl w={"50%"} mt={"10%"} mb={"10%"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"} p={"4%"} >
                    <Text as='b' fontSize='5xl' mb={"10rem"} >Admin Login</Text>
                    <FormLabel mt={"10%"}>Email address</FormLabel>
                    <Input type='email' required name="email" id='email' value={inputs.email || ""} onChange={handleChange} />
                    <FormLabel mt={"10%"} >Password</FormLabel>
                    {/* <PasswordInput /> */}
                    <Input type='password' required name="password" id='password'  value={inputs.password || ""} onChange={handleChange} />
                    <Button onClick={handleLogin} mt={"10%"} bgColor={"orange"} cursor={"pointer"} w={"100%"} >Login</Button>
                </FormControl>
            </Box>
        </Box>
    )
}

export default AdminLogin






function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size='md'>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

