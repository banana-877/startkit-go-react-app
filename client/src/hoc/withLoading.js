import styled from 'styled-components'
import { useEffect, useState } from "react";

// Higher-Order Conponent＋ライフサイクルまとめ

const  LoadDiv = styled.div`
   padding: 36px;
`

export const withLoading = (WrappedComponent, fetchData) => {
    return () => {
        const [data, setData] = useState(null);
//functional ComponentだとuseEffectで制御する
//useEffectはmounting時とupdating時に発火される
        useEffect(() => {
            fetch();
//下記のように配列を入れて何も入れなかった場合、mountingの時にのみ発火される
        },[])
  //下記のように、updateで依存するStateを決めることもできる
  // },[langs, tab])
  //下記のように何も入れなければ、mountingとupdatingで動く
  // })

        const fetch = async () => {
            const data = await fetchData();
            setData(data);
        }

        const Loading = (
            <LoadDiv>ロード中...</LoadDiv>
        )
        return data ? <WrappedComponent data={data}/> : Loading;
    }
}


//ReactのClass Componentでのライフサイクルの順番
/**
 *  Mounting(マウント時):Componentが表示されるまでの期間のこと。
  1.constructor()
  2.getDerivedStateFromProps() // 一般的ではないライフサイクル
  3.render() // ここで描画される
  4.componentDidMount()

 * Updating(更新時):Componentが表示され、Stateの更新を行う期間のこと。
  1.getDerivedStateFromProps() // 一般的ではないライフサイクル
  2.shouldComponentUpdate() // 一般的ではないライフサイクル
  3.render()
  4.getSnapshotBeforeUpdate() // 一般的ではないライフサイクル
  5.componentDidUpdate()

 * Unmounting(マウント解除時):他のComponentに移るときにだけ呼ばれる期間。
  1.componentWillUnmount()
 * */ 

 //呼び出し元になっているApp.jsはUnmountingされない
 //Unmountingのメソッドは遷移先の方に書く