import styled from 'styled-components'
import { useState, useRef, useEffect } from "react";

const HintContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 12px;
`;

const HintInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #757575;
  width: 24px;
  hEight: 24px;
  cursor: help;
`

const PopupContainer = styled.div`
  position: absolute;
  left: 88%;
  bottom: 12px;
  display: flex;
  justyfy-content: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 4px;
  width: 115px;
`;

export const Hint = () => {
    const [showPopup, setShowPopup] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        //refが存在している間はフォーカスする判定
        //このページ上ではポップアップが続いている間
        if (ref.current) ref.current.focus();
    })

    return (
        <HintContainer>
            <HintInner onClick={() => setShowPopup(true)}>
                ?
            </HintInner>
            {
                showPopup &&
                <PopupContainer ref={ref} onBlur={() => setShowPopup(false)} tabIndex={0}>
                    言語の名前を<br/>入れる場所です
                </PopupContainer>
            }
        </HintContainer>
    )

}