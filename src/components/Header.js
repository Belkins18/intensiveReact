import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from "styled-components";

import Link from './Link';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 50px;
`
class Header extends React.Component {
    render() {
        let linkList = ['Вызов мастера', 'Прайс на ремонт', 'Наши преимущества', 'Схема работы', 'Отзывы клиентов', 'Примеры работ', 'Контакты'];
        return(
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            <li>
                                <Link link='#' text='Вызов мастера'></Link>
                            </li>
                            <li>
                                <Link link='#' text='Прайс на ремонт'></Link>
                            </li>
                            <li>
                                <Link link='#' text='Наши преимущества'></Link>
                            </li>
                            <li>
                                <Link link='#' text='Схема работы'></Link>
                            </li>
                            <li>
                                <Link link='#' text='Отзывы клиентов'></Link>
                            </li>
                            <li>
                                <Link link='#' text='Контакты'></Link>
                            </li>
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default Header;