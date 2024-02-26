import prisma from '../../../shared/prisma';
import { sslService } from '../ssl/ssl.service';

const initPayment = async (data: any) => {
  const paymentSession = await sslService.initPayment({
    total_amount: data.amount,
    tran_id: data.transactionId, // use unique tran_id for each api call
    cus_name: data.studentName,
    cus_email: data.student_email,
    cus_add1: data.address,
    cus_phone: data.phone,
  });

  await prisma.payment.create({
    data: {
      amount: data.amount,
      transactionId: data.transactionId,
      studentId: data.studentId,
    },
  });

  return paymentSession.redirectGatewayURL;
};

export const PaymentService = { initPayment };
