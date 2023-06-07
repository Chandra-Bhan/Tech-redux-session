function Demo(props){

   let vardata=true;
   if(vardata){
    return(   <h1>hello {props.name}</h1>   )
   }
   else{
    return <button>data feeded</button>
   }
}

function Cb(){
    return(
        <>
            <p>Chandra Bhan</p>
        </>
    )
}
export default Demo;
export {Cb};