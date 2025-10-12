type ButtonType ={
    title: string
    onClick?: () => void
    disabled?: boolean
}


export const Button = ({title, onClick, disabled}: ButtonType) => {
return <button
    disabled={disabled}
onClick={onClick}>
    {title}</button>
}
