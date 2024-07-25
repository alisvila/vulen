export default function BackDrop({closeSideMenu}:{closeSideMenu:()=>void}){
    return(<div onClick={closeSideMenu} className="fixed inset-0 z-10 bg-black bg-opacity-40"/>);
}