import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import personBg from '../assets/person_bg.png'
import sunBg from '../assets/sun_bg.jpg'

function Button({ text, isSmall, isActive }) {
    return (
        <div className={`${isSmall ? 'text-md' : 'text-lg font-bold'} ${isActive ? 'bg-hover' : ''} p-1 hover:bg-hover cursor-pointer`}>{text}</div>
    )
}

function Button2({ text }) {
    return (
        <div className="bg-primary w-[40%] text-lg hover:bg-white text-center transition-all duration-200 cursor-pointer text-secondary font-semibold p-1">
            {text}
        </div>
    )
}

export default function ParallaxBody() {
    return (
        <div>

            <Parallax pages={4} style={{ backgroundColor: '#200001' }}>



                <ParallaxLayer offset={0} sticky={{ start: 0, end: 1 }} style={{ zIndex: -1, marginTop: '20px' }} >
                    <img src={sunBg} alt="" className="w-full mt-9" />
                </ParallaxLayer>



                <ParallaxLayer offset={0} speed={0.1}>
                    <div className="bg-secondary text-primary flex justify-between px-2 mb-8">
                        <Button text={'CAMPO SANTO'} />

                        <div className="flex gap-2">
                            <Button text={'FIREWATCH'} isSmall={true} isActive={true} />
                            <Button text={'DEVELOPMENT BLOG'} isSmall={true} />
                            <Button text={'QUARTERLY REVIEW'} isSmall={true} />
                        </div>
                    </div>

                    <img src={personBg} alt="" className="" />
                    <div className="bg-secondary h-full"></div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5}>
                    <div className="w-1/2 m-auto flex flex-col gap-4">
                        <div className="tracking-widest">
                            <div className="text-primary text-4xl p-4 text-center">Available Now For $19.99</div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between">

                                <Button2 text={'WINDOWS MAC LINUX'} />
                                <Button2 text={'NITENDO SWITCH'} />

                            </div>
                            <div className="flex justify-between">

                                <Button2 text={'PLAYSTATION 4'} />
                                <Button2 text={'XBOX ONE'} />

                            </div>
                        </div>
                    </div>
                </ParallaxLayer>


            </Parallax>

        </div>
    )
}