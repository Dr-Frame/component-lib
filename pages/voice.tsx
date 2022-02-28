import { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import Button from '../components/Button';
import { IoCloseSharp } from 'react-icons/io5';
/* import classNames from 'classnames/bind';

const cx = classNames.bind(s) */

export default function Voice() {
  const [isListening, setIsListening] = useState(false);
  const [isMicroAvailable, setIsMicroAvailable] = useState(false);
  const [speechText, setSpeechText] = useState('');
  const [isSupported, setIsSupported] = useState(true);

  const commands = [
    /* {
      command: 'stop',
      callback: async () => {
        setIsListening(false);
        SpeechRecognition.stopListening();
      },
    }, */
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  /*  function filterSpeechText(text: string) {
    const arr = text
      .split(' ')
      .filter(word => word !== 'stop')
      .join(' ');

    return arr;
  }

  useEffect(() => {
    setSpeechText(filterSpeechText(speechText));
  }, [speechText]); */

  const {
    transcript,
    listening,
    isMicrophoneAvailable,
    finalTranscript,
    resetTranscript,
  } = useSpeechRecognition({ commands });
  //
  useEffect(() => {
    setIsListening(listening);
  }, [listening]);

  useEffect(() => {
    setSpeechText(finalTranscript);
  }, [finalTranscript]);

  useEffect(() => {
    if (isMicrophoneAvailable) {
      setIsMicroAvailable(true);
    } else {
      setIsMicroAvailable(false);
    }
  }, [isMicrophoneAvailable]);

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition) {
      setIsSupported(false);
    }
  }, []);

  useEffect(() => {
    resetTranscript();
    setSpeechText('');
    setIsListening(false);
  }, []);

  return (
    <div>
      {!isMicroAvailable && <div>You dont have a microphone</div>}
      {!isSupported && <div>your browser doesnt support this function</div>}
      {isSupported && (
        <>
          <p>say "clear" to clear input</p>
          <input type="text" value={speechText} />
          {!isListening && (
            <button
              type="button"
              onClick={() => {
                setIsListening(true);
                if (!SpeechRecognition.browserSupportsSpeechRecognition) {
                  setIsSupported(false);
                } else {
                  SpeechRecognition.startListening({
                    continuous: false,
                    language: 'en-US',
                  });
                }
              }}
            >
              <FaMicrophone />
            </button>
          )}
          {isListening && (
            <button
              type="button"
              onClick={() => {
                setIsListening(false);
                if (!SpeechRecognition.browserSupportsSpeechRecognition) {
                  setIsSupported(false);
                } else {
                  SpeechRecognition.stopListening();
                }
              }}
            >
              <FaMicrophoneSlash />
            </button>
          )}
          {speechText && isListening && (
            <Button as="button" onClick={() => setSpeechText('')}>
              <IoCloseSharp fontSize={30} />
            </Button>
          )}
        </>
      )}
    </div>
  );
}
