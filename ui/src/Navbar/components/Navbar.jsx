import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Text,
  ButtonGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import Login from "../../login/components/Login";
import Registration from "../../registration/components/Registration";
import { Link } from "react-router-dom";

export default function Navbar() {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  const {
    isOpen: isOpenRegistration,
    onOpen: onOpenRegistration,
    onClose: onCloseRegistration,
  } = useDisclosure();

  return (
    <div>
      <Flex bg="white" py={4} px={6} boxShadow="md">
        <Box>
          <Link to="/home">
            <Text fontSize="xl" fontWeight="bold">
              Oralet
            </Text>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link to="/menu">
            <Button variant="ghost" mr={4}>
              Menü
            </Button>
          </Link>

          <Button variant="ghost" mr={4}>
            Dükkanlar
          </Button>
          <Button variant="ghost" mr={4}>
            Ödüller
          </Button>
          <ButtonGroup isAttached>
            <Button variant="solid" colorScheme="green" onClick={onOpenLogin}>
              Giriş Yap
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={onOpenRegistration}
            >
              Kaydol
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>

      <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
        <ModalContent>
          <ModalHeader>Giriş Yap</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login onClose={onCloseLogin} />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenRegistration} onClose={onCloseRegistration}>
        <ModalContent>
          <ModalHeader>Kaydol</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Registration onClose={onCloseRegistration} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
