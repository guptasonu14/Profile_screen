import Header from "./components/header/Header";
import Profile from  "./components/profile/Profile";
import Card from "./components/card/Card";
import './App.css'
import profileData from './profileData.json';




function App() {
  return (
    <>
    <Header />
    <div className='coverPhoto'></div>
    <Profile />
    <button className='button'>134 Post</button>
    {profileData.map((item)=><Card item={item}/>)}
    
      
    </>
  );
}

export default App;
