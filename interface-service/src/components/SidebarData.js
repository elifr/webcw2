import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Feed',
        path: '/',
        icon: <MdIcons.MdPublic />,
        cName: 'nav-text'
    },
    {
        title: 'Modules',
        path: '/reports',
        icon: <IoIcons.IoMdChatboxes />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/About',
        icon: <BiIcons.BiHelpCircle />,
        cName: 'nav-text'
    },

]