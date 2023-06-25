import Darkimg from './darkBackground.jpg';
import Chatlogo from '/home/bisrat/New_Folder/my-app/src/logo.svg';
import './App.css';

function HomePage() {
  return (
    <div className="App-body">
      <div className="content">
      <h1 className="underline ">My First Component</h1>
        <span>This is my first react page!</span>
      <h2>Voila!</h2>
      </div>
    </div>
  );
}

function DarkCard(){
return <img src={Darkimg } alt="Dark Card" className="blackCard"/>
}

function Chat(){
  return (
    <div class="p-6 max-w-sm mx-auto bg-grey rounded-xl shadow-lg shadow-black flex items-center space-x-4">
    <div class="shrink-0">
    <img class="h-12 w-12" src={Chatlogo} alt="ChitChat Logo"/>
    </div>
    <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
  );
}

function End(){
  return(<div class="">End of Page</div>)
}
export default function HomePagewithDarkCard(){
  return(
    <section>
      <HomePage/>
      <DarkCard/>
      <Chat/>
      <End/>
    </section>
    )
}
