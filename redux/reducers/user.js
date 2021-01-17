import { API } from "../actions/type";
import Super from "./super";
const initialState = {
  profile:{
    firstName:'ยูเซอร์',
    lastName:'ทดสอบ',
    homePhone:'021111111',
    mobilePhone:'0999999999',
    description:'มือหวยขั้นเทพ มาพร้อมสถิติถูก 50 % กด Subscribe ให้ด้วยนะจ๊ะ',
    address: 'บ้านพ่อหมอยูเซอร์ทดสอบ ต.ในเมือง อ.เมือง จ.บุรีรัมย์'
  },
  feedList:[
    {
      image : "https://www.ruay365.com/wp-content/uploads/2020/07/163323-1024x768-1.jpg",
      text:"77 มาแน่ เข้าเต็มๆ <a>#เลขเด็ดพ่อหมอ</a> \nงวดนี้มาเต็ม พ่อหมอขูดเองกับมือ",
      date:'17 มกราคม เวลา 16:30 น.',
      like:999,
      comments:[
        {
          commenter:{firstName:'Pug',lastName:'Snow'},
          image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thairath.co.th%2Fnews%2Flocal%2Fnortheast%2F1750035&psig=AOvVaw24xOTCppqfzsiEGr1Eim7p&ust=1610976907684000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjP1viKo-4CFQAAAAAdAAAAABAD',
          text:'ตามเลยแล้วกัน',
          date:'17 มกราคม เวลา 17:30 น.',
          like:99}
      ],
      share:99
    }
  ]
};
export default function deepmap(state = initialState, action) {
  const reducer = new Super({ state, action });
  switch (action.type) {
    default:
      return reducer.observe();
  }
}
