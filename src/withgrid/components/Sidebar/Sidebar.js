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