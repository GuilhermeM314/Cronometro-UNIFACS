import React from 'react';
import './App.css';
import { Statistic, Card, Row, Col, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, HistoryOutlined } from '@ant-design/icons';

const Contador = ({children, horas, minutos, segundos, centesimos }) => (
    <div className="site-statistic-demo-card">
        <Row gutter={16}>
            <Col span={12} >
                <Card>
                    <Statistic 
                        style={{width: '100%'}}
                        title="Time"
                        value={`${horas}:${minutos}:${segundos}:${centesimos}`}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<HistoryOutlined />}
                    />
                </Card>
            </Col>
            <Col span={12}>
                {children}
            </Col>
        </Row>
    </div>    
)

export default Contador