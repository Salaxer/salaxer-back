import express from 'express';
const router = express.Router();

import { getApp } from 'firebase/app';
import { query, getDocs, collection, DocumentData, QueryDocumentSnapshot } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import initFirebase from '../firebase/firebase.js';

import dot from 'dotenv'
dot.config();

initFirebase()

const db = getFirestore(getApp());


router.get('/', async function(req, res, next) {
    const q = query(collection(db, "works"));
    try {
        const querySnapshot  = await getDocs(q)
        let data: {}[] = []
        querySnapshot.forEach((doc) => {
            data.push({...doc.data(), id:doc.id,})
        });
        res.status(200).json(data);
        console.log("Response sent");
    } catch (error) {
        res.status(401).json({
          error
        })
    }
});

router.post

export default router