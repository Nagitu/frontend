'use client'

import React, { Suspense } from 'react';
import NavBar from "../components/NavBar/NavBar";
const FindMe = React.lazy(() => import("../components/FindMe"));
const Introduction = React.lazy(() => import("../components/Introduction"));
const ContactMe = React.lazy(() => import("../components/ContactMe"));
const ProjectSection = React.lazy(() => import("../components/ProjectSection"));

export default function MyPage() {
    return (
        <div className='bg-white dark:bg-white p-5 flex flex-col gap-5'>
            <NavBar/>
            <Suspense fallback={<div>Loading...</div>}>
                <Introduction/>
                <FindMe/>
                <ProjectSection/>
                <ContactMe/>
            </Suspense>
        </div>
    );
}
