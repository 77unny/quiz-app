import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement } from 'chart.js';
import React, { ReactElement, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { DIFFICULTY } from '../../../../constants';
import Item from './item';
import { Table } from './style';
import { IChart, TData, TTable } from './types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Chart({ historyList }: IChart): ReactElement {
  const [tableList, setTableList] = useState<TTable[]>([]);
  const [data, setData] = useState<TData>({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const tempData: number[] = [];
    const tempLabels: string[] = [];

    historyList.forEach(item => {
      const { setDate, difficulty, NumberOfCorrectAnswer, questions, time } = item;
      const splitSetDate = setDate.split(' ');
      const [year, month, date] = splitSetDate;
      const itemDate = [year.replace('.', ''), month.replace('.', ''), date.replace('.', '')].join('-');
      tempData.push(Number(((NumberOfCorrectAnswer / questions.length) * 100).toFixed(2)));
      tempLabels.push(itemDate);
      setTableList(prev => [
        ...prev,
        {
          time,
          id: `${setDate}${time}`,
          date: itemDate,
          difficulty: DIFFICULTY[difficulty].label,
          answers: Number(((NumberOfCorrectAnswer / questions.length) * 100).toFixed(2)),
        },
      ]);
    });

    setData(prev => ({
      ...prev,
      labels: tempLabels,
      datasets: [
        {
          ...prev.datasets[0],
          data: tempData,
        },
      ],
    }));
  }, []);

  return (
    <div>
      <Table>
        {tableList.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </Table>
      <Line data={data} />
    </div>
  );
}
