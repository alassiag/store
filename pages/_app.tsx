import * as React from "react";
import Head from "next/head";
import {
  ChakraProvider,
  Heading,
  Text,
  Image,
  Container,
  Stack,
  Divider,
  Link,
  Box,
  Flex,
} from "@chakra-ui/react";
import {AppProps} from "next/app";

import theme from "../theme";
import {INFORMATION} from "../app/constants";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Tyni Home Deco</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Inicio de meta tags de licencia - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        <meta content="goncy" name="author" />
        <meta content="Gonzalo Pozzo" name="copyright" />
        {/* Fin de meta tags de licencia */}
      </Head>
      <ChakraProvider theme={theme}>
        <Container backgroundColor="white" borderRadius="sm" maxWidth="container.xl" padding={4}>
          <Stack spacing={8}>
            <Stack marginBottom={4} spacing={4}>
              <Image
                borderRadius="lg"
                boxShadow="0 0 8px 4px rgba(0,0,0,0.96)"
                height="100%"
                maxHeight={{base: "48", sm: "64"}}
                objectFit="cover"
                src={INFORMATION.banner}
              />
              <Stack
                alignItems="center"
                direction={{base: "column", sm: "row"}}
                spacing={{base: 3, sm: 6}}
              >
                <Box
                  backgroundColor="white"
                  borderRadius={9999}
                  marginLeft={{base: 0, sm: 6}}
                  marginTop={{base: -12, sm: -16}}
                  minWidth={{base: 24, sm: 32}}
                  padding={1}
                >
                  <Image
                    borderRadius={9999}
                    height={{base: 24, sm: 32}}
                    src={INFORMATION.avatar}
                    width={{base: 24, sm: 32}}
                  />
                </Box>
                <Stack
                  alignItems={{base: "center", sm: "flex-start"}}
                  spacing={3}
                  textAlign={{base: "center", sm: "left"}}
                >
                  <Stack spacing={0}>
                    <Heading>{INFORMATION.title}</Heading>
                    <Text color="gray.500" fontWeight="500">
                      {INFORMATION.description}
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    {INFORMATION.social.map((social) => (
                      <Link key={social.name} isExternal href={social.url}>
                        <Flex
                          alignItems="center"
                          borderRadius={9999}
                          boxShadow="0 0 5px 2px rgba(25,25,25,0.4)"
                          color="white"
                          height={10}
                          justifyContent="center"
                          transition="0.2s"
                          width={10}
                          _hover={{
                            boxShadow: "3px 3px 10px -4px rgba(0,0,0,0.9)",
                            transform: "scale(1.02)",
                            transition: " 0.2s",
                          }}
                        >
                          <Image
                            src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=3e3e3e`}
                          />
                        </Flex>
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Component {...pageProps} />
          </Stack>
          <Divider marginY={4} />
          <Stack backgroundColor="gray.800" bordertop="1px" paddingY={3}>
            <Text color="white" fontSize="sm" fontWeight="500" textAlign="center">
              {new Date().getFullYear()}. Tyni Home Deco - Seguinos en nuestras redes sociales
              {/*<Link isExternal href="https://instagram.com/tyni_home_deco" >*/}
              {/*</Link>*/}
            </Text>
            {/* Inicio de copyright - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia 
          <Text textAlign="center" color="white">

            © Copyright {new Date().getFullYear()}. Hecho con ♥ para la comunidad, por{" "}
            <Link isExternal href="https://gonzalopozzo.com">
              goncy
            </Link>
            .
          </Text>
           Fin de copyright */}
          </Stack>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
