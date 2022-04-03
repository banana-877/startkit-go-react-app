import styled from 'styled-components'
import { List } from "./List"
import { Form } from "./Form"
import { useState } from "react";
import { getLanguages } from "./const/languages";
import { withLoading } from "./hoc/withLoading";


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

function App({ data }) {

  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
          <HeaderLi focused={tab === 'book'} onClick={() => setTab('book')}>BOOK</HeaderLi>
        </HeaderUl>
      </Header>
      {
        // 三項演算子と即時関数以外でJSXに分岐書くやり方探す
        // tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang}/>
        (() => {
          if (tab === 'list'){
            return <List langs={langs}/> 
          }else if (tab === 'form'){
            return <Form onAddLang={addLang}/>
          } else if (tab === 'book') {
            return <div>BOOK</div>
          }
        }) ()
      }
    </div>
  );
}

export default withLoading(App, getLanguages);
