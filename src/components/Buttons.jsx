import { MdHeight } from "react-icons/md"



function Button1({ children, Icon, iconSize = 16 }) {
    return (
        <button className="button-1">
            <Icon style={{
                height: '1em',
                width: '1em',
            }} />
            {children}
        </button>
    )
}


export { Button1 }