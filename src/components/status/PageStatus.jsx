import React from 'react';
import Sidebar from '../sidebar/SideBar';
import NavbarStatus from './NavbarStatus';
import ListStatus from './ListStatus';


export default function PageStatus() {


    return(
        <>
        <div className='d-flex'>
            <Sidebar/>
            <div className='w-100' style={ {width:'100vw'} }>
            <NavbarStatus/>
            <ListStatus/>
            </div>
        </div>
        </>
    )

}
