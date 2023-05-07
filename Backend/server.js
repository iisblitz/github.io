const express = require('express');
const exp = express();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } = require('firebase/firestore');
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
  appId: "1:386061872411:web:981e9b239689d7f47237be"
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

exp.post('/', async (req, res) => {
  try {
    const docRef = await addDoc(collection(db, 'Timeline'), req.body);
    res.json({ id: docRef.id });
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).json({ error: 'Could not add document' });
  }
});

exp.post('/art', async (req, res) => {
  try {
    const docRef = await addDoc(collection(db, 'Articles'), req.body);
    res.json({ id: docRef.id });
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).json({ error: 'Could not add document' });
  }
});

exp.delete('/:id', async (req, res) => {
  try {
    await deleteDoc(doc(db, 'Timeline', req.params.id));
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document: ', error);
    res.status(500).json({ error: 'Could not delete document' });
  }
});

exp.delete('/art/:id', async (req, res) => {
  try {
    await deleteDoc(doc(db, 'Articles', req.params.id));
    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document: ', error);
    res.status(500).json({ error: 'Could not delete document' });
  }
});

exp.listen(3001, () => {
  console.log('Server listening on port 3001');
});
