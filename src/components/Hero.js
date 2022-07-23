import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function Hero(props) {
  const navigate = useNavigate();
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              Great Eagle Tech
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Giving wings
            </Text>{' '}
          </Heading>

          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            During disasters like flood, avalanche and wildfire often people get
            stranded in tough and hard to reach terrains. Hence a quick and
            efficient search operation is required to locate all the stranded
            people to quickly rescue them. Traditional search operations are
            often time taking and lack coordination. Thus, an innovative
            solution is required to expedite search operations as human lives
            are at the stake! We designed an intelligent autonomous coordinative
            multi-UAV system that can quickly search for the people/animals in
            the affected regions.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={() => {
                navigate('/store');
                props.onClickStore();
              }}
            >
              Visit Store
            </Button>
            <Button rounded={'full'}>Know more</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
        />
      </Flex>
    </Stack>
  );
}
