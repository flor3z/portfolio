import './App.css';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Image,
  SimpleGrid,
  GridItem,
  Grid,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import picture from './Images/me-portfolio-crop2.png';

function App() {
  return (
    <div>
      <Container height={'40px'} bg={'blue.200'} as="section" minWidth="100vw">
        <Flex
          justify="space-between"
          alignItems={'center'}
          alignContent={'center'}
        >
          <Box color="white">
            <Flex justify={'space-between'}>
              <Box marginRight={'10px'}>
                <b>MF</b>
              </Box>

              <Box>
                <i>Matheo Florez</i>
              </Box>
            </Flex>
          </Box>
          <Box color="white">Envision & Create</Box>
        </Flex>
      </Container>
      <Flex flexDirection={'column'}>
        <Container as="section" maxWidth="5xl">
          <SimpleGrid p="10px" my="50px" minChildWidth="250px" spacing={10}>
            <Box boxSize={'sm'}>
              <Image
                background={'rgb(244, 246, 246)'}
                bg={
                  'linear-gradient(0deg, rgba(244,246,246,1) 9%, rgba(172,167,156,1) 75%)'
                }
                transition={'transform .5s'}
                _hover={{ transform: 'scale(1.05)' }}
                borderRadius={'20px'}
                boxSize="350px"
                src={picture}
                border={'2px solid #90cdf4'}
                boxShadow="2px 2px 2px 2px rgba(0,0,0,0.6)"
              />
            </Box>

            <Box>
              <Heading size="4xl" my="30px">
                <Text>Hello there!</Text>
              </Heading>

              <Text fontSize="2xl">
                Powered by the curiosity to learn, I have the resiliance to move
                past challenges and transform conceptual ideas into realization.
                Take a trip through my journey and learn more about me below!
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
        <Container as="section" maxWidth={'5xl'}>
          <Grid templateColumns={'repeat(6, 1fr)'} bg={'gray.100'}>
            <GridItem p={'10px'} colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Pomodoro Timer</Heading>
                    <Text>
                      A little description for the each portfolio project
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Visit Page
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem p={'10px'} colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Pomodoro Timer</Heading>
                    <Text>
                      A little description for the each portfolio project
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Visit Page
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem p={'10px'} colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Pomodoro Timer</Heading>
                    <Text>
                      A little description for the each portfolio project
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Visit Page
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem p={'10px'} colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Pomodoro Timer</Heading>
                    <Text>
                      A little description for the each portfolio project
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Visit Page
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem p={'10px'} colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Pomodoro Timer</Heading>
                    <Text>
                      A little description for the each portfolio project
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Visit Page
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem p={'10px'} colSpan={{ base: 6, lg: 2, xl: 1 }}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Pomodoro Timer</Heading>
                    <Text>
                      A little description for the each portfolio project
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Visit Page
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </Container>
      </Flex>
    </div>
  );
}

export default App;
