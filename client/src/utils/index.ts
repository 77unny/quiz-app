import { ISaveData } from '../component/organisms/quiz/types';

/**
 * @description Fisher-Yates 피셔-예이츠 셔플
 * */
export function shuffle(array: string[]): string[] {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

/**
 * @description LocalStorage - 배열형태의 JSON data 를 저장한다.
 * @param {string} key 스토리지에 저장되는 key
 * @param {ISaveData[]} saveData 스토리지에 저장되는 데이터 ISaveData[]
 * @return void
 * */
export function saveToLocalstorage(key: string, saveData: ISaveData[]): void {
  if (window.localStorage.getItem(key) !== null) {
    const getItem = JSON.parse(window.localStorage.getItem(key) || '[]') as ISaveData[];
    const mergedItems = getItem.concat(saveData);
    localStorage.setItem(key, JSON.stringify(mergedItems));
  } else {
    window.localStorage.setItem(key, JSON.stringify([...saveData]));
  }
}

/**
 * @description timeCalculator - date 를 받아
 * @param {number} time date
 * @return {number | string, number | string}
 * */
export function timeCalculator(time: number): { min: number | string; sec: number | string } {
  const min =
    Math.floor(time / 60) < 10
      ? '0' +
        Math.floor(time / 60)
          .toString()
          .slice(-2)
      : Math.floor(time / 60);
  const sec = time % 60 < 10 ? '0' + (time % 60).toString().slice(-2) : time % 60;
  return { min, sec };
}
