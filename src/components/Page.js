import React from "react";
import {
    Container,
    Flex,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    GridItem,
    FormControl,
    FormLabel,
    Input, 
    Select,
    Checkbox,
    Button,
    HStack,
    Divider,
    AspectRatio,
    Img
} from '@chakra-ui/react';

function Page () {
    return (
        <Container maxWidth='container.xl' padding={0}>
            <Flex height='100vh' paddingY={10}>
                <VStack
                spacing={10}
                padding={10}
                w='full'
                h='full'
                alignItems='flex-start'>
                    <VStack spacing={2} alignItems='flex-start'>
                        <Heading size='2xl'>Your details</Heading>
                        <Text>Click here if you already have a acount</Text>
                    </VStack>
                <SimpleGrid columns={2} columnGap={3} rowGap={6}>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                                <Input placeholder="First name"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Last name</FormLabel>
                                <Input placeholder="Last name"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                                <Input placeholder="Adress"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>City</FormLabel>
                                <Input placeholder="City"/>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <FormControl>
                            <FormLabel>Country</FormLabel>
                                <Select>
                                    <option value='usa'>Unitaed states of america</option>
                                    <option value='uk'>Unitaed kingdom</option>
                                    <option value='india'>India</option>
                                </Select>
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Checkbox defaultChecked>Ship to the billing address</Checkbox>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Button size='lg' width='full'>Place order</Button>
                    </GridItem>
                </SimpleGrid>
                
                </VStack>
                <VStack
                spacing={10}
                padding={10}
                bgColor='gray.200'
                w='full'
                h='full'
                alignItems='flex-start'>
                    <VStack spacing={2} alignItems='flex-start'>
                        <Heading size='2xl'>Your cart</Heading>
                        <Text>You can change the price by<br></br><Button variant='link'>Clicking here</Button></Text>
                        
                    </VStack>
                    <HStack justifyContent='space-between' width='full'>
                        <HStack padding={0} spacing={1}>
                            <AspectRatio ratio={1} w={20}>
                                <Img href="www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0DyottdOy5oQgPWoKt-N2p&ust=1646051555581000&source=images&cd=vfe&ved=2ahUKEwjI96SD8p_2AhUF0nMBHaRyDv8QjRx6BAgAEAk"/>
                            </AspectRatio>
                            <VStack alignItems='flex-start' padding={0} spacing={2}>
                                <Heading>Penny board</Heading>
                                <Text>uh382213sd</Text>
                            </VStack>
                        </HStack>
                        <Heading size='sm'>$119.00</Heading>
                    </HStack>
                    <HStack justifyContent='space-between' width='full'>
                        <Text></Text>
                        <Heading size='sm'></Heading>
                    </HStack>
                    <HStack justifyContent='space-between' width='full'>
                        <Text></Text>
                        <Heading size='sm'></Heading>
                    </HStack>
                    <HStack justifyContent='space-between' width='full'>
                        <Text></Text>
                        <Heading size='sm'></Heading>
                    </HStack>
                    <Divider height='0.7' bgColor='blackAlpha.500' />
                    <HStack justifyContent='space-between' width='full'>
                        <Text></Text>
                        <Heading size='sm'></Heading>
                    </HStack>
                </VStack>
            </Flex>
        </Container>
    )
}
export default Page;