import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"
export default function App(){
    const dataElements=data.map((entry)=>{
        return <Entry 
            key={entry.id}
            entry={entry}/>
    })
    return(
        <main>
            <Header/>
            <div className="entries">
                {dataElements}
            </div>
        </main>
    )
}