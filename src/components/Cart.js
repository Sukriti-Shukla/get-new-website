import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const options = [
  { id: 1, desc: '1 lorem ipsum' },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' },
];
let totalPrice = 0;

interface PackageTierProps {
  title: string;
  options: Array<{ id: number, desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';
  const [num0, setNum0] = useState(0);
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>Rs {typePlan * num0}</Heading>
      <Stack>
        <div>
          <Button
            onClick={() => {
              if (num0 > 0) {
                setNum0(num0 - 1);
                totalPrice = totalPrice - typePlan;
              }
            }}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            -
          </Button>

          <Button
            size="md"
            marginLeft={2}
            marginRight={2}
            color={useColorModeValue(colorTextDark, colorTextLight)}
            bgColor={useColorModeValue(bgColorDark, bgColorLight)}
          >
            {num0}
          </Button>

          <Button
            onClick={() => {
              setNum0(num0 + 1);
              totalPrice = totalPrice + typePlan;
            }}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            +
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

const PackageTier1 = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';
  const [num1, setNum1] = useState(0);
  const price = { typePlan } * num1;
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>Rs {typePlan * num1}</Heading>
      <Stack>
        <div>
          <Button
            onClick={() => {
              if (num1 > 0) {
                setNum1(num1 - 1);
              }
            }}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            -
          </Button>

          <Button
            size="md"
            marginLeft={2}
            marginRight={2}
            color={useColorModeValue(colorTextDark, colorTextLight)}
            bgColor={useColorModeValue(bgColorDark, bgColorLight)}
          >
            {num1}
          </Button>

          <Button
            onClick={() => setNum1(num1 + 1)}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            +
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

const PackageTier2 = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';
  const [num2, setNum2] = useState(0);
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>Rs {typePlan * num2}</Heading>
      <Stack>
        <div>
          <Button
            onClick={() => {
              if (num2 > 0) {
                setNum2(num2 - 1);
              }
            }}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            -
          </Button>

          <Button
            size="md"
            marginLeft={2}
            marginRight={2}
            color={useColorModeValue(colorTextDark, colorTextLight)}
            bgColor={useColorModeValue(bgColorDark, bgColorLight)}
          >
            {num2}
          </Button>

          <Button
            onClick={() => {
              setNum2(num2 + 1);
            }}
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            +
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

const PackageTier3 = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';
  const [num2, setNum2] = useState(0);
  const navigate = useNavigate();
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      {/* <Heading size={'xl'}>Rs {totalPrice}</Heading> */}
      <Button
        size="md"
        color={useColorModeValue(colorTextLight, colorTextDark)}
        bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        onClick={() => {
          navigate('/sign-in');
        }}
      >
        Shop now
      </Button>
    </Stack>
  );
};

const Cart = () => {
  return (
    <Box py={6} px={5} min={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              Welcome to <Text color="purple.400">Cart</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Product 1'} typePlan={300} options={options} />
        <Divider />
        <PackageTier1
          title={'Product 2'}
          checked={true}
          typePlan={400}
          options={options}
        />
        <Divider />
        <PackageTier2 title={'Product 3'} typePlan={500} options={options} />
        <Divider />
        <PackageTier3 title={'Lorem Pro'} typePlan={500} options={options} />
      </Stack>
    </Box>
  );
};

export default Cart;
