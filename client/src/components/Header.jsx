import Container from './Container'
import {logo} from "../assets/images/index"

const Header = () => {
  return (
    <div className=" border-b-[1px] border-slate-300">
        <Container>
            <img src={logo}/>
            
        </Container>
    </div>
  )
}

export default Header