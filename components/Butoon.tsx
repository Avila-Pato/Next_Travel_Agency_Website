
import Image from 'next/image'

// type y submit para formualarios
// variant determina la apariencia 
type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    icon: string;
    variant: string;
}


const Button = ({ type, title, icon, variant} : ButtonProps) => {
// Desustructuracion del componente a un objeto de propiedades definidas en ButtonProps
    return (
        <button className={`flexCenter gap-2 border rounded-full ${variant}`} type={type}>
            {icon && <Image src={icon} alt={title} width={20} height={20} />}
            <span className='whitespace-nowrap cursor-pointer bold-16'>{title}</span>
        </button>
    )
    }


export default Button