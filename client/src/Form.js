import { useState } from 'react'
import { Button } from "./components/button";
import styled from 'styled-components'
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from './FormModal';
import { Hint } from './Hint';

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px
  font-weight: bold;
`

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
`

//button.jsの継承
const FormButton = styled(Button)`
  width: 120px;
`

export const Form = ({ onAddLang }) => {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setShowModal(true);
  }

  // useEffect(() => {
  //   axios.get(server)
  //     .then(res => {
  //       const bbb = [];
  //       console.log('axiosの中');
  //       for (const booklist of res.data) {
  //         bbb.push(booklist.title)
  //       }
  //       console.log("aaaの中身");
  //       console.log(bbb);
  //       setBooks(bbb.map((number) =>
  //         <ListItem key={number.toString()}>
  //           {number}
  //         </ListItem>
  //       ))
  //     })
  //     .catch((error) => {
  //       console.log('通信失敗');
  //       console.log(error.status);
  //     });
  //   return () => {
  //     console.log('List.jsのuseEffectのunmountが走った')
  //   }
  // }, [])

  return (
    <TabBodyContainer title="新しいデータの追加（API未実装）">
      <form onSubmit={submitForm}>
        <div>
          <Label>言語</Label>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} />
          <Hint />
        </div>
        <ButtonContainer>
          <FormButton>追加</FormButton>
        </ButtonContainer>
      </form>
      {
        //showModalがtrueの時
        showModal &&
        <FormModal
          confirm={() => onAddLang(text)}
          cancel={() => setShowModal(false)}
        />
      }
    </TabBodyContainer>
  )
}