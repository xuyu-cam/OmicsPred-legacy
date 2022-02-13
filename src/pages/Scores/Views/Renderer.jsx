import react from "react" ; 



const Renderer =(props)=>{
    return(
        <div className="bg-red-600 h-[500px] grid place-items-center">
            {
                props.page
            }
        </div>
    ) ;
}


export default Renderer ;