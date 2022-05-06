import { useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import Footer from '../../elements/footer/footer';
import SearchAppBar from '../../elements/navbar/navbar';
import Icon from './img/icon2.png';

export default function Home() {
    const matches = useMediaQuery('(min-width:900px)', { noSsr: true });

    return (
        <>
            <SearchAppBar />
            <div className={ matches ? 'container' : 'container-responsive'}>
                <div style={{textAlign: 'center'}}>
                    <img className='img' src={Icon} width="120" height="120"/>
                    <div style={{color: 'white', fontFamily: 'Poppins', fontSize: '25px'}}>The Best City</div>
                    <div style={{color: 'white', fontFamily: 'Poppins', marginBottom: '35px', width: `${matches ? 'auto' : '332px'}`}}>The best drinks and eats in the best city ever</div>
                </div>
            </div>
            <div className='center'>
                <div style={{width: '1000px'}} className='grid'>
                    <div style={{marginLeft: '15px', marginRight: '15px'}}>
                        <div className='subtitle'>Welcome!</div>
                        <div className='font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='font' style={{marginTop: '8%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, omnis temporibus quaerat numquam praesentium laudantium quia necessitatibus.</div>
                        <div className='font' style={{marginTop: '8%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, omnis temporibus quaerat numquam praesentium laudantium quia necessitatibus.</div>
                    </div>
                    <div style={{marginLeft: '15px', marginRight: '15px'}}>
                        <div className='subtitle'>Great Food</div>
                        <div className='img-body'>
                            <div className='text-img'>
                                <div style={{textAlign: 'center'}}><strong>Some Header Content Caption</strong></div>
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed blanditiis obcaecati sunt deserunt eveniet, qui."
                            </div>
                        </div>
                        <div className='font' style={{marginTop: '8%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, omnis temporibus quaerat numquam praesentium laudantium quia necessitatibus.</div>
                    </div>
                    <div style={{marginLeft: '15px', marginRight: '15px'}}>
                        <div className='subtitle'>How to get here</div>
                        <div className='font'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                        <div className='font' style={{marginTop: '8%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, omnis temporibus quaerat numquam praesentium laudantium quia necessitatibus.</div>
                        <div className='font' style={{marginTop: '8%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae excepturi, omnis temporibus quaerat numquam praesentium laudantium quia necessitatibus.</div>
                    </div>                    
                </div>
            </div>
            <Footer />
        </>
    )
}