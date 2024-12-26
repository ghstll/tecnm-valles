        import React from "react";
import DegreeSection from "./degrees/degreeSection";
import NoticeSection from "./notice/noticeSection";
import PrincipalHeader from "./principalHeader";
        function Main() {
            return (
                <main className="min-h-screen w-full bg-[#1e2122] flex flex-col items-center pb-4">
                <PrincipalHeader title={"Auditores internos"} description={"Se llevó a cabo el curso titulado “Formación de Auditores Internos en las Normas ISO 9001, ISO 14001, ISO 45001 e ISO 50001” a cargo Mauricio Enrique Unda, miembro de la empresa ARMS."}></PrincipalHeader>
                <NoticeSection></NoticeSection>
                <DegreeSection></DegreeSection>
                </main>
            );
        }

        export default Main;
