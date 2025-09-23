type ButtonType ={
    value: string
    onClick?: () => void
}


export const Button = ({value, onClick}: ButtonType) => {
return <button
onClick={onClick}>
    {value}</button>
}
