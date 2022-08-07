import React, { useState } from 'react';
// import styled from 'styled-components'
import '../Sidebar/Sidebar.scss'
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
//   const [showProjects, setShowProjects] = useState(true);
import Projects from '../Projects/Projects';
// import { Projects } from '../Projects';
// import { useSelectedProjectValue } from '../../context';
// import { AddProject } from '../AddProject';

// const SidebarWrapper = styled.div`
//     @include no-select();
//     width: 266px;
//     height: calc(100vh);
//     padding-top: 74px;
//     // position: fixed;S
//     overflow-x: hidden;
//     overflow-y: hidden;
//     border-right: 1px solid #f1f1f1;
//     background-color: #fafafa;
// `

// const Styledul = styled.ul`
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   flex-direction:column;
// `

// const Styledli = styled.li`
//     list-style-type: none;
//     cursor: pointer;
//     // width: 30px;
//     // height: 30px;
//     text-align: center;
//     vertical-align: middle;
//     float: left;
//   }
// `

// const Stylediv = styled.div`
//   display:flex;
//   padding: 16px 0 16px 10px;
//   width: 100%;
//   gap:1.5rem;
// `

// const ProjectsDropdown =  styled.div`
//     padding: 16px 0 24px 10px;
//     width: 100%;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-align: center;
//         -ms-flex-align: center;
//             align-items: center;
//     gap:1.5rem;
//     border-bottom: 1px solid #f1f1f1;
// `

// const VisibleProjects = styled.div`
//     margin-top: 20px;
//     margin-bottom: 20px;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     border-bottom: $generic-border;
//     padding-left: 10px;
//     cursor: pointer;
// `

const Sidebar = () => {
//   const { setSelectedProject } = useSelectedProjectValue();
//   const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        <li>
          <div>
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li>
          <div>
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div>
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
    <div className="ProjectsDropdown"
        role="button"
        tabIndex={0}
        onClick={() => setShowProjects(!showProjects)}
      >
        <span >
          <FaChevronDown
          />
        </span>
        <h2>Projects</h2>
    </div>
    <>{showProjects && <Projects />}</>
    {/* <VisibleProjects>{showProjects && <Projects selectedTask={selectedTask} getSelected={getSelected} setSelectedTask={setSelectedTask}/>}</VisibleProjects> */}
    </div>
  );
};

export default Sidebar;