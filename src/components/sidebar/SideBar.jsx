import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarHeader
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar toggled={true} textColor="#fff" backgroundColor="#e43641">
        <CDBSidebarHeader prefix={<AiOutlineMenu />}>
          Urbvan
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment-alt">Mensajes</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/status" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="cog">Estatus</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;