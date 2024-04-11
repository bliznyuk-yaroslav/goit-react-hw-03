import { FaPhoneAlt,FaRegSmile } from "react-icons/fa";
import css from "../Contact/Contact.module.css"
export default function Contact({data:{ name, number, id}, onDelete}) {
    return (
  <div className={css.cont}>
    <div>
<p><FaRegSmile className={css.icon}/>{name}</p>
<p><FaPhoneAlt className={css.icon}/>{number}</p>
</div>
<button className={css.btn} onClick={()=>onDelete(id)}>Delete</button>
  </div>   

     )
   }
   