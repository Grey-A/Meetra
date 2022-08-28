import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';
import axiosInstance from './axios';

const appID = "8b21b3a8f25c48ea918e90cfd4440fd2";
const channel = "test";

const client = AgoraRTC.createClient({
    mode: 'rtc',
    codec: 'vp8'
})


export const VideoCall = () => {
    const [users, setUsers] = useState([]);
    const [localTracks, setLocalTracks] = useState([]);

    // Handle user Joined
    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === 'video') {
            setUsers((prevUsers) => [
                ...prevUsers,
                user
            ]);
        }

        if (mediaType === 'audio') {
            user.audioTrack.play();
        }
    };

    // Handle User Left
    const handleUserLeft = (user) => {
        setUsers((prevUsers) =>
            prevUsers.filter((u) => u.uid !== user.uid)
        );
    };

    // Initiate Agora
    useEffect(() => {
        client.on('user-published', handleUserJoined);
        client.on('user-left', handleUserLeft);
        axiosInstance
            .get('api/call/token/', {
                channelName: channel
            }).then(function (response) {
                console.log(response)
                let ussid = response.data.usid
                let token = response.data.token
                console.log(ussid, token);
                client
                    .join(appID, channel, token, ussid)
                    .then((uid) =>
                        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
                    ).then(([tracks, uid]) => {
                        const [audioTrack, videoTrack] = tracks;
                        setLocalTracks(tracks);
                        setUsers((prevUsers) => [
                            ...prevUsers,
                            {
                                uid,
                                videoTrack,
                                audioTrack
                            },
                        ]);
                        client.publish(tracks);
                    });
            }).catch(function (err) {
                console.log(err)
            })

        // return () => {
        //     for ( let localTrack of localTracks){
        //         localTrack.stop();
        //         localTrack.close();
        //     }

        //     client.unpublish(localTracks).then(() => client.leave());
        // }
    }, [])


    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 g-2'>
                {users.map((user) => (
                    <VideoPlayer key={user.uid} length={users.length} user={user} />
                ))}
            </div>
        </div>
    )
}
