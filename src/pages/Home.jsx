import React from 'react'
import Main from '../components/section/Main'
import Developer from '../components/contents/Developer'
import Today from '../components/contents/Today'
import Webd from '../components/contents/Webd'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'
import Website from '../components/contents/Website'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
        <Today />
        <Developer/>
        <Webd/>
        <Website/>
        <Gsap/>
        <Portfolio/>
        <Youtube/>
        </Main>
    )
}

export default Home