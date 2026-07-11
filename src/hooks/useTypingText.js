import { useEffect, useState } from 'react';

export default function useTypingText(words, speed = 80, pause = 1300) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const doneTyping = !deleting && text === word;
    const doneDeleting = deleting && text === '';
    const delay = doneTyping ? pause : deleting ? speed / 2 : speed;

    const timer = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
      } else if (doneDeleting) {
        setDeleting(false);
        setIndex((value) => value + 1);
      } else {
        setText(word.slice(0, deleting ? text.length - 1 : text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, index, pause, speed, text, words]);

  return text;
}
