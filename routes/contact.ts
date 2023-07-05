import express from 'express';
const router = express.Router();

import { getApp } from 'firebase/app';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import initFirebase from '../firebase/firebase.js';

import dot from 'dotenv'
import templateHTML from './templateHTML.js';
dot.config();

initFirebase()

const db = getFirestore(getApp());

const sendMessage = async (email:string, message:string, name:string) =>{
  const date = new Date();
  let resolve, error;
  try {
     resolve = await addDoc(collection(db, "contactme"), {
      email,
      message,
      name,
      date: Timestamp.fromDate(date),
    });
    resolve = await addDoc(collection(db, "email"), {
      to: email,
      message: {
        html: templateHTML(name),
        subject: "solicitud de servicios - salaxer"
      }
    });
  } catch (e) {
    error = e;
  }
  return {resolve, error};
}

/* GET users listing. */
router.post('/', async function(req, res, next) {
  if (!req.body.email || !req.body.message || !req.body.name) {
    return res.status(400).json({
      error: 'Faltan campos',
      message: "es necesario verificar que coincidan con los solicitados"
    })
  }
  
  const {resolve, error} = await sendMessage(req.body.email, req.body.message, req.body.name)
  if (error) {
    return res.status(500).json({
      error: error,
      message: "este es un error interno del servidor, porfavor espere un momento"
    })
  }
  console.log(resolve);
  res.status(200).json({
    status: 200,
    body: {
      id: resolve?.id,
      ...req.body
    },
    message: "Se recivio con exito su mensaje"
  })
});

router.get('/', function(req, res, next) {
  res.status(401).json({
    error: "Este metodo es privado >:(",
    message: "No andes de metiche xD"
  })
});

export default router