import { Container, Content } from './styled';
import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button>
          Nova transação
        </button>
      </Content>

    </Container>
  );
}