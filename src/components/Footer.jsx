import React from 'react'
import {Image, Box, Stack, VStack, Text} from "@chakra-ui/react"
import img from "../assets/img.png"

const Footer = () => {
  return <Box 
  bgColor={'blackAlpha.900'} 
  color={'whiteAlpha.700'} 
  minHeight={'48'}
  px={'16'} 
  py={['6','8']}>

    <Stack direction={['column', 'row']} height={'full'} alignItems={'center'} >
        <VStack w={'full'} alignItems={['center', 'flex-start']} >
            <Text fontWeight={'bold'} >About us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} >We are one stop solution to all your Crypto related queries.</Text>
        </VStack>

        <VStack w={'full'} alignItems={['center', 'flex-end']}>
            <Image src={img} w={'24'} h={'24'} mt={['4','4']}/>
            <Text>Developed By</Text>
            <Text>Harsh Vardhan</Text>
        </VStack>

    </Stack>
    </Box>
  
}

export default Footer