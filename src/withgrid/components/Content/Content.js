import React,{useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Tasks from '../Task';
import {SelectedProjectProvider} from '../../context/SelectedProjectContext';
import { LoadDataProvider } from '../../context/LoadDataContext';
import '../Content/Content.scss'

const Content = () =>  {
    const [selectedProject,setSelectedProject] = useState("");
    const [loadData,setLoadData] = useState();

    return(
    <section className="main">
      <LoadDataProvider value={{loadData,setLoadData}}>
        <SelectedProjectProvider value={{selectedProject, setSelectedProject} }>
          <Sidebar />
          <Tasks />
        </SelectedProjectProvider>
      </LoadDataProvider>
    </section>
    )
}

export default Content;