import React from 'react';
import { withRouter, Switch} from 'react-router-dom';
import App from './App';
import PopUpsState from './context/PopUps/PopUpsState';
import FunctionsState from './context/contextFunctions/functionsState';
import ProductState from './context/Products/ProductsState';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './Transitions.css'

const Animate = () => {

    const AnimatedSwitch = withRouter(({ location }) => (
        <TransitionGroup>
            <CSSTransition classNames="slide"  key={location.key}  timeout={1000}>
                <Switch location={location}>
                    <PopUpsState>
                        <ProductState>
                            <FunctionsState>
                                <App location={location}/>
                            </FunctionsState>
                        </ProductState>
                    </PopUpsState>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
      ));

    return <div><AnimatedSwitch/></div>
}

export default Animate
