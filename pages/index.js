import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'

import { useRef, useState } from 'react'

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">Hola mi reina</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/Photo2.jpg' text="¡Que linda que eres!"/>
        <CommentedImage src='/Photos3.jpeg' text="Bembona <3"/>
        <CommentedImage src='/Photo1.jpg' text="Y renegona!"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">Sabemos que no será fácil</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-white p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-white">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>PERO</h1>
          <img src='https://wallpaperswide.com/download/peach_and_goma_cats_kawaii_cute-wallpaper-1920x600.jpg' width={600}/>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>JUNTOS</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase">PODEMOS</h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">ENTONCES...</h1>
      </div>

      <CornyQuestion 
        question="¿Te gustaría ser mi insana?"
        nonactive="data:image/png;base64,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"
        active="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRo-4Lnui9SJnrjBRp9m7iGFO5UIcpAgO6A&s"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>¿Te gustaría ser el ajicito en mi ceviche de pota?</h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>Piénsatelo bien, que esto es hasta viejitos</h1>
      </div>

      <CornyQuestion 
        question="¿Puedo ser la mostaza y mayonesa en tu mostrito?"
        nonactive="https://telemaki.com/blog/assets/uploads/2022/01/mayonesa-mostaza-1.jpg"
        active="https://comedera.com/wp-content/uploads/sites/9/2023/05/mostrito-peruano.jpg"
        secondary
        right
      />

      <CornyQuestion 
        question="¿Puedo ser el que te acompañe a comprar huevaditas en el centro?"
        nonactive="https://www.atv.pe/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-12-at-1.14.04-PM-700x394.jpeg"
        active="https://e.rpp-noticias.io/xlarge/2019/01/20/581958_741254.jpg"
        primary
        left
      />

      <CornyQuestion 
        question="¿Puedo ser el relleno sabor alfajor de tu casino favorito"
        nonactive="https://latiendona.es/wp-content/uploads/2020/10/1016-galletas-alfajor-casino-6-uds-258-g-1.jpg"
        active="https://i.ytimg.com/vi/_3awxa3WpZU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAaQOlfcYlq3vOwOmgwNmmKmmjTwA"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>¿Puedo ser tu novio?</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="NO"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          SIII
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Buena elección
              </AlertDialogHeader>

              <AlertDialogBody>
                Pero,¿Estás bien segura?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Chi
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Justificante de Noviazgo</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              ¡Felicidades!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Afortunada:
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Nicol
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Afortunado:
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Gonzalo
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Fecha
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              14 de Diciembre del 2024
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Beneficios
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              • Cenas • Películas • Sexo cochino y bien rico • Videollamadas de 2 horas • Y más... •
            </h3>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
