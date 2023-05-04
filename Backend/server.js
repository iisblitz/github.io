const express = require('express');
const exp = express();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, deleteDoc } = require('firebase/firestore');
const bP = require('body-parser')
const cors = require('cors')

const corsOptions = {
  origin: ['http://localhost:3001', 'http://localhost:3000'],
};
exp.use(cors(corsOptions));

exp.use(bP.json())
exp.use(cors())

const firebaseConfig = {
  apiKey: "AIzaSyCBvMG8Ne9hMURKaO6VZnfORy1Mz05VkBs",
  authDomain: "davidgonzalez-1e347.firebaseapp.com",
  projectId: "davidgonzalez-1e347",
  storageBucket: "davidgonzalez-1e347.appspot.com",
  messagingSenderId: "386061872411",
  appId: "1:386061872411:web:9546089e1d67ee727237be"
};
initializeApp(firebaseConfig)
const db = getFirestore()

exp.get('/', async (req, res) => {
  const colRef = collection(db, 'Timeline');
  const snapshot = await getDocs(colRef);
  const events = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  res.json(events);
});

exp.get('/art', async (req, res) => {
  const colRef = collection(db, 'Articles');
  const snapshot = await getDocs(colRef);
  const events = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  res.json(events);
});


exp.listen(3001, () => {
  console.log('Server listening on port 3001');
});
