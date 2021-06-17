import { useEffect, useState } from "react";
import styled from '@emotion/styled'

const About = () => {

    const [joke, setJoke] = useState(null)

    useEffect(() => {
        if (joke !== null) {
            window.analytics.track("got dad joke", {
                joke
            })
        }
    }, [joke])

    const openEasterEgg = async () => {
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json',
            },
        }).then(d => d.json())
        setJoke(res.joke)
    }

    return ( 
        <div>
            <h1 onClick={openEasterEgg}>Gui's company</h1>
            <p><Emoji>👋🏻</Emoji> We are the Gui's company</p>
            { joke && <Joke>{joke} 😂</Joke> }
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