import { FC, useState, useEffect } from "react";

interface TypeWriterProps {
  fullText: string;
  typeWriterSpeed: number
}

const TypeWriterEffect: FC<TypeWriterProps> = ({ fullText , typeWriterSpeed}) => {
  const [animatedText, setAnimatedText] = useState("");
  useEffect(() => {
    const calculateInterval = setInterval(() => {
      if (animatedText.length < fullText.length) {
        setAnimatedText(fullText.substring(0, animatedText.length + 1));
      } else {
        clearInterval(calculateInterval);
      }
    }, typeWriterSpeed);

    return () => clearInterval(calculateInterval);
  }, [animatedText, fullText]);
  return <>{animatedText}</>;
};

export default TypeWriterEffect;
