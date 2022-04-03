import { server } from "../const/apiBase";
import axios from 'axios';

export const handleClick = () => {
  axios.get(server)
    .then(res => {
      // console.log(res.data.book);
      // setBooks([...books, res.data.book])
      return res.data.book;
    })
    .catch((error) => {
      console.log('通信失敗'); 
      console.log(error.status);
  });
};

// async func1(
//   aa: string,
//   bb: string
// ): Promise<response> {
//   return getRequest(
//     `/test/list/${aa}?test=${bb}`
//   );
// },