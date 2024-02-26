import express from 'express';
import { PaymentController } from './payment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', PaymentController.getAllFromDB);
router.get('/:id', PaymentController.getByIdFromDB);

router.post('/init', PaymentController.initPayment);

router.post('/webhook', PaymentController.webhook);

export const PaymentRoutes = router;
