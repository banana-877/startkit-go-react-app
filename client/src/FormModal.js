import { Button } from "./components/button"
import { Modal } from "./components/modal"
import styled from 'styled-components'

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
`;

export const FormModal = ({cancel, confirm})  => {
    return (
        <Modal>
            <Container>
                <div>本当に追加しますか？</div>
                <ButtonWrapper>
                    <Button onClick={cancel}>Cancel</Button>
                    <Button onClick={confirm}>OK</Button>
                </ButtonWrapper>
            </Container>
        </Modal>
    )
}