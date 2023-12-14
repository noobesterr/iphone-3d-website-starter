import React from 'react'
function Jumbotron() { 
    const handleLearnmore = () =>{
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        });
    }
    return (
        <>
            <div className='jumbotron-section wrapper'>
                <h2 className='title'>Tesla's latest invention</h2>
                <span className='description'>The All New CyberTruck</span>

                <p className='text'>bigger and faster</p>
                {/* <span className='description'>The All New</span> */}
                {/* <p className='text'>than all trucks</p> */}
                <ul className='links'>
                    {/* <li>
                        <a href="https://www.tesla.com/cybertruck/design#payment">
                            <button className='button' >Pre Order</button>
                        </a>
                    </li> */}
                    <li>
                        <a className='link' onClick={handleLearnmore}>Learn more</a>
                    </li>

                </ul>

            </div>


            {/* <div className='sound-section wrapper'>
                <div className='body'>
                    <div className='sound-section-content content'>
                        <h2 className='title'>New and improved manufacturing process</h2>
                        <p className='text'>State of the art electric motors</p>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Jumbotron;