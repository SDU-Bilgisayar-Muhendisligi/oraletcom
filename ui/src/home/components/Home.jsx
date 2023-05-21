import React from "react";
import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Oralet'e Hoş Geldiniz
      </Heading>
      <Text fontSize="lg" mb={6}>
        Lezzetli kahve ve yiyecek seçeneklerimizi keşfedin.
      </Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        <Link to="/product/caramel-macchiato">
          <Box borderRadius="lg" overflow="hidden">
            <Image
              src="/caramel-macchiato.jpg"
              alt="Coffee 1"
              objectFit="cover"
            />
            <Box p={4}>
              <Heading as="h2" size="md" mb={2}>
                Karamel Macchiato
              </Heading>
              <Text>
                İmza espresso lezzetimiz, zengin karamel aromasıyla buluşuyor,
                üzerine süt ve vanilya şurubu ekleniyor. Sıcak veya buzlu olarak
                keyfini çıkarın.
              </Text>
            </Box>
          </Box>
        </Link>
        <Box borderRadius="lg" overflow="hidden">
          <Image
            src="/pumpkin-spice-latte.jpeg"
            alt="Coffee 2"
            objectFit="cover"
          />
          <Box p={4}>
            <Heading as="h2" size="md" mb={2}>
              Kabak Baharatlı Latte
            </Heading>
            <Text>
              Kabak, tarçın ve karanfil aromalarına aşık olun. Espresso ve
              buharla ısıtılmış süt ile karıştırılır. Sınırlı bir süre için
              sunulmaktadır.
            </Text>
          </Box>
        </Box>
        <Box borderRadius="lg" overflow="hidden">
          <Image
            src="/mocha-frappuccino.jpeg"
            alt="Coffee 3"
            objectFit="cover"
          />
          <Box p={4}>
            <Heading as="h2" size="md" mb={2}>
              Mocha Frappuccino
            </Heading>
            <Text>
              Kahve, süt ve buzun klasik bir karışımı, üzerine moka sosu
              eklenerek hazırlanır. Üzerine çırpılmış krema eklenerek servis
              edilir. Ferahlatıcı bir lezzet için mükemmeldir.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
