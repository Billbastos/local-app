import styled from '@emotion/styled'
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        window.analytics.page('Home')
    }, [])

    return ( 
        <div>
            <h1>Home page!</h1>
            <main>
                This is Gui's homepage.
                <div>
                    <Img alt='jetsons' src='https://media.giphy.com/media/fo1YqvMOtZJYRuO6lM/giphy-downsized.gif'/>
                </div>
            </main>
        </div>
    );
}

const Img = styled.img`
    padding: 20px;
`
 
export default Home;