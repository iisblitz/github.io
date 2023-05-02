const express = require('express');
const exp = express();
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, deleteDoc } = require('firebase/firestore');
const bP = require('body-parser')

exp.use(bP.json())

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

exp.post('/add', async (req, res) => {
  const { language, image, category, name, location, businessName, description, begin, end } = req.body;
  try {
    const docRef = await addDoc(collection(db, 'Timeline'), {
      language,
      image,
      category,
      name,
      location,
      businessName,
      description,
      begin,
      end,
    });
    res.json({ message: `Document written with ID: ${docRef.id}` }); // return a response
    console.log(docRef)
  } catch (error) {
    console.error('Error adding document: ', error);
    res.json({ error: 'Error adding document' }); // return a response
  }
});


exp.delete('/delete', async (req, res) => {
  const id = req.body.id;
  
  try {
    await deleteDoc(doc(db, "Timeline", id));
    res.json({ message: `Document with id ${id} successfully deleted` });
  } catch (error) {
    console.error("Error deleting document: ", error);
    res.status(500).json({ message: `Error deleting document with id ${id}` });
  }
});

exp.listen(3001, () => {
  console.log('Server listening on port 3001');
});
