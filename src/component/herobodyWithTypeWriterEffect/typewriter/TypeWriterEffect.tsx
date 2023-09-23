import { FC, useState, useEffect } from "react";

interface TypeWriterProps {
  fullText: string;
}

const TypeWriterEffect: FC<TypeWriterProps> = ({ fullText }) => {
  const [animatedText, setAnimatedText] = useState("");
  useEffect(() => {
    const calculateInterval = setInterval(() => {
      if (animatedText.length < fullText.length) {
        setAnimatedText(fullText.substring(0, animatedText.length + 1));
      } else {
        clearInterval(calculateInterval);
      }
    }, 22);

    return () => clearInterval(calculateInterval);
  }, [animatedText, fullText]);
  return <>{animatedText}</>;
};

export default TypeWriterEffect;
