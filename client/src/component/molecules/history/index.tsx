import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIsOpen } from '../../../store/modal';
import Button from '../../atoms/button';
import { ISaveData } from '../../organisms/quiz/types';
import Item from './item';
import { Body, Container, EmptyMessage, Foot, Head } from './style';

export default function History(): ReactElement {
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState(
    JSON.parse(window.localStorage.getItem('quiz') || '[]') as ISaveData[],
  );
  const onClose = () => dispatch(setIsOpen(false));
  const onRemove = () => {
    window.localStorage.removeItem('quiz');
    setHistoryList([]);
  };
  const onViewChart = () => console.log('준비중입니다.');

  return (
    <Container>
      <Head>퀴즈 기록</Head>
      <Body>
        {historyList.length ? (
          historyList.map(item => <Item key={`${item.setDate} + ${item.time}`} item={item} />)
        ) : (
          <EmptyMessage>기록이 존재하지 않습니다.</EmptyMessage>
        )}
      </Body>
      <Foot>
        {!!historyList.length && (
          <>
            <Button size={'small'} children={'차트 보기'} onClick={onViewChart} />
            <Button size={'small'} children={'기록 전체 삭제'} onClick={onRemove} />
          </>
        )}
        <Button size={'small'} children={'닫기'} onClick={onClose} />
      </Foot>
    </Container>
  );
}
