import React from 'react'
import {Image, Box, Stack, VStack, Text} from "@chakra-ui/react"
import img from "../assets/img.png"

const Footer = () => {
  return <Box 
  bgColor={'blackAlpha.900'} 
  color={'whiteAlpha.700'} 
  // maxHeight={['20','20']}
  // height={['24','50']}
  px={'14'} 
  py={['3','4']}
  >

    <Stack direction={['column', 'row']} height={'20'} alignItems={'center'} mt={'-1'} >
        <VStack w={'full'} alignItems={['center', 'flex-start']} >
            <Text fontWeight={'bold'} mb={'-0.5'} >About us</Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} mb={'-0.5'} >We are one stop solution to all your Crypto related queries.</Text>
        </VStack>

        <VStack w={'full'} alignItems={['center', 'flex-end']}>
            <Image src={img} w={'12'} h={'12'} mr={'10'} mb={'-0.5'}/>
            <Text mb={'-0.5'} >Developed By - Harsh Vardhan</Text>
        </VStack>

    </Stack>
    </Box>
  
}

export default Footer