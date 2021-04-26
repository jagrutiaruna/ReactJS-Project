import React,{useState} from 'react';
import './Header.css';
import Login from './Login.js';
import Register from './Register.js'
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal'
import {Paper,Tabs,Tab,Typography} from '@material-ui/core';

Modal.setAppElement('#root')
export default function Header() {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  

    return (
        <div>
                <div className="header">
                    <img id='logo-img' className='rotate' src={logo} alt="" />
                    <div className='btn-log'>
                        <Button variant="contained" colour="default" onClick={() => { setIsModalOpen(true);}}>
                            Login
                        </Button>
                    </div>
                    
                </div>
                <Modal isOpen={isModalOpen} onRequestClose={() => { setIsModalOpen(false);}} centered className="modal-section">
                    <Paper style={{width: 300, margin : "auto"}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Login" />
                            <Tab label="Register" />
                        </Tabs>
                            {value === 0 && <TabContainer>
                                                <Login />
                                            </TabContainer>}
                            {value === 1 && <TabContainer>
                                                <Register />
                                            </TabContainer>}
                    </Paper>
                    
                </Modal>
        </div>
            
    )
}


