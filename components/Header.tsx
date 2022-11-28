import Title from './Title';
//Create a header component
const Header = () => {

    const date = new Date();

    return (
        <div className = "flex justify-between">
            <button className = "font-mono">Home</button>
            <Title />
            <div className = "font-mono">{date.getDate()} / {date.getMonth()} / {date.getFullYear()}</div>
        </div>
    )
    }
export default Header;