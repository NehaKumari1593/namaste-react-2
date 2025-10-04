import React from "react"
import ReactDOM from "react-dom/client"

//  let heading=React.createElement("h1",{className:"heading"},"hello world from react")
//     let root=ReactDOM.createRoot(document.querySelector(".container"));
//     console.log(root)
//     root.render(heading);






//  let parent=React.createElement("div",
//     {className:"parent"},
//       React.createElement("div"
//         ,{className:"child"},
//           React.createElement("h1",{},"im a h1 tag" )
//       )
//  )
//     let root=ReactDOM.createRoot(document.querySelector(".container"));
//     console.log(parent)
//     root.render(parent);







 let parent=React.createElement("div",
    {className:"parent"},
     [ React.createElement("div"
        ,{className:"child"},
         [ React.createElement("h1",{},"im a h1 tag" ),React.createElement("h2",{},"im h2 tag")]
      ),
      React.createElement("div"
        ,{className:"child"},
         [ React.createElement("h1",{},"im a h1 tag" ),React.createElement("h2",{},"im h2 tag")]
      )
    ]
 )
 
    let root1=ReactDOM.createRoot(document.querySelector(".container"));
//      let root2=ReactDOM.createRoot(document.querySelector(".box"));
    root1.render(parent);
//     console.log(parent)
   
//     root2.render(parent2);