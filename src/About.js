import { useEffect, useState } from "react";
import styled from '@emotion/styled'

const About = () => {

    const [joke, setJoke] = useState(null)

    useEffect(() => {
        if (joke !== null) {
            window.analytics.track("Joke Viewed", { // Event naming 101 (Object-Action framework)
                joke: joke.joke,
                joke_id: joke.id
            })
            window.rudderanalytics.track("Joke Viewed", {
                joke: joke.joke,
                joke_id: joke.id
            }, () => console.log("Joke Clicked"));
        }
    }, [joke])

    useEffect(() => {
        window.analytics.page('About')
    }, [])

    const openEasterEgg = async () => {
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
            },
        }).then(d => d.json())
        setJoke(res)
    }

    return ( 
        <div>
            <h1 onClick={openEasterEgg}>Gui's company</h1>
            <p><Emoji>👋🏻</Emoji> We are the Gui's company</p>
            { joke && <Joke>{joke.joke} 😂</Joke> }
        </div>
     );
}

const Emoji = styled.span`
    padding-right: 5px;    
`

const Joke = styled.span`
    line-height: 60px;
    font-size: 1.2em;
    font-weight: 700;
`
 
export default About;
