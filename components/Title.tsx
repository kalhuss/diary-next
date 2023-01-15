import { useRef } from "react";
interface Props {
  titleRef: React.RefObject<HTMLInputElement>;
}

const Title: React.FC<Props> = ({ titleRef }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {

    if(titleRef.current){
      const line = titleRef.current.nextSibling as HTMLDivElement;
      line.style.width = titleRef.current.value.length + "ch";
    }
  }

  return (

    <div className="font-mono flex flex-col items-center">
      <input
        ref={titleRef}
        placeholder="Enter a title"
        className="text-center  min-w-0 w-full focus:outline-none"
        onInput={handleInput}
      ></input>
      <div className="border-b-2 border-black bottom-0 w-0"></div>
    </div>
  );
};
export default Title;
