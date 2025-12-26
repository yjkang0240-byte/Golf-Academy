import { Link } from "react-router-dom";

function Home() {
  return (
    <nav>
      <Link to="/guide">연습장 이용</Link>
      <Link to="/faq">자주 묻는 질문</Link>
      <Link to="/notice">이벤트/공지</Link>
      <Link to="/contact">문의/상담</Link>
    </nav>
  );
}

export default Home;
