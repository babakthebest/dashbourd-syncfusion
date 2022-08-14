import React from 'react'

import Layout from "./../../components/Layout";
import {
  GridComponent, ColumnDirective, ColumnsDirective,
    Resize, Sort, ContextMenu, Filter, Page, ExcelExport
    , PdfExport, Edit, Inject, Search, Toolbar, Selection
} from "@syncfusion/ej2-react-grids"

import { customersData, customersGrid } from "../../data/dummyData";

import { Header } from '../../components'


const Employees = () => {
    return(
        <>
         <Layout>
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl">
          <Header category="Page" title="مشتریان" />
          <GridComponent
            id="gridcomp"
            dataSource={customersData}
            allowSorting
            allowPaging
            allowPdfExport={true}
            toolbar={["Delete"]}
            editSettings={{allowEditing:true,allowDeleting:true}}
            width="auto"
          >
            <ColumnsDirective>
              {customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[ Selection, Page,Sort,Toolbar, Filter,Edit ]}/>
          </GridComponent>
        </div>
      </Layout> 
        </>
    );
}
export default Employees;