// App.tsx
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import { ConnectButton, Layout } from "./components";
import AccountModal from "./components/AccountModal";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider theme={theme}>
      <Layout>
        {/* Our connect button will only handle opening */}
        <ConnectButton handleOpenModal={onOpen} />
        {/* Our Account modal will handle open state & closing */}
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}
