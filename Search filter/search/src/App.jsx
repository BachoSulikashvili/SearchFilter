import './App.css'
import {data} from './Data.js'


 function App() {





  return (
    <>
      <div className="cont">
        <h2>უცხოელი მომხმარებლების სია</h2>
        <input type="text" placeholder='მოძებნე მომხმარებელი' 
        onChange={(e) => setSearch(e.target.value)} />
  

        <div className="description">
          <ul>
            <li>სახელი</li>
            <li>გვარი</li>
            <li>მობილური</li>
          </ul>
        </div>
 
         {data.filter((item) => {
          return search.toLowerCase() === '' ? 
          item : item.first_name.toLowerCase().includes(search)
        }).map((item) => (
          <div className="users">
            <ul key={item.first_name}>
              <li>{item.first_name}</li>
              <li>{item.last_name}</li>
              <li>{item.phone}</li>
            </ul>
          </div>
        ))}  

      </div>
    </>
  )
}


export default App