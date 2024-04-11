import Contact from "../Contact/Contact"
import css from "../ContactList/ContactList.module.css"

export default function ContactList( {contact , onDelete }) {
    return (
      <ul className={css.list}>
        {contact.map((contacts)=>(
          <li key={contacts.id} className={css.item}>
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>
       
     )
   }
   