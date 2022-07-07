import AddItem from './AddItem'
import DisplayTransaction from './DisplayTransaction'

function Home(props){

    return(
       <div className="container">

        <AddItem add = {props.add}/>
        <DisplayTransaction list = {props.list}/>

       </div>

    );

}
export default Home;