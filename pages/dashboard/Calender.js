import React from 'react'

import {
  ScheduleComponent, ViewsDirective,
  ViewDirective, Day, Week, WorkWeek, Month,
  Agenda, Inject, DragAndDrop,Resize
} from "@syncfusion/ej2-react-schedule"
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars"
import { enableRtl } from "@syncfusion/ej2-base";

import {scheduleData} from "../../data/dummyData"
import Layout from './../../components/Layout';
import Header from './../../components/Header';

const Calender = () => {
  return (
    <>
      <Layout>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 rounded-xl bg-White ">
          <Header category="App" title="تقویم"></Header>
          <ScheduleComponent
            enableRtl={true}
            height="650px"
            eventSettings={{ dataSource: scheduleData }}
            selectedDate={new Date(2021,0,10)}
          >
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                DragAndDrop,
                Resize,
              ]}
            />
          </ScheduleComponent>
        </div>
      </Layout>
    </>
  );
}

export default Calender