import express, { Request, Response } from "express";
import { Chat, ChatDoc } from "../../models/chat";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/chat/get-all",
  requireAuth,
  async (req: Request, res: Response) => {
    const chats = await Chat.find();

    if (!chats) {
      throw new NotFoundError();
    }

    const response: ResponseType<ChatDoc[]> = {
      status: "success",
      code: 201,
      message: "Chats returned successfully",
      data: chats,
    };

    res.status(201).send(response);
  }
);

export { router as showAllChatRouter };
