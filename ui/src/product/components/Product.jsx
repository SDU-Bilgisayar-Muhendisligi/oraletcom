import React from 'react'
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react';


export default function Product() {
    return (
        <Box p={8}>
          <Box display="flex" alignItems="center" mb={4}>
            <Image src="/caramel-macchiato.jpg" alt="Coffee" width={200} height={200} mr={4} />
            <Box>
              <Heading as="h2" size="lg" mb={2}>
              Karamel Macchiato
              </Heading>
              <Text fontSize="lg" mb={4}>

              İmza espresso'muz, yoğun karamel aromasıyla buluşur ve üzerine süt ve vanilya şurubu eklenir.              </Text>
              <Button colorScheme="green">Sepete Ekle</Button>
            </Box>
          </Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Açıklama
          </Text>
          <Text>
          Karamel Macchiato, Oralet'in klasik bir içeceğidir. Taze demlenmiş espresso, buharla ısıtılmış süt ve lezzetli karamel ile vanilya aromalarının harika bir kombinasyonuyla yapılır. Bu içecek, tatlılık ile espresso yoğunluğunun mükemmel dengesini sağlar ve üzerinde kadifemsi köpükle süslenir. Sıcak ya da buzlu tercih etmenize bağlı olarak, kahve isteğinizi karşılayacak bir zevkli lezzettir.
          </Text>
        </Box>
      );
}
