import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Chat, ChatDoc } from "../../models/chat";
import { BadRequestError } from "../../errors/bad-request-error";
import { IkonkaChat } from "../../models/ikonkaChat";

const router = express.Router();

router.post(
  "/api/chat",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {} = req.body;

    //check is wholesealer chat snapshot has been found
    if (!providerSnapshot) {
      throw BadRequestError;
    }

    const newChat = Chat.build({});

    await newChat.save();

    const response: ResponseType<ChatDoc> = {
      status: "success",
      code: 201,
      message: "Chat created successfully",
      data: newChat,
    };

    res.status(201).send(response);
  }
);

export { router as newChatRouter };
