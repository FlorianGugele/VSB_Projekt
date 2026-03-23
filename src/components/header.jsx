import vsb from '../assets/vsb.jpg';
import vsblogo from '../assets/vorarlberger-schützenbund.jpg';

export default function Header() {
    return (
        <div className="bg-white h-[23vh] flex flex-col justify-between">
            <div className='m-5 ml-[4vw] mt-[3vh]'>
                <a href="https://vlbg-sb.at" target="_blank" rel="noopener noreferrer">
                    <img className="w-[175px]" src={vsblogo} alt="VSB Logo" />
                </a>
            </div>
            <div>
                <div className="bg-[#5f5f5f] h-[12vh]"></div>
            </div>
        </div>
    );
}