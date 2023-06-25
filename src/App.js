import img from './frontPage.jpg';
import './App.css';

function HomePage() {
  return (
    <div className="App-body">
      <div className="content">
      <h1 className="title">My First Component</h1>
        <span>This is my first react page!</span>
      <h2>Voila!</h2>
      </div>
    </div>

//     <div className="App">
//       <header className="App-header">
//         <p className="App-body">
//         <img src={img} className="App-logo" alt="logo" />
//           This is my first react page!
//           <h2>Voila!</h2>
//         Are you ready to  
//         <a
//           className="App-link"
//           href="/home/bisrat/New_Folder/my-app/src/index.html"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//             Learn React?
//         </a>
//         </p>
//       </header>
//     </div>
  );
}

export default HomePage;
