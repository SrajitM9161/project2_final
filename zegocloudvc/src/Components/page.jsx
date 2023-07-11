import React from 'react'
import{useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const Page = () => {
 const {roomId} = useParams()
 const Metting = async(Element) =>{
    const appID= 1267273883;
   const serverSecret = " 2eb86605fc0b228369bb864b43e672f1";
   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Srajit Mishra");

   const zc = ZegoUIKitPrebuilt.create(kitToken);
   zc.joinRoom({
    container:Element,
    sharedLinks:[
        {
        name:"Copy link",
        URL: `http://localhost:3000/room/${roomId}`,
        },
    ],
    scenario:{
        mode:ZegoUIKitPrebuilt.OneONoneCall
    },
   });
 };
 return(
<div>
<div ref={Metting} />
</div>
 )
}

export default Page
