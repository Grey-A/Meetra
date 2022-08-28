import React, { useEffect, useRef } from 'react'

export const VideoPlayer = ({ user, length }) => {
    const ref = useRef();

    useEffect(() => {
        user.videoTrack.play(ref.current);
    }, []);
        return (
            <div className='col'>
                <div className='container-lg pt-3'>
                    <div ref={ref} className="container" style={{ width: "400px", height: "400px" }}></div>
                </div>
            </div>
        )
}
