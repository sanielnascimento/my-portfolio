// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">
                Oi,<br></br> Eu sou o {userData.nameUser.split(" ")[0]}!
              </Text>
            </Flex>
            <Text as="h1" type="heading2" color="grey3">
              <Text as="span" type="heading1" color="grey3">
                Desenvolvedor
              </Text>{" "}
              <Text as="span" type="heading1" color="brand1">
                Full Stack
              </Text>{" "}
              Entusiasta da lógica de{" "}
              <Text as="span" type="heading2" color="brand1">
                programação.
              </Text>
            </Text>
            <Text type="body1" color="grey2">
              &emsp; Minha relação com a tecnologia vem de muito cedo. Sempre
              fui o filho que pegava o telefone do pai escondido pra entrar na
              internet, ver vídeos e jogar um pouco (ou muito, mesmo).
            </Text>
            <Text type="body1" color="grey2">
              &emsp; Quando ganhei meu primeiro computador, mesmo sem internet,
              eu já ganhava alguns trocados fazendo impressões e cópias,
              trabalhos de escola digitados para outros estudantes, e
              armazenando arquivos em CDs, DVDs, pendrives e até disquetes.
            </Text>
            <Text type="body1" color="grey2">
              &emsp; Já tive minha própria Lan House o que contribuiu com
              experiência em gerenciamento. Também já fui monitor voluntário no
              ensino médio, ajudando outros alunos no laboratório de informática
              do colégio. E sempre utilizei o computador para jogar, também.
            </Text>
            <br />
            <Text type="body1" color="grey3">
              Conheça aqui neste ambiente, criado especialmente para você, todos
              os meus projetos e tecnologias
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código-fonte do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand1">
                  projetos paralelos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
