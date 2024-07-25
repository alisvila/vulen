export function PartoInput({title,value,change}:{title:string,value:string,change:(input:string)=>void}){
    return(
        <div className="w-full flex flex-col">
            <label>{title}</label>
            <input onChange={(e)=>change(e.target.value)} type="text" value={value} placeholder="وارد کنید" className="w-full mt-3"/>
        </div>
    );
}