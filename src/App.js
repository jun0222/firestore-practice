import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import './App.css'

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getTodos(db) {
  console.log('========db===========')
  console.log(db)
  console.log(db.databaseId)
  const citiesCol = collection(db, 'todos');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function App() {
  const handleClickFetchButton = () => {
    console.log(getTodos(db))
  }

    return (
        <div className="App">
            <h1>hello world</h1>
            <button onClick={handleClickFetchButton}>取得</button>
        </div>
    )
}

export default App;
