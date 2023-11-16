import './Header.css';
import { useSelector } from "react-redux";

export default function Header() {
    const money = useSelector((state) => state.bet.money);
  return (
    <header>Money : <span>{money}</span> $</header>
  )
}
