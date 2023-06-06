
import './App.css';
import { Container,Row,Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

//1. 연락처 리스트와 서치창이 있다. 
//2. 리스트에 유저 이름과 전화번호를 누르면, 추가할 수 잇다. 
//3. 리스트에 아이템이 몇개있는지 보인다.
//4. 사용자가 유저를 이름검색으로 찾을 수 있다. 
function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
          <ContactForm/>
          </Col>
          <Col >
          <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
