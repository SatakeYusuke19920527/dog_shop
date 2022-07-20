import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // 宿泊数
  const [stays, setStays] = useState(0);
  // チェックアウト時間
  const [checkoutTime, setCheckoutTime] = useState(0);
  // 小型犬・中型犬・大型犬
  const [dogType, setDogType] = useState('');
  // 合計金額
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (stays === 0 || checkoutTime === 0 || dogType === '') return;
    const stayAmount = calcStaysCost(stays);
    const checkoutTimeAmount = calcCheckoutCost(checkoutTime);
    const dogTypeAmount = calcDogTypeCost(dogType);
    console.log(
      '🚀 ~ file: App.tsx ~ line 14 ~ useEffect ~ checkoutTimeAmount',
      checkoutTimeAmount + stayAmount + dogTypeAmount
    );
    setTotalAmount(checkoutTimeAmount + stayAmount + dogTypeAmount);
  }, [stays, checkoutTime, dogType]);
  const calcStaysCost = (st: number): number => {
    switch (st) {
      case 1:
        return 4500 * 1;
      case 2:
        return 4500 * 2;
      case 3:
        return 4500 * 3;
      case 4:
        return 4500 * 4;
      case 5:
        return 4500 * 5;
      case 6:
        return 4500 * 6;
      case 7:
        return 4500 * 7;
      default:
        return 0;
    }
  };
  const calcCheckoutCost = (ct: number): number => {
    switch (ct) {
      case 1:
        return 0;
      case 2:
        return 500;
      case 3:
        return 1000;
      case 4:
        return 1500;
      default:
        return 0;
    }
  };
  const calcDogTypeCost = (dt: string): number => {
    switch (dt) {
      case '小型犬':
        return 0;
      case '中型犬':
        return 500;
      case '大型犬':
        return 2000;
      default:
        return 0;
    }
  };
  return (
    <div className="App">
      <h1>dog hotel</h1>
      <div className="flex">
        <h2>宿泊数</h2>
        <select onChange={(e) => setStays(Number(e.target.value))}>
          <option value={0}>宿泊数を選択してください</option>
          <option value={1}>1泊2日</option>
          <option value={2}>2泊3日</option>
          <option value={3}>3泊4日</option>
          <option value={4}>4泊5日</option>
          <option value={5}>5泊6日</option>
          <option value={6}>6泊7日</option>
          <option value={7}>7泊8日</option>
        </select>
      </div>
      <div className="flex">
        <h2>チェックアウト時刻</h2>
        <select onChange={(e) => setCheckoutTime(Number(e.target.value))}>
          <option value={0}>チェックアウト時刻</option>
          <option value={1}>9-10</option>
          <option value={2}>10-12</option>
          <option value={3}>12-15</option>
          <option value={4}>15-18</option>
        </select>
      </div>
      <div
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setDogType(e.target.value);
        }}
      >
        <input type="radio" name="theme" value="小型犬" />
        小型犬
        <input type="radio" name="theme" value="中型犬" />
        中型犬
        <input type="radio" name="theme" value="大型犬" />
        大型犬
      </div>
      <h2>¥{totalAmount.toLocaleString()}</h2>
    </div>
  );
}

export default App;
