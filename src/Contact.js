import { useEffect } from 'react';
import { A } from './css/shared'

const Contact = () => {

    useEffect(() => {
        window.analytics.page('Contact')
        rudderanalytics.page('contact', 'Contact', () => {
            console.log("contact page call");
        });
    }, [])

    return (
        <div>
            <h1>Contact info</h1>
            <main>
                <div><A target='blank' href='https://github.com/Billbastos'>github.com/Billbastos</A></div>
                <div><A href='../local-app/pages/external.html'>leaving the react app 👋🏻</A></div>
            </main>
        </div>
    );
}

export default Contact
