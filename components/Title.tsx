import { useEffect, useState } from "react";

interface Props {
  titleRef: React.RefObject<HTMLInputElement>;
}

const Title: React.FC<Props> = ({ titleRef }) => {

  const [charCount, setCharCount] = useState(titleRef.current?.value.length);

  useEffect(() => {
    if(titleRef.current){
      const line = titleRef.current.nextSibling as HTMLDivElement;
      line.style.width = titleRef.current.value.length + "ch";
      setCharCount(titleRef.current.value.length);
      
    }
  }, [titleRef.current?.value.length])

  const handleInput = () => {
    if(titleRef.current){
      const line = titleRef.current.nextSibling as HTMLDivElement;
      line.style.width = titleRef.current.value.length + "ch";
      setCharCount(titleRef.current.value.length);
    }
  }

  return (

    <div className="font-mono flex flex-col items-center group">
      <input
        ref={titleRef}
        placeholder="Enter a title"
        className="text-center  min-w-0 w-full focus:outline-none"
        maxLength={50}
        onChange={handleInput}
      ></input>
      <div className="border-b-2 border-black bottom-0 w-0 visible group-focus:invisible"></div>
      <p className="text-gray-600 text-sm">{charCount}/50</p>
    </div>
  );
};
export default Title;
