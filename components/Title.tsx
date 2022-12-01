interface Props {
  titleRef: React.RefObject<HTMLInputElement>;
}

const Title: React.FC<Props> = ({ titleRef }) => {
  return (
    <div>
      <input
        ref={titleRef}
        placeholder="Enter a title"
        className="font-mono"
      ></input>
    </div>
  );
};
export default Title;
