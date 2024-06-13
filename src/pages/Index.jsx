import { Container, Box, Text, VStack, Button, Image, Heading, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const professionals = [
  {
    name: "João Silva",
    specialization: "Eletricista",
    description: "Especializado em instalações elétricas residenciais e comerciais.",
    image: "/images/eletricista.jpg",
  },
  {
    name: "Maria Oliveira",
    specialization: "Pedreira",
    description: "Experiência em construção e reforma de alvenaria.",
    image: "/images/pedreira.jpg",
  },
  {
    name: "Carlos Pereira",
    specialization: "Pintor",
    description: "Pintura residencial e comercial com acabamento de alta qualidade.",
    image: "/images/pintor.jpg",
  },
];

const Index = () => {
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    navigate("/request-quote");
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Encontre Profissionais Especializados
      </Heading>
      <VStack spacing={8}>
        {professionals.map((professional, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Flex align="center">
              <Image borderRadius="full" boxSize="150px" src={professional.image} alt={professional.name} mr={6} />
              <Box>
                <Heading as="h2" size="lg">{professional.name}</Heading>
                <Text fontSize="xl" color="gray.500">{professional.specialization}</Text>
                <Text mt={4}>{professional.description}</Text>
                <Button mt={4} colorScheme="teal" onClick={handleRequestQuote}>
                  Solicitar Orçamento
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;