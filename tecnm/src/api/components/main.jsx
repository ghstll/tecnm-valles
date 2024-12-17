import React from "react";
import HeaderMain from "./header/headerMain";
function Main() {
    return (
        <div className="h-full bg-[#1e2122]">
            <div className="relative z-10">
                <HeaderMain></HeaderMain>
            </div>
                <section className="
                    h-[600px] w-full 
                    absolute 
                    top-0 
                    left-0 
                    z-0 
                    bg-[url('https://scontent.fntr6-3.fna.fbcdn.net/v/t39.30808-6/467814572_1082893083839142_3577344665992577485_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=omdP4oquMB4Q7kNvgHJs2Q-&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=ASB9brQMh20V_KfiKAa83PQ&oh=00_AYBHFv5e2WBDuMdRd9TzOx9a8L9KQj-Wk-83D3Uwa0-95g&oe=6766DB05')] 
                    bg-cover 
                    bg-[center]
                    flex 
                    items-center 
                    justify-center
                    "
                >
                    <div className="absolute z-0 top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[#1e2122]"></div>
                    <article className="z-10 text-center animate-[slidein_2s_ease-in-out_1]">
                        <span className="text-[#ffffff] text-3xl max-w-[50px]">Formación de Auditores Internos en las Normas ISO 9001, ISO 14001, ISO 45001 e ISO 50001” a cargo Mauricio Enrique Unda, miembro de la empresa ARMS.</span>
                    </article>
                </section>
        </div>
    );
}

export default Main;