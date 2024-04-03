export function NavBar()
{
    return(
        <div>
            {NavBarItem("NU Market", "/home")}
            {NavBarItem("Search", "#")}
            {NavBarItem("Profile", "#")}
            
        </div>
    );
}
function NavBarItem(text, link){
    return(
        <a href={link}> {text} </a>
    );
}