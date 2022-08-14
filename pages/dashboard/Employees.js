import React from 'react'

import Layout from "./../../components/Layout";
import {
  GridComponent, ColumnDirective, ColumnsDirective,
  Resize, Sort, ContextMenu, Filter, Page, ExcelExport,PdfExport,Edit,Inject,Search,Toolbar
} from "@syncfusion/ej2-react-grids"

import { employeesData,employeesGrid} from "../../data/dummyData"

import { Header } from '../../components'


const Employees = () => {
    return(
        <>
         <Layout>
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl">
          <Header category="Page" title="سفارشات" />
          <GridComponent
            id="gridcomp"
            dataSource={employeesData}
            allowSorting
            allowPaging
            allowPdfExport={true}
            toolbar={["Search"]}
            width="auto"
          >
            <ColumnsDirective>
              {employeesGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[
               Search,
                Page,
                Sort,
                Toolbar
                
              ]}
            />
          </GridComponent>
        </div>
      </Layout> 
        </>
    );
}
export default Employees;