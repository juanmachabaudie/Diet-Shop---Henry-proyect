import React from 'react';
import { Link } from 'react-router-dom';
import './InitialPage.css';
const InitialPage = ()=>{
    const handleClick = ()=>{
       
    }
    return (
        <div className="containerInitial">
            {/* <div className="listInitialTwo">
                <ul>
                    <li>Catalogo</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Home</li>
                </ul>
            </div> */}
            <div className="navBarInitial">
                
                <img className="menúResponsiveInitial" onClick={handleClick} src="https://res.cloudinary.com/dtqd9ehbe/image/upload/v1618837212/Product/rbcxtivq23qffaw882uc.svg" alt=""/>
                <div className="listInitial">
                    <ul className="listInitialOne">
                        <li className="linkNavBar"></li>
                        <li className="linkNavBar"><Link className="LINK" to='/products'>CATALOGO</Link></li>
                        <li className="linkNavBar"><h1 className="numerique">NUMERIQUE</h1></li>
                        <li className="linkNavBar"><a className="LINK" href='#footerInitialPage'>ABOUT</a></li>
                        <li className="linkNavBar"></li> 
                    </ul>
                </div>
            </div>
            <div className="contentInitial">
                <img src="https://s3-alpha-sig.figma.com/img/31c2/b60f/565c1f2a709b198ff3ef1d49aa8558e1?Expires=1619395200&Signature=gpiOshbrWK-Gl25KN1dS7LeUfzKAJ~xaxxcaPTHY~lyO4xzUvqq0S8LIiVLql5CxUo88-iKzx1k~lKmLnkxU0or2Zs6wpcS0~h~US3P7kaEZZU860zX-raynjp2Nby2~aagw9l0DUcAzkq2fAjuFOXOpdsjZzX4Oe~2I6YM81qK6Xtf0KiKPEYHG60fT7pGEYMQcj6QWt4KfDiw0k7HV9Egm9scJ8YKMIOuiOR4~TLQxK-z8h1al5ohTRG033DbfnFW2Ojix4cwTU-HP~xBmm00z-RYfLKx56dG1Gf6zmLoNJo-GYd-JyoVoWEk1MhjeB1A3YL9jzbva-kCagRc01Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""/>
            </div>
            <div id="footerInitialPage" className="footerInitialPage">
                <div className="textFoterInitialPage">
                  NUMERIQUE ES UNA GALERIA DE ARTE DIGITAL. NACIMOS PARA ROMPER TODO. DESDE SUDAMERICA PARA EL MUNDO.
                </div>
            </div>
        </div>
    )
}
export default InitialPage; 
