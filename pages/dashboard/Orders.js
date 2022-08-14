import React from 'react'
import Layout from '../../components/Layout'

import {
  GridComponent, ColumnDirective, ColumnsDirective,
  Resize, Sort, ContextMenu, Filter, Page, ExcelExport,PdfExport,Edit,Inject
} from "@syncfusion/ej2-react-grids"

import { ordersData, contextMenuItems, ordersGrid } from "../../data/dummyData"

import { Header } from '../../components'

const Orders = () => {
  return (
    <>
      <Layout>
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl">
          <Header category="Page" title="سفارشات" />
          <GridComponent
            id="gridcomp"
            dataSource={ordersData}
            allowSorting
            allowPaging
            allowPdfExport={true}
          >
            <ColumnsDirective>
              {ordersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                Page,
                ExcelExport,
                PdfExport,
                Edit,
              ]}
            />
          </GridComponent>
        </div>
      </Layout>
    </>
  );
}

export default Orders