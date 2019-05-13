import React from 'react';
import { Layout } from 'antd';
import '../index.css'

const { Header, Content, Footer } = Layout;


const BaseLayout = (props) => {
    return (
        <Layout >
            <Header>                
            </Header>
            <Content style={{ background: 'grey', padding: '10px 30px' }}>                
                {/* <div style={{ background: 'grey' }}> */}
                {props.children}
                {/* </div> */}
            </Content>
            <Footer >              
            </Footer>
        </Layout>
    )
}

export default BaseLayout;

