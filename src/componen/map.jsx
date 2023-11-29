import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
 

  return (

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.121204642086!2d77.49861267535248!3d28.47589627575063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea71af86fa39%3A0x43f416ca4cad834f!2sIEC%20College%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1701201102118!5m2!1sen!2sin" width="100%" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    // // Important! Always set the container height explicitly
    // <div style={{ height: '100vh', width: '100%' }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: "" }}
    //     defaultCenter={defaultProps.center}
    //     defaultZoom={defaultProps.zoom}
    //   >
    //     <AnyReactComponent
    //       lat={59.955413}
    //       lng={30.337844}
    //       text="----My Marker"
    //     />
    //   </GoogleMapReact>
    // </div>
  );
}