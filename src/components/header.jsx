import vsb from '../assets/vsb.jpg';

export default function Header() {
    return (
        <div className="bg-white h-[7.5vh] items-center">
            <div className='m-3'>
                <a href="https://vlbg-sb.at" target="_blank" rel="noopener noreferrer">
                    <img className="w-[150px]" src={vsb} alt="VSB Logo" />
                </a>
            </div>
            <div>
                <div className="bg-[#5f5f5f] h-[1vh]"></div>
            </div>
        </div>
    );
}