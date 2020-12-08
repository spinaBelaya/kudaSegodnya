import './App.css';
import React, {useState} from 'react'
import ListRoundedIcon from '@material-ui/icons/ListRounded';
import logo from './logo.svg'
import kuda from './kuda.png'
import { CardMedia, InputBase, IconButton, TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import CreditCardSharpIcon from '@material-ui/icons/CreditCardSharp';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';



function App() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  <div>
    <div className="Page">
    <img src={kuda} className="Kuda"/>
    </div>
    <IconButton><ListRoundedIcon className="MenuBut" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      </ListRoundedIcon></IconButton>
      <Menu
      className = "dropMenu"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={{backgroundColor: "#55505C", color: "#EFEAEA"}} onClick={handleClose}>Главная</MenuItem>
        <MenuItem style={{backgroundColor: "#55505C", color: "#EFEAEA"}} onClick={handleClose}>Избранное</MenuItem>
        <MenuItem style={{backgroundColor: "#55505C", color: "#EFEAEA"}} onClick={handleClose}>Редакторские подборки</MenuItem>
        <MenuItem style={{backgroundColor: "#55505C", color: "#EFEAEA"}}  onClick={handleClose}>Любимые места знаменитостей</MenuItem>
        <MenuItem style={{backgroundColor: "#55505C", color: "#EFEAEA"}} onClick={handleClose}>Добавить новое место</MenuItem>
      </Menu>

<div className="Theme"><div class="theme">Добавьте свое любимое место</div></div>

      <div className="AddPlace">
        <form id="form_name">
        <InputBase
          placeholder="Введите название места..."
          className="NameInput"
          variant="outlined"
        />
      <IconButton>
        <CreateRoundedIcon className="Add" /> 
        </IconButton>
    </form>

    <div className="Info">
<IconButton><LocationOnSharpIcon /><div className="Text">Укажите место на карте</div></IconButton> 
<IconButton><CreditCardSharpIcon /><div className="Text">Укажите сумму затрат</div></IconButton> 
<IconButton><AttachFileSharpIcon /><div className="Text">Прикрепите фото</div></IconButton> 
<TextareaAutosize className="Description" aria-label="minimum height" rowsMin={5} placeholder="Опишите место..." />

    </div>
      
      </div>
    </div>

  );
}

export default App;
