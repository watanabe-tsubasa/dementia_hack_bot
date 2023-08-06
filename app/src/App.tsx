import { CheckIcon, SmallAddIcon, StarIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react"
import { AudioPlayer } from "./AudioPlayer";

function App() {

  const handlePlayAudio = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  }

  const [ isAccounted, setIsAccounted ] = useState(false);
  const [ isInstore, setIsInstore ] = useState(false);
  const handleSpeak = (word: string) => {
    // SpeechSynthesis APIの利用
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  };

  const onClickAccount = async () => {
    // handleSpeak('お会計終わったから帰ろうね。')
    handlePlayAudio("/account.mp3")
    setIsAccounted(true);
  }

  const onClickEnter = async () => {
    setIsInstore(true);
    // handleSpeak('今日も楽しく買い物しようね。')
    handlePlayAudio("/enter.mp3")
  }

  const onClickleave = async () => {
    if (isAccounted) {
      // handleSpeak('今日もお買い物楽しかったね！')
      handlePlayAudio("/leave_correct.mp3")
      setIsAccounted(false);
    } else {
      // handleSpeak('お店を出る前に何か忘れてないかな？')
      handlePlayAudio("/leave_wrong.mp3")
    }
    setIsInstore(false);
  }

  return (
    <Box bg="gray.100">
      <Flex
       height="100vh"
       width="100%"
       alignItems="center"
       justifyContent="center">
        <Card
          width={["95%", "85%", "75%", "60%", "45%"]} 
          maxW='md'
          m={4}>
          <CardHeader bg='teal.100'>
            <Flex>
              <Flex flex='1' gap='4' alignItems='center' justifyContent='center'>
                <Box textAlign='center'>
                  <Heading size='2xl'>今日も楽しく<br />買い物しようね</Heading>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex justifyContent='center' alignItems='center'>
              <Image
                maxW="90%"
                borderRadius='10px'
                objectFit='cover'
                src='/girl_1.png'
                alt='Chakra UI'
              />
            </Flex>
          </CardBody>
          <CardFooter
            justify='center'
            sx={{
              '& > button': {
                minW: '136px',
                minH: '60px'
              },
            }}
          >
            <Flex
              wrap='wrap'
              justifyContent='center'>
              <Button
                onClick={onClickAccount}
                flex='1'
                fontSize='xl'
                minW='200px'
                mb='4'
                colorScheme='facebook'
                variant='solid'
                leftIcon={<StarIcon />}
              >
                お会計する
              </Button>
              <ButtonGroup>
                <Button onClick={onClickEnter} flex='1' variant='ghost' leftIcon={<SmallAddIcon />}>
                  入店
                </Button>
                <Button onClick={onClickleave} flex='1' variant='ghost' leftIcon={<CheckIcon />}>
                  退店
                </Button>
              </ButtonGroup>
            </Flex>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
}

export default App;
