import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Badge, Typography} from "@material-ui/core";
import { ShoppingCart, Add } from "@material-ui/icons";
import useStyles from "./Style.js";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import Logo from "../../assets/loading.gif";
import Menu from "../menu/Menu";
import UserMenu from "../userMenu/userMenu";
import { useDispatch } from "react-redux";
import { postCategories, postProduct } from "../../redux/actions";
import PopUpsContext from "../../context/PopUps/PopUpsContext";
import ProductsContext from "../../context/Products/ProductsContext";
import  {useSelector} from 'react-redux';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import MicIcon from '@material-ui/icons/Mic';
import MicNoneIcon from '@material-ui/icons/MicNone';

function NavBar() {
  const Classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const { setCart } = useContext(PopUpsContext);
  const { cartCount } = useContext(ProductsContext);
  const user = useSelector(state => state.user)

  const createProducts = () => {
    for (var i = 1; i <= 5; i++) {
      dispatch(postCategories("category" + i));
    }

    const tetstProducts = [
      "https://i.pinimg.com/564x/ae/11/aa/ae11aa6404dba5e937cc2203e94d19cf.jpg",
      "https://i.pinimg.com/originals/7f/ab/3a/7fab3a9c485ad806e2f50122676435e6.jpg",
      "https://i.pinimg.com/564x/83/40/7b/83407bedc16706032e02f1f7f1c02695.jpg",
      "https://i.pinimg.com/564x/6f/83/55/6f8355ea00010fac775cdc1ed14b5421.jpg",
      "https://i.pinimg.com/564x/09/7d/1b/097d1b481ed57b5e9fd6347b062e6b5f.jpg",
    ];

    for (i = 1; i <= 5; i++) {
      dispatch(
        postProduct({
          name: "producto " + i,
          price: i * 100,
          description: "descripcion del producto " + i,
          stock: i * 99,
          image: tetstProducts[i - 1],
          categories: [
            Math.floor(Math.random() * 5) + 1,
            Math.floor(Math.random() * 5) + 1,
          ],
        })
      );
    }
  };

  useEffect(() => {
  }, [cartCount, user])


  // RECONOCIMIENTO DE VOZ
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = React.useState(false);
  let resulListening;
  const START = ()=>{
    setIsListening(true)
    SpeechRecognition.startListening({
      continuos: false
    })
  }
  const STOP = ()=>{
    setIsListening(false)
    SpeechRecognition.stopListening()
    resulListening= transcript;
    resetTranscript();
  }
  const handleButtonListen = ()=>{
    if(isListening){
      STOP()
      
    }else{
      START()
    }
  }

  return (
    <>
      <div className={Classes.toolbar} />
      <AppBar position="fixed" className={Classes.AppBar} color="inherit">
        <Toolbar className={Classes.navBar}>
          <Menu />
            <img
              src={Logo}
              alt="e.commerce"
              height="50px"
              className={Classes.image}
            />
            <Typography component={Link} to="/" variant="h6" className={Classes.Name}>
              NUMERIQUE
            </Typography>
          <div className={Classes.grow} />
          {location.pathname.includes("/products") && <SearchBar listen={transcript || resulListening}/>}
          <IconButton onClick={createProducts}>
            <Add />
          </IconButton>
          <IconButton onClick={handleButtonListen}>
           {isListening ? ( <MicIcon />): ( <MicNoneIcon/>)}
          </IconButton>
          <div className={Classes.grow} />
          <div className={Classes.Button}>
            <IconButton
              onClick={() => setCart(true)}
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            {user.id!=="GUEST" ? <h3>{user.firstName}</h3>: <p></p>}
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default NavBar;
