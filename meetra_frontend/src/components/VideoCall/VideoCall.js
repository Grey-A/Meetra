// import React, { useEffect, useState } from 'react'
// import { channelName, config, useClient, useMicrophoneAndCameraTracks } from '../../settings';
// import Row from 'react-bootstrap/Row'

// function VideoCall(props) {
//   const { setInCall } = props;
//   const [users, setUsers] = useState([])
//   const [start, setStart] = useState(false);
//   const client = useClient();
//   const { ready, tracks } = useMicrophoneAndCameraTracks();

//   useEffect(() => { 
//     let init = async (name) => {
//       client.on("user-published", async (user, mediaType) => {
//         await client.subscribe(user, mediaType);
//         if(mediaType === "video") {
//           setUsers((prevUsers) => {
//             return [ ...prevUsers, user ]; 
//           });
//         }
//         if(mediaType === "audio") {
//           user.audioTrack.play();
//         }
//       });

//       client.on("user-unpublished", (user, mediaType) => {
//         if(mediaType === "audio") {
//           if(user.audioTrack) user.audioTrack.stop();
//         }
//         if(mediaType === "video") {
//           setUsers((prevUsers) => {
//             return prevUsers.filter((User) => User.uid !== user.uid);
//           })
//         }
//       })
//     };
//   }, [channelName, client, ready, tracks])

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default VideoCall
