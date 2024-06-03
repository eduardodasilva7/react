//import perfil from '../../img/perfil.svg'
//import sacola from '../../img/sacola.svg'
import './style.css'

//MINHA VERSÃO
// const icones =[perfil, sacola]

// function IconesHeader () {
//     return (
//         <ul className='icones'>
//             {icones.map((icone) =>(
//                 <li className='icone'>
//                     <img
//                     src={icone}
//                     alt="icones" />
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export default IconesHeader;

//VERSÃO DO PROFESSOR 
const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul> 
    )
}


export default OptionsHeader;