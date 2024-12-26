import BannerImage from "../assets/BannerImage.webp";
import logoTecvalles from "../assets/tecvalles_logo.png";
function PrincipalHeader({ title, description }) {
    return (
        <header
            className="bg-gray-300 w-full min-h-[820px] bg-cover bg-center relative flex flex-col gap-64 animate-[appear_1s_ease-in-out_1]"
            style={{ backgroundImage: `url(${BannerImage})` }}
        >
            <div className="absolute bg-gradient-to-b from-[#00000000] to-[#1e2122] h-full w-full left-0 top-0 z-0"></div>
            <div className="flex h-fit justify-between relative z-10">
                <a href="http://localhost:3000/">
                    <img
                        src={logoTecvalles}
                        alt="Home"
                        className="h-[45px] relative top-6 left-10"
                    />
                </a>
                <ul className="flex">
                    <li>
                        <a
                            href="http://localhost:3000/"
                            className="p-7 flex items-center cursor-pointer  border border-r-1 border-t-0 border-l-0 border-b-0  bg-gray-800 text-white font-bold hover:bg-gray-600 transition duration-500"
                        >
                            Conocenos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#notices"
                            className="p-7 flex items-center cursor-pointer  border border-r- border-t-0 border-l-0 border-b-0  bg-gray-800 text-white font-bold hover:bg-gray-600 transition duration-500"
                        >
                            Avisos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#degrees"
                            className="p-7 flex items-center cursor-pointer  border border-r-0 border-t-0 border-l-0 border-b-0  bg-gray-800 text-white font-bold hover:bg-gray-600 transition duration-500"
                        >
                            Carreras
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex w-full justify-center items-center gap-20 relative z-10 text-wrap flex-col bottom-32">
                <h1 className="text-9xl text-white font-spectral animate-[principalText_0.5s_ease-in_1] text-wrap text-center">     
                    {title}
                </h1>
                <h4 className="text-white text-center text-wrap w-[600px] font-bold animate-[appear_3s_ease-in-out_1]">
                    {description}
                </h4>
            </div>
        </header>
    );
}
export default PrincipalHeader;
