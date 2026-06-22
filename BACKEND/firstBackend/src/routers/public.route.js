import express from 'express';
import { ContactUs } from '../controllers/public.controllers.js';

const router = express.Router();

router.post(".contect-us",ContactUs);

export default router; 