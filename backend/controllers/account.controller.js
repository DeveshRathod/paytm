import Account from "../models/account.model.js";
import mongoose from "mongoose";

export const getBalance = async (req, res) => {
  const userId = req.userId;

  try {
    const account = await Account.findOne({ userId });
    if (!account) {
      res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      balance: account.balance.toFixed(2),
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong" + error.message,
    });
  }
};

export const transfer = async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;

  // Fetch the accounts within the transaction
  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );
  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  // Perform the transfer
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  // Commit the transaction
  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
};

//messy way for transfer
// export const transfer = async (req, res) => {
//   const userId = req.userId;
//   const { to, amount } = req.body;

//   try {
//     const account = await Account.findOne({ userId });
//     if (!account) {
//       return res.status(404).json({
//         message: "Sender account not found",
//       });
//     }

//     const isBalance = account.balance - +amount >= 0;
//     if (!isBalance) {
//       return res.status(400).json({
//         message: "Insufficient balance",
//       });
//     }

//     const receiver = await Account.findOne({ userId: to });

//     if (!receiver) {
//       return res.status(400).json({
//         message: "Invalid receiver account",
//       });
//     }

//     const updateGiver = await Account.updateOne(
//       { userId },
//       {
//         $inc: { balance: -amount },
//       }
//     );

//     const updateReceiver = await Account.updateOne(
//       { userId: to },
//       {
//         $inc: { balance: +amount },
//       }
//     );

//     if (updateGiver && updateReceiver) {
//       return res.status(200).json({
//         message: "Transfer successful",
//       });
//     } else {
//       return res.status(500).json({
//         message: "Here",
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal server error" + error.message,
//     });
//   }
// };
