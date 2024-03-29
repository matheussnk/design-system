export type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

//Utilizando props desestruturada para facilitar a leitura do codigo facilitando o entendimento
const Button = ({ children, className }: ButtonProps) => {
  return <button
    className={`
      bg-primary rounded-md px-6 py-2 text-white
      ${className}
    `}
  >
    { children }
  </button>
}

export default Button