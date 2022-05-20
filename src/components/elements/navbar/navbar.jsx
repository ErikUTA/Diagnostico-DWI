import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';

export default function SearchAppBar() {
  const matches = useMediaQuery('(min-width:900px)', { noSsr: true });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  } 

  return (
    <>
      {
        matches ? (
          <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar className='AppBar' style={{background: 'white'}}>
              <Toolbar>
                <div className='container-left'>          
                  <h4 className='title'>Best City Guide</h4>
                </div>
                <div className='container-right'>
                  <a className='link' href=''>ICE CREAM</a>
                  <a className='link' href=''>DONUTS</a>
                  <a className='link' href=''>TEA</a>
                  <a className='link' href=''>COFFEE</a>
                </div>
              </Toolbar>
            </AppBar>
          </Box>
          </>
        ): (
          <div className = "nav-gs" style = {{ display: 'flex' }}>              
              <div className='center-gs' style={{ height: '100%', width: 'auto', left: '80%', position: 'relative' }}>
                <div className='border-button-gs'>
                  <button className='nav-button-gs center-gs' onClick={handleClick}>
                    <svg class="ast-mobile-svg ast-menu2-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path></svg>
                  </button>
                </div>
                {/* New changes on feature branch */}

                <Button>Enviar</Button>New data1

                {/*  */}

                <div className={open ? 'nav-menu-gs-on' : 'nav-menu-gs-off'}>
                  <div style={{ position: 'relative', left: '235px', width: '15%', display: 'flex', justifyContent: 'right', padding: '4%' }}>
                    <button className='exit-gs-menu center-gs' onClick={(e) => setOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                      </svg>
                    </button>
                  </div>
                  <hr className='hr-gs' />
                  <a href='#' className='nav-link-gs'>ICE CREAM</a>
                  <hr className='hr-gs' />
                  <a href='#' className='nav-link-gs'>DONUTS</a>
                  <hr className='hr-gs' />
                  <a href='#' className='nav-link-gs'>TEA</a>
                  <hr className='hr-gs' />
                  <a href='#' className='nav-link-gs'>COFFEE</a>                  
                </div>
              </div>
            </div>
        )
      }            
      
    </>
  );
}