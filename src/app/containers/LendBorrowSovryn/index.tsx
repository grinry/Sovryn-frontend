import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CurrencyContainer from './components/CurrencyContainer';

import './assets/index.scss';
import CurrencyDetails from './components/CurrencyDetails';
import LendingHistory from './components/LendingHistory';
import { Header } from 'app/components/Header';

type Props = {};

const LendBorrowSovryn: React.FC<Props> = props => {
  const [key, setKey] = useState<'BTC' | 'DOC'>('BTC');

  return (
    <>
      <Header />
      <main className="container">
        <Row>
          <div className="col-12 col-lg-6">
            <CurrencyContainer state={key} setState={setKey} />
          </div>
          <div className="col-12 col-lg-6 mt-3 mt-lg-0">
            <CurrencyDetails currency={key} />
          </div>
        </Row>
      </main>
      <Container className="d-flex justify-content-center">
        <LendingHistory />
      </Container>
    </>
  );
};

export default LendBorrowSovryn;