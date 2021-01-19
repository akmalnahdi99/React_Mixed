// //under review
// import React from "react";
// import Empty from "./Empty";
// import TenancyDocsItem from "./TenancyDocsItem"
 
// const TenancyDocsList = ({title}) => {
//   var passphoto = [
//     {
//       id: 0,
//       images: "/imgs/p-1.jpg"
//     },
//     {
//       id: 1,
//       images: "/imgs/p-2.jpg"
//     },
//     {
//       id: 2,
//       images: "/imgs/p-3.jpg"
//     },
//   ];
//   var passcopy = [
//     {
//       id: 0,
//       images: "/imgs/pass-1.jpg"
//     },
//     {
//       id: 1,
//       images: "/imgs/pass-2.jpg"
//     },
//     {
//       id: 2,
//       images: "/imgs/pass-3.jpg"
//     },
//   ];
//   var visa = [
//     {
//       id: 0,
//       images: "/imgs/v-11.jpg"
//     },
//     {
//       id: 1,
//       images: "/imgs/v-2.jpg"
//     },
//     {
//       id: 2,
//       images: "/imgs/v-3.jpg"
//     },
//   ];
//   var identity = [
//     {
//       id: 0,
//       images: "/imgs/s-1.jpg"
//     },
//     {
//       id: 1,
//       images: "/imgs/s-2.jpg"
//     },
//     {
//       id: 2,
//       images: "/imgs/s-3.jpg"
//     },
//   ];
//   return (
//       <div> 
//         <div className="container container-xs">

//     <div className="ibox">
//         <div className="ibox-title">
            
//             <div className="media-body">
//                 <h4 className="text-doorcase3">Passport Size Photo</h4>
        
//             </div>
//             <hr />

//         </div>
//         <div className="ibox-content minhigh">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="demo-gallery">
//                         <ul id="lightgallery2" className="list-unstyled row">
//                         {passphoto.length > 0 ? (
//                             passphoto.map((item) => {
//                                 return <TenancyDocsItem key={item.id} {...item} color="red" />;
//                             })
//                             ) : (
//                             <Empty />
//                         )}
//                         </ul>
//                     </div>
                    
//                 </div>
//             </div>
        
//         </div>

//     </div>
//     </div>


//     <div className="container container-xs">

//     <div className="ibox">
//         <div className="ibox-title">
            
//             <div className="media-body">
//                 <h4 className="text-doorcase3">IC/ Passport Copy</h4>
//             </div>
//             <hr />
//         </div>
//         <div className="ibox-content minhigh">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="demo-gallery">
//                         <ul id="lightgallery2" className="list-unstyled row">
//                         {passcopy.length > 0 ? (
//                             passcopy.map((item) => {
//                                 return <TenancyDocsItem key={item.id} {...item} color="red" />;
//                             })
//                             ) : (
//                             <Empty />
//                         )}
//                         </ul>
//                     </div>
                    
//                 </div>
//             </div>
        
//         </div>

//     </div>
//     </div>

//     <div className="container container-xs">

//     <div className="ibox">
//         <div className="ibox-title">
            
//             <div className="media-body">
//                 <h4 className="text-doorcase3">Visa Page</h4>
        
//             </div>
//             <hr />

//         </div>
//         <div className="ibox-content minhigh">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="demo-gallery">
//                         <ul id="lightgallery2" className="list-unstyled row">
//                         {visa.length > 0 ? (
//                             visa.map((item) => {
//                                 return <TenancyDocsItem key={item.id} {...item} color="red" />;
//                             })
//                             ) : (
//                             <Empty />
//                         )}
//                         </ul>
//                     </div>
                    
//                 </div>
//             </div>
        
//         </div>

//     </div>
//     </div>

//     <div className="container container-xs">

//     <div className="ibox">
//         <div className="ibox-title">
            
//             <div className="media-body">
//                 <h4 className="text-doorcase3">Student ID/ Employee ID/ Buisness Card/ Company Registration Letter</h4>
            
//             </div>
//             <hr />

//         </div>
//         <div className="ibox-content minhigh">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="demo-gallery">
//                         <ul id="lightgallery2" className="list-unstyled row">
//                         {identity.length > 0 ? (
//                             identity.map((item) => {
//                                 return <TenancyDocsItem key={item.id} {...item} color="red" />;
//                             })
//                             ) : (
//                             <Empty />
//                         )}
//                         </ul>
//                     </div>
                    
//                 </div>
//             </div>
        
//         </div>

//     </div>
//     </div>
//     </div>
//   );
// };

// export default TenancyDocsList;
