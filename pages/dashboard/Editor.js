import React from 'react'
import Layout from './../../components/Layout';
import { Header } from '../../components';

import {
    RichTextEditorComponent, Image, Indents
    , Inject, Link, HtmlEditor, Toolbar, QuickToolbar
} from "@syncfusion/ej2-react-richtexteditor"

const Editor = () => {
  return (
    <>
      <Layout>
        <div className="m-2 p-2 mt-24 md:m-10 md:p-10 bg-white rounded-xl">
          <Header title="ادیتور" category="App"/>
          <RichTextEditorComponent>
            <Inject
              services={[Image, Link, HtmlEditor, Toolbar, QuickToolbar ]}
            />
          </RichTextEditorComponent>
        </div>
      </Layout>
    </>
  );
}

export default Editor